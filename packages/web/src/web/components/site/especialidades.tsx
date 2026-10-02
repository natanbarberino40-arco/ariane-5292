import { Clock, Laptop, MapPin } from "lucide-react";
import { especialidades } from "../../lib/conteudo";
import { SectionHeading, d } from "./primitives";

export function Especialidades() {
  return (
    <section id="especialidades" className="bg-creme-2/60 px-6 py-28 md:py-36">
      <SectionHeading eyebrow="Áreas de atuação" title="Especialidades">
        Cada fase da vida pede um tipo de escuta. Estes são os caminhos em que acompanho pessoas com mais frequência.
      </SectionHeading>

      <div className="mx-auto mt-20 grid max-w-6xl gap-8 md:grid-cols-3">
        {especialidades.map((e, i) => (
          <article
            key={e.titulo}
            className="reveal group flex flex-col bg-creme shadow-[0_1px_0_rgba(42,38,34,0.06)] transition-shadow duration-500 hover:shadow-[0_30px_60px_-35px_rgba(42,38,34,0.45)]"
            style={d(i * 120)}
          >
            <div className="relative overflow-hidden">
              <img
                src={e.imagem}
                alt={e.titulo}
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
              <span className="absolute bottom-4 left-4 bg-creme px-3 py-1.5 font-serif text-[15px] text-tinta">
                {e.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7 pb-8">
              <h3 className="font-serif text-[28px] leading-tight">{e.titulo}</h3>
              <p className="mt-3 flex items-center gap-2 text-[12px] text-tinta-suave">
                <span className="size-1 rotate-45 bg-terracota" /> {e.publico}
              </p>
              <p className="mt-5 text-[14.5px] leading-[1.75] text-tinta-suave">{e.texto}</p>
              <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-1 border-t border-linha pt-5 font-serif text-[15px] italic text-tinta/80">
                {e.topicos.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="reveal mt-16 flex justify-center">
        <div className="eyebrow flex flex-wrap items-center justify-center gap-x-6 gap-y-3 bg-creme-2 px-8 py-4 !text-[10.5px] text-tinta">
          <span className="flex items-center gap-2">
            <Laptop size={14} strokeWidth={1.3} className="text-terracota" /> Online
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={14} strokeWidth={1.3} className="text-terracota" /> Presencial
          </span>
          <span className="flex items-center gap-2">
            <Clock size={14} strokeWidth={1.3} className="text-terracota" /> Sessões de 50 minutos
          </span>
        </div>
      </div>
    </section>
  );
}
