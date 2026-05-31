import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import corporateOffice from '../assets/hero-slides/01-corporate-office.jpg';
import industrialFactory from '../assets/hero-slides/02-industrial-factory.jpg';
import residentialSociety from '../assets/hero-slides/03-residential-society.jpg';
import formationPatrol from '../assets/hero-slides/04-formation-patrol.jpg';
import radioCoordination from '../assets/hero-slides/05-radio-coordination.jpg';
import commercialComplex from '../assets/hero-slides/06-commercial-complex.jpg';

const slides = [
  { src: corporateOffice, alt: 'Professional guards outside a corporate office building', position: 'center' },
  { src: industrialFactory, alt: 'Security personnel patrolling an industrial factory perimeter', position: 'center' },
  { src: residentialSociety, alt: 'Residential society security guard near an apartment entrance', position: 'center' },
  { src: formationPatrol, alt: 'Professional security personnel walking in formation', position: 'center' },
  { src: radioCoordination, alt: 'Security supervisor coordinating operations by radio', position: 'center' },
  { src: commercialComplex, alt: 'Security team patrolling a commercial complex', position: 'center' },
];

const panDirections = [
  { x: '0%', y: '0%' },
  { x: '-1.5%', y: '0.5%' },
  { x: '1.25%', y: '-0.5%' },
  { x: '-1%', y: '-0.75%' },
  { x: '1.5%', y: '0.75%' },
  { x: '-1.25%', y: '0%' },
];

export default function HeroBackgroundSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const activeSlide = slides[activeIndex];
  const pan = panDirections[activeIndex];

  useEffect(() => {
    slides.forEach(({ src }) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true" data-active-slide={activeIndex}>
      <AnimatePresence initial={false}>
        <motion.img
          key={activeSlide.src}
          src={activeSlide.src}
          alt={activeSlide.alt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: activeSlide.position, willChange: 'transform, opacity' }}
          initial={{ opacity: 0, scale: 1, x: '0%', y: '0%' }}
          animate={{
            opacity: 1,
            scale: prefersReducedMotion ? 1 : 1.12,
            x: prefersReducedMotion ? '0%' : pan.x,
            y: prefersReducedMotion ? '0%' : pan.y,
          }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.5, ease: 'easeInOut' },
            scale: { duration: 7, ease: 'easeOut' },
            x: { duration: 7, ease: 'easeOut' },
            y: { duration: 7, ease: 'easeOut' },
          }}
          loading={activeIndex === 0 ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={activeIndex === 0 ? 'high' : 'auto'}
        />
      </AnimatePresence>
    </div>
  );
}
