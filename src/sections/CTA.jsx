import { MessageCircle, PhoneCall } from 'lucide-react';
import Button from '../components/Button.jsx';

export default function CTA() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="cta-banner reveal-up relative mx-auto max-w-7xl overflow-hidden rounded-sm border border-amber-300/25 p-8 sm:p-12 lg:p-16">
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-300">Priority Response Channel</p>
          <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight text-white sm:text-5xl">Need Professional Security For Your Property Or Event?</h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button icon={PhoneCall}>Call Now</Button>
            <Button variant="secondary" icon={MessageCircle}>WhatsApp Inquiry</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
