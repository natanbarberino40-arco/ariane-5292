import type { CSSProperties, ReactNode } from "react";

export function Diamond({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden>
      <span className="h-px w-12 bg-linha" />
      <span className="size-1.5 rotate-45 bg-terracota" />
      <span className="h-px w-12 bg-linha" />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <p className={`eyebrow ${light ? "text-creme/70" : "text-tinta-suave"}`}>{eyebrow}</p>
      <h2
        className={`mt-4 font-serif text-5xl leading-[1.05] tracking-[-0.01em] md:text-6xl ${light ? "text-creme" : "text-tinta"}`}
      >
        {title}
      </h2>
      <Diamond className="mt-7" />
      {children && (
        <div className={`mt-8 text-[15px] leading-relaxed ${light ? "text-creme/80" : "text-tinta-suave"}`}>
          {children}
        </div>
      )}
    </div>
  );
}

export function d(ms: number): CSSProperties {
  return { "--d": `${ms}ms` } as CSSProperties;
}
