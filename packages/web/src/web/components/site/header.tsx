import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoHorizontal } from "./logo";

const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#especialidades", label: "Especialidades" },
  { href: "/#artigos", label: "Artigos" },
  { href: "/#faq", label: "Dúvidas" },
];

export function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (solid) return;
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [solid]);

  const dark = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b border-linha/70 bg-creme/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="/#" aria-label="Ariane Cardoso — início">
          <LogoHorizontal dark={dark} />
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`eyebrow !text-[10.5px] transition-colors hover:text-terracota ${dark ? "text-creme/85" : "text-tinta-suave"}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#agendar"
            className={`eyebrow !text-[10.5px] border px-5 py-2.5 transition-all ${
              dark
                ? "border-creme/50 text-creme hover:bg-creme hover:text-tinta"
                : "border-tinta text-tinta hover:border-terracota hover:bg-terracota hover:text-creme"
            }`}
          >
            Agendar
          </a>
        </nav>
        <button
          className={`md:hidden ${dark ? "text-creme" : "text-tinta"}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X size={22} strokeWidth={1.4} /> : <Menu size={22} strokeWidth={1.4} />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-5 border-t border-linha/70 px-6 py-8 md:hidden">
          {[...links, { href: "/#agendar", label: "Agendar consulta" }].map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-serif text-3xl text-tinta">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
