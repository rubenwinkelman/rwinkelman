import React, { Suspense, useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

function SceneLighting({ isHovered }) {
  const ambientRef = useRef();
  const rimLightRef = useRef();

  useFrame((_, delta) => {
    // Gentle subtle warm ambient lift on hover (no blinding flare)
    const targetAmbient = isHovered ? 1.25 : 1.1;
    if (ambientRef.current) {
      ambientRef.current.intensity = THREE.MathUtils.damp(
        ambientRef.current.intensity,
        targetAmbient,
        4.0,
        delta
      );
    }

    // Warm orange PointLight sliding behind his shoulder and illuminating shirt & jawline
    if (rimLightRef.current) {
      const targetIntensity = isHovered ? 3.2 : 0;
      rimLightRef.current.intensity = THREE.MathUtils.damp(
        rimLightRef.current.intensity,
        targetIntensity,
        4.5,
        delta
      );

      // Slide smoothly into rim position behind right shoulder
      const targetX = isHovered ? 0.48 : 0.76;
      const targetY = isHovered ? 0.38 : 0.52;
      const targetZ = isHovered ? -0.38 : -0.62;
      rimLightRef.current.position.x = THREE.MathUtils.damp(rimLightRef.current.position.x, targetX, 4.0, delta);
      rimLightRef.current.position.y = THREE.MathUtils.damp(rimLightRef.current.position.y, targetY, 4.0, delta);
      rimLightRef.current.position.z = THREE.MathUtils.damp(rimLightRef.current.position.z, targetZ, 4.0, delta);
    }
  });

  return (
    <>
      <ambientLight ref={ambientRef} intensity={1.1} />
      {/* Warm steady brand spotlight from top-left */}
      <spotLight
        position={[-2.2, 3.2, 2.4]}
        angle={0.65}
        penumbra={0.8}
        intensity={2.2}
        color="#ff7a45"
      />
      {/* Crisp steady rim light from top-right */}
      <directionalLight
        position={[2.5, 2.2, 1.8]}
        intensity={0.45}
        color="#ffffff"
      />
      {/* Soft front fill */}
      <directionalLight
        position={[0, -0.5, 1.5]}
        intensity={0.35}
        color="#f4ece1"
      />
      {/* Warm orange PointLight behind shoulder for brand rim glow */}
      <pointLight
        ref={rimLightRef}
        position={[0.76, 0.52, -0.62]}
        intensity={0}
        distance={2.6}
        decay={2}
        color="#ff6b35"
      />
    </>
  );
}

const TOOLTIP_MESSAGES = [
  'Klaar voor een prototype?',
  'Eerst zien. Dan beslissen.',
  'Binnen 5 dagen live?',
];

function AvatarCharacter({
  isHovered,
  onHoverStart,
  onHoverEnd,
  onAvatarClick,
}) {
  const groupRef = useRef();
  const { scene, animations } = useGLTF('/model.glb');
  
  // Bone and mesh references for procedural tracking and facial smile
  const headBoneRef = useRef(null);
  const neckBoneRef = useRef(null);
  const spine2BoneRef = useRef(null);
  const bodyMeshRef = useRef(null);

  // Smooth target look angles & animation timers (exact 0 in rest facing straight ahead)
  const targetLook = useRef({ yaw: 0, pitch: 0 });
  const nodStartTime = useRef(0);
  const clickStartTime = useRef(0);
  const isHoveredMesh = useRef(false);
  const leaveTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, []);

  // Filter idle animation to freeze feet, legs and hips translation,
  // preserving natural breathing, shoulders, arms and hand motions while
  // keeping feet completely stationary on the floor.
  const filteredAnimations = useMemo(() => {
    if (!animations || animations.length === 0) return [];
    return animations.map((anim) => {
      const clip = anim.clone();
      clip.tracks = clip.tracks.filter((track) => {
        const name = track.name.toLowerCase();
        // 1. Freeze feet, toes, legs and hips completely
        if (
          name.includes('foot') ||
          name.includes('leg') ||
          name.includes('toebase') ||
          name.includes('hips')
        ) {
          return false;
        }
        // 2. Free Head and Neck from clip wobble so cursor tracking is completely fluid and accurate
        if (name.includes('head') || name.includes('neck')) {
          return false;
        }
        return true;
      });
      return clip;
    });
  }, [animations]);

  const { actions } = useAnimations(filteredAnimations, groupRef);

  // Locate bones in the skeleton and build procedural smile morph target
  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isBone) {
        const lower = obj.name.toLowerCase();
        if (lower === 'head') headBoneRef.current = obj;
        if (lower === 'neck') neckBoneRef.current = obj;
        if (lower === 'spine2') spine2BoneRef.current = obj;
      }
      // Procedural smile morph target for Avaturn body
      if (obj.name === 'avaturn_body' && obj.geometry) {
        bodyMeshRef.current = obj;
        if (!obj.geometry.morphAttributes.position) {
          const geom = obj.geometry;
          const pos = geom.attributes.position;
          const smilePos = new Float32Array(pos.count * 3);

          for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i);
            const y = pos.getY(i);
            const z = pos.getZ(i);

            let dx = 0;
            let dy = 0;
            let dz = 0;

            // Strictly protect the nose and midface:
            // The nose tip is at y=1.692 and nostrils are at y=1.680-1.686.
            // We restrict morphing strictly to the mouth region (y between 1.635 and 1.669).
            if (y < 1.670 && y > 1.635) {
              // Mouth corners: lift and widen into a natural, friendly smile
              const cornerDist = Math.hypot(Math.abs(x) - 0.026, y - 1.656, (z - 0.080) * 1.4);
              if (cornerDist < 0.025) {
                const f = Math.pow(Math.cos((cornerDist / 0.025) * Math.PI * 0.5), 1.5);
                dy += 0.012 * f; // Lifts mouth corners naturally
                dx += (x > 0 ? 1 : -1) * 0.005 * f; // Widens mouth slightly
                dz += 0.002 * f;
              }

              // Upper lip: subtle natural upward arch without affecting the nose base
              const upperLipDist = Math.hypot(x, y - 1.664, z - 0.096);
              if (upperLipDist < 0.018 && y < 1.668) {
                const f = Math.pow(1 - upperLipDist / 0.018, 2);
                dy += 0.0035 * f;
              }
            }

            smilePos[i * 3] = x + dx;
            smilePos[i * 3 + 1] = y + dy;
            smilePos[i * 3 + 2] = z + dz;
          }

          geom.morphAttributes.position = [new THREE.BufferAttribute(smilePos, 3)];
          obj.updateMorphTargets();
          obj.morphTargetInfluences = [0];
          if (obj.material) {
            obj.material.needsUpdate = true;
          }
        }
      }
    });
  }, [scene]);

  // Start breathing and upper body idle animation
  useEffect(() => {
    if (actions) {
      const idleAction = actions['IdleV4.2(maya_head)'] || Object.values(actions)[0];
      if (idleAction) {
        idleAction.fadeIn(0.5).play();
      }
    }
  }, [actions]);

  // Track cursor across the entire window with symmetric gaze around the avatar canvas center
  useEffect(() => {
    const handlePointerMove = (e) => {
      const el = document.getElementById('hero-avatar-container');
      let centerX = window.innerWidth * 0.85;
      let centerY = 220;

      if (el) {
        const rect = el.getBoundingClientRect();
        centerX = rect.left + rect.width * 0.5;
        centerY = rect.top + rect.height * 0.22;
      }

      // X and Y offset relative to the exact center of the avatar
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      // Symmetrical rotation mapping:
      // dx === 0: exact center (yaw = 0, facing directly forward)
      // dx < 0: left of avatar (negative yaw, looks towards content on the left)
      // dx > 0: right of avatar (positive yaw, looks towards the right screen edge)
      const rightAvailable = Math.max(window.innerWidth - centerX, 100);
      const leftAvailable = Math.max(centerX, 400);
      const MAX_YAW = 0.65;

      let targetYaw = 0;
      if (dx >= 0) {
        // Smoothly reach full right gaze as cursor moves towards the right side/edge
        const normRight = Math.min(dx / Math.min(rightAvailable, 220), 1.0);
        targetYaw = normRight * MAX_YAW;
      } else {
        // Smoothly reach full left gaze as cursor moves towards content
        const normLeft = Math.min(Math.abs(dx) / Math.min(leftAvailable, 550), 1.0);
        targetYaw = -normLeft * MAX_YAW;
      }

      // Symmetrical clamping between -0.65 and +0.65
      targetYaw = THREE.MathUtils.clamp(targetYaw, -MAX_YAW, MAX_YAW);

      // Symmetrical vertical pitch
      const pitch = THREE.MathUtils.clamp((dy / 450) * 0.45, -0.25, 0.30);

      targetLook.current = { yaw: targetYaw, pitch };
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  // Smooth frame-by-frame procedural gaze tracking, nod, smile, and click reaction
  useFrame((state, delta) => {
    const { yaw, pitch } = targetLook.current;

    // Distinct 1-shot greeting nod gesture when hovered
    let nodOffset = 0;
    if (isHovered && nodStartTime.current > 0) {
      const elapsed = (performance.now() - nodStartTime.current) / 1000;
      if (elapsed < 0.55) {
        nodOffset = Math.sin((elapsed / 0.55) * Math.PI) * 0.28;
      }
    }

    // Playful click reaction: cheerful turn toward CTA button, lively nod and tilt
    let clickTurnYaw = 0;
    let clickNodPitch = 0;
    let clickRoll = 0;

    if (clickStartTime.current > 0) {
      const elapsed = (performance.now() - clickStartTime.current) / 1000;
      const DURATION = 1.0;
      if (elapsed < DURATION) {
        const p = elapsed / DURATION;
        // Smooth sine curve envelope for turning toward CTA
        const turnCurve = Math.sin(p * Math.PI);
        // Head turns towards left CTA button (-yaw)
        clickTurnYaw = -0.48 * turnCurve;
        // Cheerful nod dipping down and springing up
        clickNodPitch = Math.sin(p * Math.PI * 1.5) * 0.22 * (1 - p * 0.4);
        // Friendly sideways head tilt
        clickRoll = -0.12 * turnCurve;
      } else {
        clickStartTime.current = 0;
      }
    }

    // Direct eye contact towards the viewer when hovering on him
    const effectiveYaw = isHovered ? yaw * 0.15 : yaw;
    const effectivePitch = isHovered ? pitch * 0.15 : pitch;

    // Gentle organic breathing cycle on head
    const breath = Math.sin(state.clock.elapsedTime * 1.6) * 0.012;

    // Upper chest: leans slightly forward towards user on hover & turns slightly on click
    if (spine2BoneRef.current) {
      spine2BoneRef.current.rotation.y = THREE.MathUtils.damp(
        spine2BoneRef.current.rotation.y,
        effectiveYaw * 0.15 + clickTurnYaw * 0.20,
        3.0,
        delta
      );
      spine2BoneRef.current.rotation.x = THREE.MathUtils.damp(
        spine2BoneRef.current.rotation.x,
        isHovered ? 0.04 : 0,
        4.0,
        delta
      );
    }

    // Neck: turns smoothly and contributes to greeting nod & click nod
    if (neckBoneRef.current) {
      neckBoneRef.current.rotation.y = THREE.MathUtils.damp(
        neckBoneRef.current.rotation.y,
        effectiveYaw * 0.35 + clickTurnYaw * 0.35,
        4.0,
        delta
      );
      neckBoneRef.current.rotation.x = THREE.MathUtils.damp(
        neckBoneRef.current.rotation.x,
        0.18 + effectivePitch * 0.30 + (nodOffset * 0.30) + (clickNodPitch * 0.30),
        6.0,
        delta
      );
    }

    // Head: tracks cursor, nods clearly when hovered, and turns cheerful on click
    if (headBoneRef.current) {
      headBoneRef.current.rotation.y = THREE.MathUtils.damp(
        headBoneRef.current.rotation.y,
        effectiveYaw * 0.55 + clickTurnYaw * 0.65,
        4.5,
        delta
      );
      headBoneRef.current.rotation.x = THREE.MathUtils.damp(
        headBoneRef.current.rotation.x,
        -0.10 + effectivePitch * 0.65 + breath + (nodOffset * 0.70) + (clickNodPitch * 0.70),
        6.5,
        delta
      );
      headBoneRef.current.rotation.z = THREE.MathUtils.damp(
        headBoneRef.current.rotation.z,
        clickRoll,
        5.0,
        delta
      );
    }

    // Animate procedural smile morph target into a warm, noticeable smile on hover or click
    if (bodyMeshRef.current && bodyMeshRef.current.morphTargetInfluences) {
      bodyMeshRef.current.morphTargetInfluences[0] = THREE.MathUtils.damp(
        bodyMeshRef.current.morphTargetInfluences[0],
        (isHovered || clickStartTime.current > 0) ? 1.0 : 0.0,
        6.0,
        delta
      );
    }
  });

  const handleMeshPointerOver = (e) => {
    e.stopPropagation();
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    if (!isHoveredMesh.current) {
      isHoveredMesh.current = true;
      nodStartTime.current = performance.now();
      onHoverStart();
    }
  };

  const handleMeshPointerOut = (e) => {
    e.stopPropagation();
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
    }
    leaveTimer.current = setTimeout(() => {
      isHoveredMesh.current = false;
      leaveTimer.current = null;
      onHoverEnd();
    }, 200);
  };

  return (
    <group
      ref={groupRef}
      position={[0, -0.815, 0]}
      rotation={[0, 0, 0]}
      scale={0.78}
      onPointerOver={handleMeshPointerOver}
      onPointerOut={handleMeshPointerOut}
      onClick={(e) => {
        e.stopPropagation();
        clickStartTime.current = performance.now();
        onAvatarClick();
      }}
    >
      <primitive object={scene} />
    </group>
  );
}

export default function HeroAvatar() {
  const [loaded, setLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [tooltipIndex, setTooltipIndex] = useState(0);
  const hasHoveredOnce = useRef(false);

  // Update browser cursor only when physically hovering the 3D character mesh
  useEffect(() => {
    document.body.style.cursor = isHovered ? 'pointer' : 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [isHovered]);

  const handleHoverStart = () => {
    if (hasHoveredOnce.current) {
      setTooltipIndex((prev) => (prev + 1) % TOOLTIP_MESSAGES.length);
    } else {
      hasHoveredOnce.current = true;
    }
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  const handleAvatarClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1400);

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="hero-avatar-container"
      className="relative w-full h-full select-none pointer-events-none"
    >
      {/* Soft orange radial background glow (rgba(255, 107, 53, 0.15)) fading in gently on hover */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[radial-gradient(circle,_rgba(255,107,53,0.15)_0%,_rgba(255,107,53,0.04)_50%,_transparent_70%)] pointer-events-none z-0 transition-opacity duration-500 ease-out ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Soft, subtle natural ground shadow */}
      <div
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-24 h-2.5 rounded-[100%] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.30)_0%,_rgba(0,0,0,0.08)_50%,_transparent_75%)] blur-[2px] pointer-events-none z-10"
      />

      {/* Floating minimalist speech bubble badge on the RIGHT side of his head */}
      <div
        className={`absolute top-7 left-[84%] z-40 whitespace-nowrap pointer-events-none select-none transition-all duration-300 ease-out ${
          isHovered
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-1.5 scale-95'
        }`}
      >
        <div className="relative flex items-center gap-1.5 bg-neutral-900/90 border border-white/10 text-xs px-3 py-1.5 rounded-full shadow-2xl backdrop-blur-sm text-neutral-200">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] animate-pulse shrink-0" />
          <span className="font-medium">
            {isClicked ? 'Komt eraan! 🚀' : TOOLTIP_MESSAGES[tooltipIndex]}
          </span>

          {/* Little tail pointer on the left pointing towards his head */}
          <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-900/90 border-l border-b border-white/10 rotate-45" />
        </div>
      </div>

      {/* 3D Canvas with precise mesh raycasting */}
      <div className="relative z-10 w-full h-full pointer-events-auto">
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 2.5], fov: 36 }}
            gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
            onCreated={() => setLoaded(true)}
            className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <SceneLighting isHovered={isHovered} />
            <AvatarCharacter
              isHovered={isHovered}
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
              onAvatarClick={handleAvatarClick}
            />
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
}



