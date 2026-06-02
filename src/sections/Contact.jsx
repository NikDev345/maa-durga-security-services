import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import Button from '../components/Button.jsx';
import FormStatus from '../components/FormStatus.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { sendEmail } from '../utils/emailjs.js';
import { contactDetails } from '../utils/data.js';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service_required: '',
  message: '',
  website: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (form.website) return;

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      await sendEmail({
        subject: 'New Security Service Inquiry',
        form_type: 'Security Service Inquiry',
        from_name: form.name,
        reply_to: form.email,
        ...form,
      });
      setForm(initialForm);
      setStatus({ type: 'success', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Unable to send your inquiry. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <form className="reveal-up glass-card grid gap-4 rounded-md p-5 sm:p-7" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="field" name="name" value={form.name} onChange={updateField} placeholder="Name" aria-label="Name" autoComplete="name" required />
            <input className="field" name="phone" value={form.phone} onChange={updateField} placeholder="Phone" aria-label="Phone" autoComplete="tel" inputMode="tel" pattern="[0-9+ -]{10,16}" required />
          </div>
          <input className="field" name="email" value={form.email} onChange={updateField} placeholder="Email" aria-label="Email" type="email" autoComplete="email" required />
          <select className="field" name="service_required" value={form.service_required} onChange={updateField} aria-label="Service Required" required>
            <option value="" disabled>Service Required</option>
            <option>Corporate Security</option>
            <option>Industrial Security</option>
            <option>Event Security</option>
            <option>VIP Protection</option>
            <option>CCTV Surveillance</option>
          </select>
          <textarea className="field min-h-36 resize-none" name="message" value={form.message} onChange={updateField} placeholder="Message" aria-label="Message" required />
          <input className="hidden" name="website" value={form.website} onChange={updateField} tabIndex="-1" autoComplete="off" aria-hidden="true" />
          <FormStatus
            status={status}
            successMessage="Thank you for contacting Maa Durga Security Services. Our team will contact you shortly."
          />
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button type="submit" icon={Send} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
            </Button>
            <Button variant="secondary" icon={MessageCircle} href="https://wa.me/919898892210" target="_blank">
              WhatsApp Direct
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
