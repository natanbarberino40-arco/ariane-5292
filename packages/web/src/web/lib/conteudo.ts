export type Especialidade = {
  titulo: string;
  tag: string;
  publico: string;
  texto: string;
  imagem: string;
  topicos: string[];
};

export const especialidades: Especialidade[] = [
  {
    titulo: "Ansiedade & Estresse",
    tag: "Adultos",
    publico: "A partir de 18 anos",
    texto:
      "Para quem vive em estado de alerta, com a mente acelerada, dificuldade para dormir ou a sensação de que nunca é suficiente.",
    imagem: "/images/ansiedade.jpg",
    topicos: ["Crises de ansiedade", "Burnout", "Autocobrança"],
  },
  {
    titulo: "Infância & Adolescência",
    tag: "Infanto-juvenil",
    publico: "De 5 a 17 anos",
    texto:
      "Um espaço lúdico e seguro para crianças e adolescentes elaborarem emoções — com orientação próxima aos pais e à escola.",
    imagem: "/images/infantil.jpg",
    topicos: ["Comportamento", "Luto e mudanças", "Orientação parental"],
  },
  {
    titulo: "Casal & Família",
    tag: "Vínculos",
    publico: "Casais e famílias",
    texto:
      "Para reconstruir a comunicação, atravessar crises e encontrar novos acordos, sem culpados — com escuta para cada um.",
    imagem: "/images/casal.jpg",
    topicos: ["Comunicação", "Crises e separação", "Parentalidade"],
  },
];

export type Artigo = {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  data: string;
  leitura: string;
  imagem: string;
  corpo: { tipo: "p" | "h" | "cit"; texto: string }[];
};

export const artigos: Artigo[] = [
  {
    slug: "quando-procurar-terapia",
    titulo: "Quando é a hora de procurar terapia?",
    resumo:
      "Não é preciso estar no limite. Alguns sinais sutis mostram que conversar com alguém pode fazer diferença.",
    categoria: "Primeiros passos",
    data: "12 set 2026",
    leitura: "5 min",
    imagem: "/images/artigo1.jpg",
    corpo: [
      { tipo: "p", texto: "Existe uma ideia antiga de que terapia é só para momentos de crise. Na prática, muitas pessoas chegam ao consultório não porque algo desabou, mas porque algo deixou de fazer sentido — e isso já é motivo suficiente." },
      { tipo: "h", texto: "Sinais que merecem atenção" },
      { tipo: "p", texto: "Cansaço que não passa com descanso, irritação constante, dificuldade de concentração, conflitos que se repetem nas relações ou a sensação de estar vivendo no automático. Nenhum desses sinais é, sozinho, um diagnóstico — mas juntos contam uma história que vale a pena escutar." },
      { tipo: "cit", texto: "Procurar ajuda não é sinal de fraqueza. É um gesto de cuidado com a própria história." },
      { tipo: "h", texto: "E se eu não souber o que dizer?" },
      { tipo: "p", texto: "Tudo bem. A primeira sessão é justamente para isso: um encontro sem pressa, em que você fala do que conseguir e tira dúvidas sobre como o processo funciona. Não há resposta certa." },
    ],
  },
  {
    slug: "ansiedade-no-corpo",
    titulo: "A ansiedade também mora no corpo",
    resumo:
      "Aperto no peito, tensão nos ombros, estômago revirado. Entenda por que o corpo fala antes da gente perceber.",
    categoria: "Ansiedade",
    data: "28 ago 2026",
    leitura: "6 min",
    imagem: "/images/artigo2.jpg",
    corpo: [
      { tipo: "p", texto: "A ansiedade é uma resposta natural do organismo diante de ameaças. O problema começa quando esse alarme dispara o tempo todo, mesmo sem perigo real por perto." },
      { tipo: "h", texto: "Como ela aparece" },
      { tipo: "p", texto: "Taquicardia, respiração curta, tensão muscular, alterações no sono e no apetite. Muitas vezes a pessoa procura primeiro um cardiologista ou gastroenterologista — e está tudo bem fazer isso — antes de perceber a dimensão emocional do que sente." },
      { tipo: "cit", texto: "O corpo não mente: ele guarda o que ainda não conseguimos colocar em palavras." },
      { tipo: "h", texto: "Pequenos gestos que ajudam" },
      { tipo: "p", texto: "Respiração lenta, pausas ao longo do dia, movimento e rotina de sono são aliados importantes. A terapia entra para compreender o que alimenta esse estado de alerta e construir outras formas de lidar com ele." },
    ],
  },
  {
    slug: "conversar-com-criancas-sobre-emocoes",
    titulo: "Como conversar com crianças sobre emoções",
    resumo:
      "Nomear o que se sente é uma habilidade que se aprende. Algumas ideias simples para o dia a dia em família.",
    categoria: "Infância",
    data: "09 ago 2026",
    leitura: "4 min",
    imagem: "/images/artigo3.jpg",
    corpo: [
      { tipo: "p", texto: "Crianças sentem tudo intensamente, mas ainda estão aprendendo a dar nome ao que acontece dentro delas. Birras, silêncios e mudanças de comportamento são, muitas vezes, uma forma de comunicação." },
      { tipo: "h", texto: "Acolher antes de corrigir" },
      { tipo: "p", texto: "Frases como “eu vejo que você ficou muito bravo” ajudam a criança a se sentir compreendida e abrem espaço para conversar sobre o que fazer com essa raiva — em vez de simplesmente pedir que ela pare de sentir." },
      { tipo: "cit", texto: "Uma emoção nomeada é uma emoção que começa a ficar menor." },
      { tipo: "h", texto: "Brincar também é conversar" },
      { tipo: "p", texto: "Desenhos, histórias e brincadeiras de faz de conta são caminhos potentes para a criança expressar o que ainda não consegue dizer diretamente." },
    ],
  },
];

export const faq = [
  {
    p: "Como funciona a primeira sessão?",
    r: "É um encontro de acolhimento. Você conta o que te trouxe até aqui, no seu ritmo, e conversamos sobre expectativas, frequência e valores. Não há compromisso de continuar.",
  },
  {
    p: "O atendimento online funciona tão bem quanto o presencial?",
    r: "Sim. Pesquisas mostram resultados equivalentes para a maioria das demandas. O importante é ter um lugar reservado, com privacidade e boa conexão.",
  },
  {
    p: "Qual é a duração e a frequência das sessões?",
    r: "As sessões têm 50 minutos e, em geral, acontecem uma vez por semana. A frequência pode ser ajustada conforme o momento de cada processo.",
  },
  {
    p: "Vocês atendem por convênio?",
    r: "O atendimento é particular, com emissão de recibo para solicitar reembolso junto ao seu plano de saúde, quando previsto no contrato.",
  },
  {
    p: "O que eu falar fica em sigilo?",
    r: "Sempre. O sigilo é garantido pelo Código de Ética Profissional do Psicólogo e só pode ser quebrado em situações excepcionais de risco à vida, previstas em lei.",
  },
  {
    p: "Quanto tempo dura uma terapia?",
    r: "Não existe um prazo fixo. Alguns processos são mais focais, outros mais longos. Avaliamos juntas, periodicamente, como você está e para onde quer seguir.",
  },
];
