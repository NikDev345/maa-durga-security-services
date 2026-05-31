import { motion } from 'framer-motion';
import { ArrowDown, BadgeCheck, Building2, Clock3, Phone, ShieldCheck } from 'lucide-react';
import Button from '../components/Button.jsx';
import HeroBackgroundSlideshow from '../components/HeroBackgroundSlideshow.jsx';
import { heroCards } from '../utils/data.js';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20 sm:pt-24">
      <HeroBackgroundSlideshow />
      <div className="hero-overlay absolute inset-0" />
      <div className="hero-gradient absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#10120f] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 py-14 sm:min-h-[calc(100vh-6rem)] sm:px-6 lg:px-8">
        <motion.div className="min-w-0 max-w-3xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
          <div className="mb-6 flex w-fit max-w-full items-center gap-3 border-l-2 border-amber-300 bg-black/30 px-4 py-2 text-[10px] font-black uppercase leading-4 tracking-[0.18em] text-amber-200 backdrop-blur-md sm:text-xs sm:tracking-[0.24em]">
            <ShieldCheck className="h-4 w-4 shrink-0" />
            <span>Professional Security Services In Surat</span>
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black uppercase leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Dependable Security. <span className="block text-amber-300">Every Hour.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
            Trained personnel, disciplined operations, and responsive protection for businesses, industries, residences, and events.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>Get Free Consultation</Button>
            <Button variant="secondary" icon={Phone}>Contact Now</Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-zinc-200">
            <span className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-amber-300" /> Verified Personnel</span>
            <span className="flex items-center gap-2"><Clock3 className="h-5 w-5 text-amber-300" /> 24/7 Operations Desk</span>
            <span className="flex items-center gap-2"><Building2 className="h-5 w-5 text-amber-300" /> Surat, Gujarat</span>
          </div>
        </motion.div>
      </div>

      <div className="relative z-20 mx-auto -mt-20 grid max-w-7xl gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {heroCards.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.label} className="bg-[#171a16]/95 p-5 backdrop-blur-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + index * 0.08 }}>
              <Icon className="mb-3 h-6 w-6 text-amber-300" />
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-white">{item.label}</p>
            </motion.div>
          );
        })}
      </div>
      <a href="#about" aria-label="Scroll to about section" className="absolute bottom-4 right-5 z-30 hidden h-12 w-12 place-items-center border border-white/20 bg-black/30 text-amber-300 backdrop-blur-md transition hover:bg-white/10 lg:grid">
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
