import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader.jsx';
import { features, stats } from '../utils/data.js';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-shell relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Why Choose Us" title="Protection That Feels Present Before Trouble Starts" align="center">
          Every assignment is handled through verified manpower, disciplined monitoring, modern tools, and fast field coordination.
        </SectionHeader>

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div key={stat.label} className="reveal-up glass-card rounded-md p-6 text-center" whileHover={{ y: -6 }}>
              <p className="font-display text-4xl font-black text-amber-300">{stat.value}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="reveal-up flex items-center gap-4 rounded-sm border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl transition hover:border-amber-300/35 hover:bg-amber-300/10">
                <Icon className="h-6 w-6 shrink-0 text-amber-300" />
                <h3 className="font-display text-sm font-black uppercase tracking-[0.08em] text-white">{feature.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
