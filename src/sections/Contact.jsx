import { MessageCircle, Send } from 'lucide-react';
import Button from '../components/Button.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { contactDetails } from '../utils/data.js';

export default function Contact() {
  return (
    <section id="contact" className="section-shell relative bg-zinc-950/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeader eyebrow="Contact" title="Deploy A Security Team With One Inquiry">
            Share your requirement and our operations desk will help you plan the right guard strength, shift pattern, and protection model.
          </SectionHeader>
          <div className="grid gap-4">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.label} className="reveal-up flex gap-4 rounded-md border border-white/10 bg-white/[0.045] p-4">
                  <Icon className="h-6 w-6 shrink-0 text-amber-300" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">{detail.label}</p>
                    <p className="mt-1 font-semibold text-zinc-100">{detail.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <form className="reveal-up glass-card grid gap-4 rounded-md p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="field" placeholder="Name" aria-label="Name" />
            <input className="field" placeholder="Phone" aria-label="Phone" />
          </div>
          <select className="field" aria-label="Service Required" defaultValue="">
            <option value="" disabled>Service Required</option>
            <option>Corporate Security</option>
            <option>Industrial Security</option>
            <option>Event Security</option>
            <option>VIP Protection</option>
            <option>CCTV Surveillance</option>
          </select>
          <textarea className="field min-h-36 resize-none" placeholder="Message" aria-label="Message" />
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button type="button" icon={Send}>Submit Inquiry</Button>
            <Button type="button" variant="secondary" icon={MessageCircle} href="https://wa.me/919898892210" target="_blank">
              WhatsApp Direct
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
