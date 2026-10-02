import { useState } from "react";
import { Plus } from "lucide-react";
import { faq } from "../../lib/conteudo";
import { SectionHeading, d } from "./primitives";

export function Faq() {
  const [aberto, setAberto] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-creme-2/60 px-6 py-28 md:py-36">
      <SectionHeading eyebrow="Antes de começar" title="Perguntas frequentes" />
      <div className="mx-auto mt-16 max-w-3xl border-t border-linha">
        {faq.map((f, i) => {
          const on = aberto === i;
          return (
            <div key={f.p} className="reveal border-b border-linha" style={d(i * 60)}>
              <button
                className="flex w-full items-center justify-between gap-6 py-7 text-left"
                onClick={() => setAberto(on ? null : i)}
                aria-expanded={on}
              >
                <span className={`font-serif text-[22px] leading-snug transition-colors md:text-2xl ${on ? "text-terracota" : "text-tinta"}`}>
                  {f.p}
                </span>
                <Plus
                  size={20}
                  strokeWidth={1.2}
                  className={`shrink-0 text-terracota transition-transform duration-500 ${on ? "rotate-45" : ""}`}
                />
              </button>
              <div
                className={`grid transition-all duration-500 ease-out ${on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <p className="overflow-hidden pr-12 text-[15px] leading-[1.8] text-tinta-suave">
                  <span className="block pb-7">{f.r}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
