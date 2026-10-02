import { Header } from "../components/site/header";
import { Hero } from "../components/site/hero";
import { Sobre } from "../components/site/sobre";
import { Especialidades } from "../components/site/especialidades";
import { Faixa } from "../components/site/faixa";
import { Artigos } from "../components/site/artigos";
import { Faq } from "../components/site/faq";
import { Agendar } from "../components/site/agendar";
import { Footer } from "../components/site/footer";
import { useReveal } from "../hooks/use-reveal";

function Index() {
  useReveal();
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Especialidades />
        <Faixa />
        <Artigos />
        <Faq />
        <Agendar />
      </main>
      <Footer />
    </div>
  );
}

export default Index;
