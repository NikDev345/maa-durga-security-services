import SectionHeader from '../components/SectionHeader.jsx';
import { services } from '../utils/data.js';

export default function Services() {
  return (
    <section id="services" className="section-shell relative bg-zinc-950/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Services" title="Elite Security Deployments For Every Risk Profile" align="center">
          Choose trained personnel and operational systems built for corporate, industrial, residential, event, and high-risk protection needs.
        </SectionHeader>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="service-card reveal-up group rounded-md p-5">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-sm border border-amber-300/25 bg-amber-300/10 text-amber-300 transition group-hover:border-amber-300/70">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-black uppercase text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
