import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "wouter";
import { Header } from "../components/site/header";
import { Footer } from "../components/site/footer";
import { Diamond, d } from "../components/site/primitives";
import { artigos } from "../lib/conteudo";
import { useReveal } from "../hooks/use-reveal";

export default function ArtigoPage() {
  const { slug } = useParams<{ slug: string }>();
  const artigo = artigos.find((a) => a.slug === slug);
  const outros = artigos.filter((a) => a.slug !== slug).slice(0, 2);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  useReveal(slug);

  if (!artigo) {
    return (
      <div className="min-h-screen">
        <Header solid />
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
          <h1 className="font-serif text-5xl">Artigo não encontrado</h1>
          <Link to="/" className="eyebrow mt-8 text-terracota">Voltar ao início</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header solid />
      <article className="px-6 pb-28 pt-36 md:pt-44">
        <div className="mx-auto max-w-3xl text-center">
          <a href="/#artigos" className="eyebrow hero-in inline-flex items-center gap-2 !text-[10px] text-tinta-suave hover:text-terracota">
            <ArrowLeft size={12} /> Todos os artigos
          </a>
          <p className="eyebrow hero-in mt-10 text-terracota" style={d(100)}>{artigo.categoria}</p>
          <h1 className="hero-in mt-5 font-serif text-5xl leading-[1.05] md:text-7xl" style={d(200)}>{artigo.titulo}</h1>
          <p className="hero-in mt-6 font-serif text-lg italic text-tinta-suave" style={d(300)}>
            {artigo.data} · leitura de {artigo.leitura}
          </p>
          <Diamond className="hero-in mt-8" />
        </div>
        <img
          src={artigo.imagem}
          alt=""
          className="hero-in mx-auto mt-14 aspect-[16/9] w-full max-w-5xl object-cover"
          style={d(450)}
        />
        <div className="mx-auto mt-16 max-w-2xl">
          <p className="reveal font-serif text-2xl leading-snug text-tinta md:text-[27px]">{artigo.resumo}</p>
          {artigo.corpo.map((b, i) =>
            b.tipo === "h" ? (
              <h2 key={i} className="reveal mt-14 font-serif text-3xl md:text-4xl">{b.texto}</h2>
            ) : b.tipo === "cit" ? (
              <blockquote key={i} className="reveal my-12 border-l border-terracota pl-8 font-serif text-2xl italic leading-snug text-terracota md:text-3xl">
                {b.texto}
              </blockquote>
            ) : (
              <p key={i} className="reveal mt-6 text-[16.5px] leading-[1.9] text-tinta-suave">{b.texto}</p>
            ),
          )}
          <div className="reveal mt-16 bg-creme-2 p-8 text-center md:p-10">
            <p className="font-serif text-3xl">Quer conversar sobre isso?</p>
            <p className="mt-3 text-[14.5px] text-tinta-suave">A primeira sessão é um espaço sem compromisso.</p>
            <a href="/#agendar" className="eyebrow mt-7 inline-block bg-tinta px-8 py-4 text-creme transition-colors hover:bg-terracota">
              Agendar conversa
            </a>
          </div>
        </div>

        <div className="mx-auto mt-28 max-w-5xl border-t border-linha pt-16">
          <p className="eyebrow text-center text-tinta-suave">Continue lendo</p>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {outros.map((a) => (
              <Link key={a.slug} to={`/artigos/${a.slug}`} className="reveal group grid grid-cols-[120px_1fr] items-center gap-6">
                <img src={a.imagem} alt="" className="aspect-square w-full object-cover" />
                <div>
                  <p className="eyebrow !text-[9.5px] text-terracota">{a.categoria}</p>
                  <h3 className="mt-2 font-serif text-2xl leading-tight transition-colors group-hover:text-terracota">{a.titulo}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
