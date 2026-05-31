export default function SectionHeader({ eyebrow, title, children, align = 'left' }) {
  return (
    <div className={`reveal-up mb-10 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-amber-300">{eyebrow}</p>
      <h2 className="font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {children ? <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">{children}</p> : null}
    </div>
  );
}
