import { useEffect, useRef, useState } from 'react';

type AnimationDirection = 'left' | 'right' | 'up' | 'down';

interface UseScrollAnimationOptions {
  direction?: AnimationDirection;
  threshold?: number;
  delay?: number;
}

export function useScrollAnimation({
  direction = 'left',
  threshold = 0.1,
  delay = 0
}: UseScrollAnimationOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, delay]);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)';

    switch (direction) {
      case 'left':
        return 'translate(-100px, 0)';
      case 'right':
        return 'translate(100px, 0)';
      case 'up':
        return 'translate(0, 100px)';
      case 'down':
        return 'translate(0, -100px)';
      default:
        return 'translate(-100px, 0)';
    }
  };

  const animationStyle = {
    transform: getTransform(),
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  return { ref: elementRef, style: animationStyle, isVisible };
}
