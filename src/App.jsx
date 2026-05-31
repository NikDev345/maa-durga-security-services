import { useEffect } from 'react';
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
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import useLenis from './hooks/useLenis.js';


gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useLenis();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-up').forEach((element) => {
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
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#10120f] text-zinc-100 selection:bg-amber-300 selection:text-black">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Maa Durga Security Services",
          url: "https://maadurgass.in",
          founder: {
            "@type": "Person",
            name: "Devendra Mishra"
          }
        })
      }}
    />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
