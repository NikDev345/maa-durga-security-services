import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/maa-durga-logo-cropped.png';
import { navLinks, services } from '../utils/data.js';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr_0.8fr]">
        <div>
          <img src={logo} alt="MAA DURGA Security Service logo" className="h-48 w-48 object-contain sm:h-56 sm:w-56" loading="lazy" />
          <p className="mt-2 max-w-sm text-sm leading-7 text-zinc-500">Premium professional security services for Surat, Gujarat and surrounding business regions.</p>
        </div>
        <FooterList title="Quick Links" items={navLinks.map((link) => link.label)} />
        <FooterList title="Services" items={services.slice(0, 7).map((service) => service.title)} />
        <div>
          <h3 className="footer-title">Connect</h3>
          <p className="mt-4 text-sm leading-7 text-zinc-500">Surat, Gujarat, India<br />24/7 Operations Desk</p>
          <div className="mt-5 flex gap-3">
            {[FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn].map((Icon, index) => (
              <a key={index} href="#contact" className="grid h-10 w-10 place-items-center rounded-sm border border-white/10 bg-white/5 text-zinc-300 transition hover:border-amber-300/40 hover:text-amber-300" aria-label="Social link">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs uppercase tracking-[0.22em] text-zinc-600">
        Copyright 2026 MAA DURGA SECURITY SERVICES. All Rights Reserved.
        Created by <a href="https://www.example.com" className="text-amber-300 hover:text-amber-400" target="_blank" rel="noopener noreferrer">Nagraj Rangarej</a>
      </div>
    </footer>
  );
}

function FooterList({ title, items }) {
  return (
    <div>
      <h3 className="footer-title">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-zinc-500">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
