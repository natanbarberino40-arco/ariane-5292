import { Instagram, Mail, MessageCircle } from "lucide-react";
import { LogoEmpilhado } from "./logo";

export function Footer() {
  return (
    <footer className="bg-tinta px-6 pb-10 pt-20 text-creme/80">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <LogoEmpilhado />
          <p className="eyebrow mt-4 !text-[10px] text-creme/50">CRP 00/00000</p>
          <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-creme/60">
            Atendimento psicológico para adultos, crianças, adolescentes e casais — online e presencial.
          </p>
        </div>
        <div>
          <p className="eyebrow !text-[10px] text-creme/50">Navegue</p>
          <ul className="mt-5 space-y-2.5 font-serif text-lg">
            {[
              ["Sobre", "/#sobre"],
              ["Especialidades", "/#especialidades"],
              ["Artigos", "/#artigos"],
              ["Dúvidas", "/#faq"],
              ["Agendar", "/#agendar"],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="transition-colors hover:text-[#e3b39c]">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow !text-[10px] text-creme/50">Contato</p>
          <ul className="mt-5 space-y-3 text-[14px]">
            <li className="flex items-center gap-3"><MessageCircle size={15} strokeWidth={1.3} /> (00) 00000-0000</li>
            <li className="flex items-center gap-3"><Mail size={15} strokeWidth={1.3} /> contato@arianecardoso.com.br</li>
            <li className="flex items-center gap-3"><Instagram size={15} strokeWidth={1.3} /> @arianecardoso.psi</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-6xl border-t border-creme/10 pt-8 text-[12px] leading-relaxed text-creme/45 md:flex md:justify-between">
        <p>
          Em situação de crise ou risco, ligue <span className="text-creme/80">188 (CVV)</span> ou{" "}
          <span className="text-creme/80">192 (SAMU)</span> — atendimento gratuito, 24h.
        </p>
        <p className="mt-3 md:mt-0">© 2026 Ariane Cardoso</p>
      </div>
    </footer>
  );
}
