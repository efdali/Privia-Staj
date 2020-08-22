import React, { useEffect, useRef, useCallback } from 'react';

function UpdateUrlOnScroll({ children }) {
  const observer = useRef();

  const callback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let id = entry.target.id;
        let hash = id.includes('#') ? id : '#' + id;
        window.history.pushState({}, '', hash);
      }
    });
  }, []);

  useEffect(() => {
    if (!observer.current) {
      observer.current = new IntersectionObserver(callback, {
        rootMargin: '-50%',
        root: null,
      });
    }

    const sections = document.querySelectorAll('section.section');

    sections.forEach((section) => observer.current.observe(section));

    return () =>
      sections.forEach((section) =>
        observer.current.unobserve(section),
      );
  }, []);

  return <>{children}</>;
}

export default UpdateUrlOnScroll;
