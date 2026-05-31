import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const move = (event) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate3d(${event.clientX - 190}px, ${event.clientY - 190}px, 0)`;
    };

    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return <div ref={ref} className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-[380px] w-[380px] rounded-full bg-amber-200/[0.035] blur-3xl transition-transform duration-300 md:block" />;
}
