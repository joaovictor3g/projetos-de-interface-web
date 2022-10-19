import { MutableRefObject, useEffect, useRef, useState } from "react";

export function useIntersection<T extends HTMLElement>(): [
  visible: boolean,
  instanceRef: MutableRefObject<T | null>
] {
  const instanceRef = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "20px",
        threshold: 1.0,
      }
    );

    if (instanceRef.current) {
      observer.observe(instanceRef.current);
    }

    return () => {
      if (instanceRef.current) observer.unobserve(instanceRef.current);
    };
  }, []);

  return [visible, instanceRef];
}
