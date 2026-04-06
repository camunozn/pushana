import React, { useEffect, useRef, useState } from 'react';

const RevealOnScroll = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' },
    );

    if (domRef.current) observer.observe(domRef.current);

    const timer = setTimeout(() => setIsVisible(true), 1200);

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }} // Inline delay logic
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
