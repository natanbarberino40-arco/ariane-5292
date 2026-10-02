import { d } from "./primitives";

export function Faixa() {
  return (
    <section className="grain relative overflow-hidden bg-tinta px-6 py-32 text-center text-creme md:py-44">
      <img src="/images/faixa.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-tinta/40" />
      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="eyebrow reveal text-creme/70">Um convite</p>
        <p className="reveal mt-8 font-serif text-4xl leading-[1.15] md:text-6xl" style={d(120)}>
          Cuidar de si <span className="italic text-[#e3b39c]">também</span> é uma forma de cuidar de quem você ama.
        </p>
        <div className="reveal mt-14 grid grid-cols-3 gap-3 md:gap-5" style={d(240)}>
          {[
            ["Escuta", "sem julgamentos"],
            ["Sigilo", "absoluto"],
            ["Tempo", "no seu ritmo"],
          ].map(([a, b]) => (
            <div key={a} className="border border-creme/20 bg-creme/5 px-3 py-6 backdrop-blur-sm">
              <p className="font-serif text-3xl md:text-4xl">{a}</p>
              <p className="eyebrow mt-2 !text-[9px] text-creme/60">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
