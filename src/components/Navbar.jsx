import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/maa-durga-logo-cropped.png';
import { navLinks } from '../utils/data.js';
import Button from './Button.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="MAA DURGA Security Service logo" className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20" loading="eager" decoding="sync" fetchPriority="high" />
          <span className="leading-tight">
            <span className="block font-display text-xs font-black uppercase tracking-[0.18em] text-white sm:text-sm">MAA DURGA</span>
            <span className="block text-[8px] font-bold uppercase tracking-[0.22em] text-zinc-500 sm:text-[10px] sm:tracking-[0.28em]">Security Services</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 transition hover:text-amber-300">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button className="min-h-11 px-4 py-2" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Consult
          </Button>
        </div>

        <button className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-white/10 bg-white/5 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-black/90 px-4 py-5 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-zinc-300">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
