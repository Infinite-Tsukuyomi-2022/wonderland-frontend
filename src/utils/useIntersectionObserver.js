import { useEffect, useState } from 'react';

export const useIntersectionObserver = (
  ref,
  callback,
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  }
) => {

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (Array.isArray(ref)) {
      ref.forEach(item => observer.observe(item.current))
    }
    else {
      observer.observe(ref.current);
    }

    return () => {
      // Is observer really clear?
      if (ref.current) {
        if (Array.isArray(ref)) {
          ref.forEach(item => observer.unobserve(item.current))
        }
        else {
          observer.unobserve(ref.current)
        }
      };
    };

  }, []);
}

export const useIntersectionObserverDectector = (rootRef) => {
  const [ active, setActive ] = useState(false);
  
  useIntersectionObserver(rootRef, handleActiveAnimation, 
  {
    root: null,
    rootMargin: '0px',
    threshold: 0
  });

  function handleActiveAnimation(e) {
    if (e[0].isIntersecting) {
      setActive(true);
    }
  }
  
  return active;
}