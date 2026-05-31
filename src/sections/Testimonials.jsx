import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader.jsx';
import { starIcons, testimonials } from '../utils/data.js';

export default function Testimonials() {
  return (
    <section className="section-shell relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Testimonials" title="Trusted By People Who Cannot Afford Weak Security" align="center" />
        <div className="grid gap-4 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <motion.article key={item.name} className="reveal-up glass-card rounded-md p-6" whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 240, damping: 18 }}>
              <div className="mb-5 flex gap-1 text-amber-300">
                {starIcons.map(({ id, Icon }) => <Icon key={id} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="min-h-32 text-sm leading-7 text-zinc-300">"{item.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-sm border border-amber-300/25 bg-amber-300/10 font-display font-black text-amber-200">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-white">{item.name}</h3>
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
