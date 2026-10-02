import { SectionHeading, d } from "./primitives";

const passos = [
  {
    titulo: "Escuta sem pressa",
    texto:
      "Cada pessoa chega com uma história única. O primeiro movimento é compreender o seu tempo, a sua linguagem e o que realmente importa para você.",
    imagem: "/images/cha.jpg",
    etiqueta: "01",
  },
  {
    titulo: "Um método que faz sentido",
    texto:
      "Abordagem baseada em evidências, integrando a Terapia Cognitivo-Comportamental com um olhar humanista — prática, acolhedora e sem fórmulas prontas.",
    imagem: "/images/poltronas.jpg",
    etiqueta: "02",
  },
  {
    titulo: "Um espaço só seu",
    texto:
      "Consultório reservado, luz natural e silêncio. Ou, se preferir, sessões online com a mesma qualidade de presença, de onde você estiver.",
    imagem: "/images/janela.jpg",
    etiqueta: "03",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="bg-creme px-6 pb-24 pt-28 md:pb-36 md:pt-40">
      <SectionHeading eyebrow="Sobre o cuidado" title="Escuta que acolhe" />

      <blockquote className="reveal mx-auto mt-14 max-w-2xl text-center" style={d(120)}>
        <p className="font-serif text-2xl italic leading-snug text-tinta-suave md:text-[30px]">
          “Não é sobre ter todas as respostas. É sobre ter um lugar seguro para fazer as perguntas certas.”
        </p>
        <footer className="eyebrow mt-6 !text-[10px] text-tinta-suave/70">— Ariane Cardoso</footer>
      </blockquote>

      <div className="mx-auto mt-24 grid max-w-5xl items-center gap-12 md:mt-32 md:grid-cols-[1fr_1.15fr] md:gap-20">
        <div className="reveal relative">
          <div className="absolute -left-4 -top-4 h-full w-full border border-terracota/40" />
          <img src="/images/ariane-sobre.jpg" alt="Ariane Cardoso, psicóloga" className="relative aspect-[4/5] w-full object-cover" />
        </div>
        <div className="reveal" style={d(150)}>
          <p className="eyebrow text-terracota">Psicóloga clínica</p>
          <h3 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Olá, eu sou a <span className="italic">Ariane</span>.
          </h3>
          <div className="mt-6 space-y-4 text-[15.5px] leading-[1.8] text-tinta-suave">
            <p>
              Sou psicóloga clínica e acompanho adultos, crianças, adolescentes e casais em processos de
              autoconhecimento, ansiedade, luto, relações e grandes transições de vida.
            </p>
            <p>
              Acredito numa terapia próxima, honesta e respeitosa — onde você não precisa chegar pronta, nem saber por
              onde começar. A gente começa juntas.
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-linha pt-8">
            {[
              ["10+", "anos de clínica"],
              ["TCC", "e humanismo"],
              ["50'", "por sessão"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-serif text-4xl text-tinta">{n}</dt>
                <dd className="eyebrow mt-2 !text-[9.5px] !tracking-[0.2em] text-tinta-suave">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-5xl space-y-24 md:mt-44 md:space-y-32">
        <p className="eyebrow reveal text-center text-tinta-suave">Como trabalhamos</p>
        {passos.map((p, i) => {
          const inv = i % 2 === 1;
          return (
            <div key={p.titulo} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <div className={`reveal relative ${inv ? "md:order-2" : ""}`}>
                <img
                  src={p.imagem}
                  alt=""
                  className="aspect-[4/3] w-full object-cover shadow-[0_30px_60px_-30px_rgba(42,38,34,0.45)]"
                />
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-creme px-5 py-2 font-serif text-lg tracking-widest text-terracota shadow-[0_8px_24px_-12px_rgba(42,38,34,0.35)]">
                  {p.etiqueta}
                </span>
              </div>
              <div className={`reveal ${inv ? "md:order-1 md:text-right" : ""}`} style={d(150)}>
                <h3 className="font-serif text-3xl md:text-4xl">{p.titulo}</h3>
                <p className={`mt-4 max-w-md text-[15px] leading-[1.8] text-tinta-suave ${inv ? "md:ml-auto" : ""}`}>
                  {p.texto}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
