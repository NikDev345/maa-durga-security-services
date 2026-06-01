import { lazy, Suspense, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import CursorGlow from './components/CursorGlow.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Services from './sections/Services.jsx';
import WhyChooseUs from './sections/WhyChooseUs.jsx';
import Process from './sections/Process.jsx';
import Testimonials from './sections/Testimonials.jsx';
import CTA from './sections/CTA.jsx';
import Footer from './sections/Footer.jsx';
import useLenis from './hooks/useLenis.js';

const Contact = lazy(() => import('./sections/Contact.jsx'));
const JoinUs = lazy(() => import('./sections/JoinUs.jsx'));

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useLenis();

  useEffect(() => {
    let observer;

    const ctx = gsap.context(() => {
      const registerReveal = (element) => {
        if (element.dataset.revealRegistered) return false;
        element.dataset.revealRegistered = 'true';

        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 42 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 86%' },
          },
        );

        return true;
      };

      const registerReveals = (root = document) => {
        let registered = false;

        if (root.matches?.('.reveal-up')) registered = registerReveal(root) || registered;
        root.querySelectorAll?.('.reveal-up').forEach((element) => {
          registered = registerReveal(element) || registered;
        });

        return registered;
      };

      registerReveals();

      observer = new MutationObserver((mutations) => {
        let registered = false;

        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              registered = registerReveals(node) || registered;
            }
          });
        });

        if (registered) ScrollTrigger.refresh();
      });

      observer.observe(document.body, { childList: true, subtree: true });
    });

    return () => {
      observer?.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#10120f] text-zinc-100 selection:bg-amber-300 selection:text-black">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <CTA />
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
        <Suspense fallback={null}>
          <JoinUs />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
