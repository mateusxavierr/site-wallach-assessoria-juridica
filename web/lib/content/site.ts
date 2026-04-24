export const siteConfig = {
  nome: "Wallach Assessoria Jurídica",
  slogan: "Soluções jurídicas que protegem o que você construiu.",
  fundacao: 2004,
  cidade: "Recife",
  estado: "Pernambuco",
  telefone: "(81) 3088-3317",
  telefoneHref: "tel:+558130883317",
  email: "contato@wallach.adv.br",
  emailHref: "mailto:contato@wallach.adv.br",
  horario: "Seg–Sex · 8h às 18h",
} as const;

export type AreaIconName =
  | "RefreshCw"
  | "Building2"
  | "Receipt"
  | "FileText"
  | "Briefcase"
  | "Home"
  | "Heart";

export type AreaItem = {
  id: string;
  titulo: string;
  icone: AreaIconName;
  tag: string;
  descricao: string;
  destaque: boolean;
  ordem: number;
};

export const areas: AreaItem[] = [
  {
    id: "recuperacao-judicial",
    titulo: "Recuperação Judicial e Extrajudicial",
    icone: "RefreshCw",
    tag: "Direito Empresarial",
    destaque: true,
    ordem: 1,
    descricao:
      "Estruturamos o processo de recuperação preservando a empresa, os empregos e o patrimônio dos sócios — com estratégia completa do início ao fim.",
  },
  {
    id: "direito-empresarial",
    titulo: "Direito Empresarial e Contratos",
    icone: "Building2",
    tag: "Empresas",
    destaque: true,
    ordem: 2,
    descricao:
      "Do planejamento societário à gestão de contratos e conflitos, protegemos sua empresa de forma preventiva e estratégica em cada etapa.",
  },
  {
    id: "direito-tributario",
    titulo: "Direito Tributário",
    icone: "Receipt",
    tag: "Empresas e PF",
    destaque: true,
    ordem: 3,
    descricao:
      "Redução legal da carga tributária, planejamento fiscal e defesa em execuções. Você paga apenas o que a lei exige — com segurança jurídica total.",
  },
  {
    id: "direito-civil",
    titulo: "Direito Civil",
    icone: "FileText",
    tag: "Pessoas e Empresas",
    destaque: false,
    ordem: 4,
    descricao:
      "Representação em processos de responsabilidade civil, cobranças, danos morais e questões patrimoniais para pessoas físicas e jurídicas.",
  },
  {
    id: "direito-trabalho",
    titulo: "Direito do Trabalho",
    icone: "Briefcase",
    tag: "Empresas e PF",
    destaque: false,
    ordem: 5,
    descricao:
      "Para empresas: gestão de riscos e defesa em reclamações. Para trabalhadores: defesa de direitos, rescisões e verbas não pagas.",
  },
  {
    id: "direito-imobiliario",
    titulo: "Direito Imobiliário",
    icone: "Home",
    tag: "Pessoas e Empresas",
    destaque: false,
    ordem: 6,
    descricao:
      "Compra, venda, locação, usucapião e regularização de imóveis. Analisamos contratos antes da assinatura e acompanhamos até o registro.",
  },
  {
    id: "direito-familia",
    titulo: "Direito de Família e Sucessões",
    icone: "Heart",
    tag: "Pessoas Físicas",
    destaque: false,
    ordem: 7,
    descricao:
      "Divórcio, guarda, pensão, inventário e planejamento sucessório — com a sensibilidade que o momento exige e a técnica que o direito demanda.",
  },
];

export const equipe = [
  {
    id: "armando-wallach",
    nome: "Armando Wallach",
    cargo: "Sócio Fundador",
    oab: "OAB/PE",
    foto: "/images/team/armando-wallach.jpg",
    bio: `Armando Wallach fundou o escritório em 2004 em Recife, com a convicção de que advocacia de qualidade deve ser acessível e clara para quem mais precisa. Com formação em Direito e trajetória dedicada ao direito empresarial, tributário e recuperação judicial, Armando construiu uma reputação sólida ao longo de duas décadas — baseada em resultados concretos e na confiança que cada cliente deposita no escritório.`,
    areasDestaque: [
      "Recuperação Judicial",
      "Direito Empresarial",
      "Direito Tributário",
      "Direito Civil",
    ],
    destaque: true,
    placeholder: false,
  },
  {
    id: "placeholder-1",
    nome: "Advogado 1",
    cargo: "Advogado Associado",
    especialidade: "Recuperação Judicial",
    placeholder: true,
    foto: "/images/team/advogado-placeholder-1.png",
  },
  {
    id: "placeholder-2",
    nome: "Advogada 2",
    cargo: "Advogada Associada",
    especialidade: "Direito Tributário",
    placeholder: true,
    foto: "/images/team/advogado-placeholder-2.png",
  },
  {
    id: "placeholder-3",
    nome: "Advogado 3",
    cargo: "Advogado Associado",
    especialidade: "Direito Civil",
    placeholder: true,
    foto: "/images/team/advogado-placeholder-3.png",
  },
  {
    id: "placeholder-4",
    nome: "Advogado 4",
    cargo: "Advogado Associado",
    especialidade: "Direito Empresarial",
    placeholder: true,
    foto: "/images/team/advogado-placeholder-4.png",
  },
] as const;

export const depoimentos = [
  {
    id: 1,
    texto: `A Wallach foi fundamental no processo de recuperação da nossa empresa. A equipe soube entender nossa situação e estruturou uma solução que preservou nosso negócio e nossos empregos.`,
    nome: "Carlos M.",
    cargo: "Diretor, Empresa de Construção Civil — Recife",
    estrelas: 5,
    placeholder: true,
  },
  {
    id: 2,
    texto: `Fui muito bem orientado na questão tributária da minha empresa. Reduzimos a carga fiscal de forma completamente legal e o acompanhamento foi impecável do início ao fim.`,
    nome: "Ana P.",
    cargo: "Empresária, Comércio — Recife",
    estrelas: 5,
    placeholder: true,
  },
  {
    id: 3,
    texto: `Resolvi uma pendência trabalhista que parecia sem saída. A Wallach apresentou uma estratégia clara desde o primeiro contato e o resultado superou minhas expectativas.`,
    nome: "Ricardo F.",
    cargo: "Sócio, Empresa de Serviços — PE",
    estrelas: 5,
    placeholder: true,
  },
] as const;

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/areas", label: "Áreas" },
  { href: "/equipe", label: "Equipe" },
  { href: "/sobre", label: "Sobre" },
] as const;

export const contatoInteresseOptions = [
  { value: "", label: "Selecione uma área...", disabled: true },
  { value: "Recuperação Judicial", label: "Recuperação Judicial" },
  { value: "Direito Empresarial e Contratos", label: "Direito Empresarial e Contratos" },
  { value: "Direito Tributário", label: "Direito Tributário" },
  { value: "Direito Civil", label: "Direito Civil" },
  { value: "Direito do Trabalho", label: "Direito do Trabalho" },
  { value: "Direito Imobiliário", label: "Direito Imobiliário" },
  { value: "Direito de Família e Sucessões", label: "Direito de Família e Sucessões" },
  { value: "Outro", label: "Outro" },
] as const;
