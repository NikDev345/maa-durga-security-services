import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  variant = "primary",
  icon: Icon = ArrowRight,
  className = "",
  type = "button",
  href,
  target,
  rel,
  ...props
}) {
  const styles =
    variant === "secondary"
      ? "border-white/20 bg-white/5 text-white hover:border-amber-300/70 hover:bg-white/10"
      : "border-amber-300 bg-amber-300 text-zinc-950 shadow-[0_8px_20px_rgba(212,175,55,0.18)] hover:border-amber-200 hover:bg-amber-200";

  const classNames = `group inline-flex items-center justify-center gap-1.5 rounded-sm border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] transition-all duration-300 ${styles} ${className}`;
  const linkRel =
    target === "_blank"
      ? [...new Set(`${rel || ""} noopener noreferrer`.trim().split(/\s+/))].join(" ")
      : rel;
  const content = (
    <>
      <span>{children}</span>

      {Icon && (
        <Icon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={linkRel}
        className={classNames}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      {...props}
    >
      {content}
    </button>
  );
}
