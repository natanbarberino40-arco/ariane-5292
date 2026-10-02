import { useState, type FormEvent } from "react";
import { Check, Loader2 } from "lucide-react";
import { useCriarAgendamento } from "../../queries/agendamentos";
import { SectionHeading, d } from "./primitives";

type Modalidade = "online" | "presencial" | "indiferente";

const campo =
  "w-full bg-creme-2 px-4 py-3.5 text-[15px] text-tinta outline-none transition placeholder:text-tinta-suave/50 focus:bg-[#e9dfd0] focus:ring-1 focus:ring-terracota/50";
const rotulo = "eyebrow mb-2.5 block !text-[10px] !tracking-[0.22em] text-tinta";

export function Agendar() {
  const criar = useCriarAgendamento();
  const [modalidade, setModalidade] = useState<Modalidade>("online");
  const [erro, setErro] = useState<string | null>(null);

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro(null);
    const f = new FormData(e.currentTarget);
    const nome = String(f.get("nome") || "").trim();
    const email = String(f.get("email") || "").trim();
    if (nome.length < 2) return setErro("Conte como podemos te chamar.");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setErro("Confira o e-mail informado.");
    criar.mutate(
      {
        nome,
        email,
        telefone: String(f.get("telefone") || "").trim() || undefined,
        mensagem: String(f.get("mensagem") || "").trim() || undefined,
        modalidade,
      },
      { onError: () => setErro("Não foi possível enviar agora. Tente novamente em instantes.") },
    );
  }

  return (
    <section id="agendar" className="bg-creme px-6 py-28 md:py-36">
      <SectionHeading eyebrow="Vamos conversar" title="Agende sua primeira sessão">
        Preencha o formulário e retorno em até um dia útil para combinarmos o melhor horário.
      </SectionHeading>

      <div className="mx-auto mt-20 grid max-w-5xl gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <div className="reveal relative hidden md:block">
          <img src="/images/poltronas.jpg" alt="" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-tinta/85 to-transparent p-8 pt-24 text-creme">
            <p className="eyebrow !text-[10px] text-creme/70">Horários de atendimento</p>
            <ul className="mt-4 space-y-1.5 font-serif text-xl">
              <li className="flex justify-between"><span>Segunda a sexta</span><span className="italic">8h — 20h</span></li>
              <li className="flex justify-between"><span>Sábado</span><span className="italic">8h — 12h</span></li>
            </ul>
          </div>
        </div>

        <div className="reveal" style={d(150)}>
          {criar.isSuccess ? (
            <div className="flex h-full flex-col items-center justify-center bg-creme-2 px-8 py-20 text-center">
              <span className="flex size-14 items-center justify-center rounded-full border border-terracota text-terracota">
                <Check size={22} strokeWidth={1.3} />
              </span>
              <h3 className="mt-6 font-serif text-4xl">Mensagem recebida</h3>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-tinta-suave">
                Obrigada por dar esse passo. Em breve entro em contato para combinarmos sua primeira conversa.
              </p>
              <button onClick={() => criar.reset()} className="eyebrow mt-8 !text-[10px] text-terracota underline-offset-4 hover:underline">
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={enviar} className="space-y-6" noValidate>
              <div>
                <label className={rotulo} htmlFor="nome">Nome</label>
                <input id="nome" name="nome" aria-label="Nome" className={campo} placeholder="Como você gostaria de ser chamada(o)" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className={rotulo} htmlFor="email">E-mail</label>
                  <input id="email" name="email" aria-label="E-mail" type="email" className={campo} placeholder="voce@email.com" />
                </div>
                <div>
                  <label className={rotulo} htmlFor="telefone">WhatsApp <span className="text-tinta-suave/60">(opcional)</span></label>
                  <input id="telefone" name="telefone" aria-label="WhatsApp" className={campo} placeholder="(00) 00000-0000" />
                </div>
              </div>
              <fieldset>
                <legend className={rotulo}>Modalidade</legend>
                <div className="flex flex-wrap gap-x-7 gap-y-3">
                  {(
                    [
                      ["online", "Online"],
                      ["presencial", "Presencial"],
                      ["indiferente", "Tanto faz"],
                    ] as const
                  ).map(([v, l]) => (
                    <label key={v} className="flex cursor-pointer items-center gap-2.5 font-serif text-lg">
                      <span
                        className={`flex size-4 items-center justify-center rounded-full border transition ${
                          modalidade === v ? "border-terracota" : "border-tinta-suave/50"
                        }`}
                      >
                        {modalidade === v && <span className="size-2 rounded-full bg-terracota" />}
                      </span>
                      <input
                        type="radio"
                        aria-label={l}
                        name="modalidade"
                        value={v}
                        checked={modalidade === v}
                        onChange={() => setModalidade(v)}
                        className="sr-only"
                      />
                      {l}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div>
                <label className={rotulo} htmlFor="mensagem">O que te traz aqui? <span className="text-tinta-suave/60">(opcional)</span></label>
                <textarea
                  id="mensagem"
                  aria-label="Mensagem"
                  name="mensagem"
                  rows={4}
                  className={`${campo} resize-none`}
                  placeholder="Escreva só o que se sentir à vontade para compartilhar."
                />
              </div>
              {erro && <p className="text-[13.5px] text-terracota">{erro}</p>}
              <button
                type="submit"
                disabled={criar.isPending}
                className="eyebrow flex w-full items-center justify-center gap-3 bg-tinta px-8 py-4.5 py-[18px] text-creme transition-colors hover:bg-terracota disabled:opacity-60"
              >
                {criar.isPending && <Loader2 size={14} className="animate-spin" />}
                {criar.isPending ? "Enviando" : "Solicitar horário"}
              </button>
              <p className="text-center text-[12px] leading-relaxed text-tinta-suave/80">
                Seus dados são usados apenas para retorno do contato, em sigilo.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
