import { useEffect, useRef } from 'react';

// On first mount, when shouldScroll is true, scrolls the element behind targetRef to the middle of
// the viewport. An element taller than the viewport is aligned to the top instead, so its heading
// stays visible. Later changes to shouldScroll are ignored: this only handles deep links on load.
export const useScrollIntoViewOnInit = <T extends HTMLElement>(shouldScroll: boolean) => {
  const targetRef = useRef<T>(null);
  const shouldScrollOnInitRef = useRef(shouldScroll);

  useEffect(() => {
    if (!shouldScrollOnInitRef.current) return;

    const frame = requestAnimationFrame(() => {
      const target = targetRef.current;
      if (!target) return;

      const fitsViewport = target.getBoundingClientRect().height <= window.innerHeight;
      target.scrollIntoView({ behavior: 'smooth', block: fitsViewport ? 'center' : 'start' });
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return targetRef;
};
