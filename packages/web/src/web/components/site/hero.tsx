import { ArrowDown } from "lucide-react";
import { d } from "./primitives";

export function Hero() {
  return (
    <section className="grain relative flex min-h-[100svh] items-end overflow-hidden bg-tinta md:items-center">
      {/* Foto da Ariane — à direita no desktop, ao fundo no mobile */}
      <div className="absolute inset-x-0 top-0 h-[62%] md:inset-y-0 md:left-[38%] md:h-auto">
        <img
          src="/images/ariane-hero.jpg"
          alt="Ariane Cardoso, psicóloga clínica"
          className="slow-zoom size-full object-cover object-[50%_15%] [filter:sepia(0.12)_saturate(0.92)_brightness(0.96)]"
        />
        {/* tom quente do site sobre a foto */}
        <div className="absolute inset-0 bg-[#b26a4e]/10 mix-blend-multiply" />
        {/* fusão com o fundo escuro */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-tinta via-tinta/35 to-transparent md:block md:via-[22%] md:to-[55%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-tinta from-[8%] via-tinta/75 via-[40%] to-transparent to-[75%] md:hidden" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-tinta/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-[52svh] text-center text-creme md:px-10 md:pb-0 md:pt-0 md:text-left">
        <div className="md:max-w-[520px]">
          <p className="eyebrow hero-in text-creme/75" style={d(200)}>
            Psicologia clínica · CRP 00/00000
          </p>
          <h1 className="mt-8 font-serif font-normal leading-[0.9] tracking-[-0.02em]">
            <span className="hero-in block text-[clamp(3.5rem,10vw,8.5rem)]" style={d(400)}>
              Ariane
            </span>
            <span className="hero-in my-2 block font-serif text-3xl italic text-terracota md:text-4xl" style={d(650)}>
              —
            </span>
            <span className="hero-in block text-[clamp(3.5rem,10vw,8.5rem)] italic" style={d(800)}>
              Cardoso
            </span>
          </h1>
          <div className="hero-in mx-auto mt-10 h-px w-16 bg-creme/40 md:mx-0" style={d(1050)} />
          <p
            className="hero-in mx-auto mt-8 max-w-md font-serif text-2xl italic leading-snug text-creme/90 md:mx-0 md:text-[28px]"
            style={d(1200)}
          >
            Um lugar para desacelerar, ser ouvida e se reencontrar.
          </p>
          <p className="eyebrow hero-in mt-8 text-creme/60" style={d(1350)}>
            Atendimento online e presencial
          </p>
          <div
            className="hero-in mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start"
            style={d(1500)}
          >
            <a
              href="#agendar"
              className="eyebrow whitespace-nowrap bg-creme px-8 py-4 text-tinta transition-colors hover:bg-terracota hover:text-creme"
            >
              Agendar primeira conversa
            </a>
            <a href="#sobre" className="eyebrow whitespace-nowrap px-8 py-4 text-creme/85 transition-colors hover:text-creme">
              Conhecer o trabalho
            </a>
          </div>
        </div>
      </div>
      <a
        href="#sobre"
        className="hero-in absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-creme/60 hover:text-creme"
        style={d(1800)}
        aria-label="Rolar"
      >
        <ArrowDown size={18} strokeWidth={1.2} className="animate-bounce" />
      </a>
    </section>
  );
}
