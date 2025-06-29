
import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Reset animation state every time section comes into view
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          setIsVisible(true);
        } else {
          // Reset when section goes out of view to allow re-animation
          setIsVisible(false);
        }
      },
      { 
        threshold,
        rootMargin: '-20% 0px -20% 0px' // Trigger when section is well centered
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible] as const;
};
