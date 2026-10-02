/**
 * Logo Ariane Cardoso — monograma "AC" entrelaçado em serifa itálica
 * + nome em caixa alta espaçada + "Psicologia Clínica".
 * Usa as fontes do site (Cormorant Garamond / Karla) e as cores via currentColor.
 */

export function Monograma({
  className = "",
  accent = "#b26a4e",
  title = "Ariane Cardoso",
}: {
  className?: string;
  accent?: string;
  title?: string;
}) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-label={title}>
      <title>{title}</title>
      {/* C grande envolvendo o A */}
      <text
        x="72"
        y="96"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontStyle="italic"
        fontWeight={400}
        fontSize="122"
        fill={accent}
      >
        C
      </text>
      {/* A itálico sobreposto */}
      <text
        x="50"
        y="88"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontStyle="italic"
        fontWeight={500}
        fontSize="74"
        fill="currentColor"
      >
        A
      </text>
    </svg>
  );
}

/** Versão horizontal para o cabeçalho. */
export function LogoHorizontal({ dark }: { dark: boolean }) {
  return (
    <span className={`flex items-center gap-3 transition-colors ${dark ? "text-creme" : "text-tinta"}`}>
      <Monograma className="size-11 shrink-0" accent={dark ? "#e3b39c" : "#b26a4e"} />
      <span className={`h-8 w-px ${dark ? "bg-creme/30" : "bg-linha"}`} aria-hidden />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[13px] font-light uppercase tracking-[0.3em]">Ariane Cardoso</span>
        <span
          className={`mt-1.5 font-serif text-[13px] italic tracking-wide ${dark ? "text-[#e3b39c]" : "text-terracota"}`}
        >
          Psicologia Clínica
        </span>
      </span>
    </span>
  );
}

/** Versão empilhada (rodapé). */
export function LogoEmpilhado() {
  return (
    <div className="inline-flex flex-col items-start text-creme">
      <Monograma className="size-20" accent="#e3b39c" />
      <span className="mt-3 font-sans text-[20px] font-light uppercase tracking-[0.32em]">Ariane Cardoso</span>
      <span className="mt-2 font-serif text-[17px] italic text-[#e3b39c]">Psicologia Clínica</span>
    </div>
  );
}
