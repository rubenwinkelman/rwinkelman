import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('reveal-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.05,
        rootMargin: options.rootMargin || '120px 0px 50px 0px'
      }
    );

    const items = el.querySelectorAll('.reveal-item');
    if (items.length > 0) {
      items.forEach((item) => observer.observe(item));
    } else {
      observer.observe(el);
    }

    // Fail-safe: ensure everything becomes visible after 2s so content is never hidden on edge-case browsers
    const timer = setTimeout(() => {
      if (el) {
        el.classList.add('reveal-visible');
        el.querySelectorAll('.reveal-item').forEach(item => item.classList.add('reveal-visible'));
      }
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [options.threshold, options.rootMargin]);

  return ref;
}
