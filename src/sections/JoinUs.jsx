import { useState } from 'react';
import { BriefcaseBusiness, Send, ShieldCheck, UsersRound } from 'lucide-react';
import Button from '../components/Button.jsx';
import FormStatus from '../components/FormStatus.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { sendEmail } from '../utils/emailjs.js';

const initialForm = {
  full_name: '',
  mobile_number: '',
  age: '',
  address: '',
  education: '',
  experience: '',
  preferred_location: '',
  additional_information: '',
  website: '',
};

export default function JoinUs() {
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
        subject: 'New Security Guard Application',
        form_type: 'Security Guard Application',
        name: form.full_name,
        phone: form.mobile_number,
        message: [
          `Full Name: ${form.full_name}`,
          `Mobile Number: ${form.mobile_number}`,
          `Age: ${form.age}`,
          `Address: ${form.address}`,
          `Education: ${form.education}`,
          `Experience: ${form.experience}`,
          `Preferred Work Location: ${form.preferred_location}`,
          `Additional Information: ${form.additional_information || 'Not provided'}`,
        ].join('\n'),
        ...form,
      });
      setForm(initialForm);
      setStatus({ type: 'success', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Unable to submit your application. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="join-us" className="section-shell relative">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionHeader eyebrow="Careers" title="Join Our Security Team">
            Build a career with Maa Durga Security Services and become part of a disciplined and trusted security workforce.
          </SectionHeader>
          <div className="grid gap-4">
            {[
              { icon: ShieldCheck, title: 'Professional Discipline', text: 'Work with structured teams and responsible field leadership.' },
              { icon: UsersRound, title: 'Trusted Workforce', text: 'Join an organization focused on reliability, respect, and service.' },
              { icon: BriefcaseBusiness, title: 'Career Opportunities', text: 'Apply for security assignments across Surat and nearby business regions.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="reveal-up flex gap-4 rounded-sm border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
                  <Icon className="h-6 w-6 shrink-0 text-amber-300" />
                  <div>
                    <h3 className="font-display text-sm font-black uppercase tracking-[0.08em] text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <form className="reveal-up glass-card grid gap-4 rounded-md p-5 sm:p-7" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="field" name="full_name" value={form.full_name} onChange={updateField} placeholder="Full Name" aria-label="Full Name" autoComplete="name" required />
            <input className="field" name="mobile_number" value={form.mobile_number} onChange={updateField} placeholder="Mobile Number" aria-label="Mobile Number" autoComplete="tel" inputMode="tel" pattern="[0-9+ -]{10,16}" required />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="field" name="age" value={form.age} onChange={updateField} placeholder="Age" aria-label="Age" type="number" min="18" max="70" required />
            <input className="field" name="education" value={form.education} onChange={updateField} placeholder="Education" aria-label="Education" required />
          </div>
          <textarea className="field min-h-24 resize-none" name="address" value={form.address} onChange={updateField} placeholder="Address" aria-label="Address" required />
          <textarea className="field min-h-24 resize-none" name="experience" value={form.experience} onChange={updateField} placeholder="Previous Experience" aria-label="Previous Experience" required />
          <input className="field" name="preferred_location" value={form.preferred_location} onChange={updateField} placeholder="Preferred Work Location" aria-label="Preferred Work Location" required />
          <textarea className="field min-h-24 resize-none" name="additional_information" value={form.additional_information} onChange={updateField} placeholder="Additional Information" aria-label="Additional Information" />
          <input className="hidden" name="website" value={form.website} onChange={updateField} tabIndex="-1" autoComplete="off" aria-hidden="true" />
          <FormStatus
            status={status}
            successMessage="Your application has been submitted successfully. Our recruitment team will contact you if shortlisted."
          />
          <Button type="submit" icon={Send} className="sm:w-fit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Apply Now'}
          </Button>
        </form>
      </div>
    </section>
  );
}
