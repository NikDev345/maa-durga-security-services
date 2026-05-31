import { Award, Medal, ShieldCheck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import cofounderImage from '../assets/dependra-mishra-cofounder.jpeg';

export default function About() {
return ( <section id="about" className="section-shell relative"> <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"> <div className="reveal-up relative"> <img
         src={cofounderImage}
         alt="Devendra Mishra, Founder and Owner of Maa Durga Security Services"
         className="aspect-[4/5] w-full rounded-sm border border-white/10 object-cover object-center shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
         loading="lazy"
       />

```
      <div className="absolute bottom-5 left-5 right-5 rounded-sm border border-amber-300/25 bg-black/70 p-5 backdrop-blur-xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
          Founder / Owner
        </p>

        <h3 className="mt-2 font-display text-2xl font-black uppercase text-white">
          Devendra Mishra
        </h3>
      </div>
    </div>

    <div>
      <SectionHeader
        eyebrow="About Company"
        title="Surat-Based Protection With Command-Level Discipline"
      >
        MAA DURGA SECURITY SERVICES is a Surat-based professional security
        agency delivering highly trained security personnel and advanced
        protection services for businesses, residential properties, events,
        industries, and VIP clients.
      </SectionHeader>

      <div className="mb-8 reveal-up">
        <p className="text-base leading-8 text-zinc-300">
          Founded and led by{' '}
          <span className="font-semibold text-amber-300">
            Devendra Mishra
          </span>
          , Maa Durga Security Services is committed to providing trusted,
          disciplined, and professional security solutions across Surat and
          Gujarat. The company focuses on safeguarding businesses,
          residential communities, industrial facilities, institutions, and
          special events with trained security personnel and rapid-response
          support.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          {
            title: 'Discipline',
            icon: Medal,
            text: 'Uniformed teams with strict reporting culture.',
          },
          {
            title: 'Trust',
            icon: ShieldCheck,
            text: 'Verified personnel and confidential operations.',
          },
          {
            title: 'Quick Response',
            icon: Award,
            text: 'Fast escalation and always-on field support.',
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="reveal-up glass-card rounded-md p-5"
            >
              <Icon className="mb-4 h-7 w-7 text-amber-300" />

              <h3 className="font-display text-lg font-black uppercase text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>


);
}
