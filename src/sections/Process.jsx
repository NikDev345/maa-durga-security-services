import SectionHeader from '../components/SectionHeader.jsx';
import { timeline } from '../utils/data.js';

export default function Process() {
  return (
    <section id="process" className="section-shell relative bg-zinc-950/70">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Process" title="From Requirement To Continuous Protection" align="center" />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-5 top-0 h-full w-px bg-amber-300/25 sm:left-1/2" />
          {timeline.map((step, index) => (
            <div key={step} className={`reveal-up relative mb-8 grid gap-5 sm:grid-cols-2 ${index % 2 ? '' : 'sm:text-right'}`}>
              <div className={`${index % 2 ? 'sm:col-start-2' : ''} glass-card rounded-md p-5`}>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-300">Step 0{index + 1}</p>
                <h3 className="mt-2 font-display text-xl font-black uppercase text-white">{step}</h3>
              </div>
              <span className="absolute left-5 top-7 h-4 w-4 -translate-x-1/2 rounded-full border border-amber-200 bg-amber-300 shadow-[0_0_20px_rgba(212,175,55,0.55)] sm:left-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
