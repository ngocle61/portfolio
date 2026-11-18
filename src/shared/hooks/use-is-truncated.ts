import { useEffect, useRef, useState } from 'react';

// Tells whether a clamped or single-line truncated element hides part of its content. It measures again when the element
// resizes or the content changes, for example after a language switch.
export const useIsTruncated = <TElement extends HTMLElement>(content: unknown) => {
  const ref = useRef<TElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const measure = () =>
      setIsTruncated(
        element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth,
      );
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [content]);

  return { ref, isTruncated };
};
