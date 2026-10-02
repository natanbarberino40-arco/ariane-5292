import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { artigos } from "../../lib/conteudo";
import { SectionHeading, d } from "./primitives";

export function Artigos() {
  return (
    <section id="artigos" className="bg-creme px-6 py-28 md:py-36">
      <SectionHeading eyebrow="Blog" title="Artigos & reflexões">
        Textos curtos sobre saúde emocional, relações e o cotidiano — para ler com calma.
      </SectionHeading>

      <div className="mx-auto mt-20 grid max-w-6xl gap-x-8 gap-y-14 md:grid-cols-3">
        {artigos.map((a, i) => (
          <Link key={a.slug} to={`/artigos/${a.slug}`} className="reveal group block" style={d(i * 120)}>
            <div className="relative overflow-hidden">
              <img
                src={a.imagem}
                alt=""
                className="aspect-[5/4] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 bg-creme px-3 py-1.5 text-[12px] text-tinta">{a.data}</span>
            </div>
            <p className="eyebrow mt-6 !text-[10px] text-terracota">{a.categoria}</p>
            <h3 className="mt-3 flex items-start justify-between gap-4 font-serif text-[27px] leading-[1.15] transition-colors group-hover:text-terracota">
              {a.titulo}
              <ArrowUpRight size={20} strokeWidth={1.2} className="mt-1 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
            </h3>
            <p className="mt-3 text-[14.5px] leading-[1.75] text-tinta-suave">{a.resumo}</p>
            <p className="mt-4 font-serif text-[15px] italic text-tinta-suave">Leitura de {a.leitura}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
