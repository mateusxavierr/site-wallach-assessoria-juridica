import Image from "next/image";
import {
  Building2,
  Mail,
  Receipt,
  RefreshCw,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { SectionCard } from "@/components/ui/SectionCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { GvTilt } from "@/components/ui/GvTilt";
import { assetPath } from "@/lib/basePath";

const bio = `Armando Wallach fundou o escritório em 2004 em Recife, com a convicção de que advocacia de qualidade deve ser acessível e clara para quem mais precisa.

Com formação em Direito e trajetória dedicada ao direito empresarial, tributário e recuperação judicial, Armando construiu uma reputação sólida ao longo de duas décadas — baseada em resultados concretos e na confiança que cada cliente deposita no escritório.

Sua atuação é marcada pela análise criteriosa de cada caso, pela comunicação direta com o cliente e pela busca constante pela solução mais eficiente.`;

type Especialidade = {
  icon: LucideIcon;
  titulo: string;
  descricao: string;
  delay: string;
};

const especialidades: Especialidade[] = [
  {
    icon: RefreshCw,
    titulo: "Recuperação Judicial",
    descricao:
      "Reestruturação de empresas em crise com foco na preservação do negócio e dos empregos.",
    delay: "delay-100",
  },
  {
    icon: Building2,
    titulo: "Direito Empresarial",
    descricao:
      "Contratos, gestão societária e resolução de conflitos entre sócios e parceiros.",
    delay: "delay-200",
  },
  {
    icon: Receipt,
    titulo: "Direito Tributário",
    descricao:
      "Planejamento fiscal estratégico e defesa em execuções e autuações fiscais.",
    delay: "delay-300",
  },
  {
    icon: Scale,
    titulo: "Direito Civil",
    descricao:
      "Responsabilidade civil, questões patrimoniais e proteção dos direitos do cliente.",
    delay: "delay-[400ms]",
  },
];

export function ArmandoFeatured() {
  return (
    <SectionCard>
      <div
        className="grid grid-cols-1 gap-6 mb-12 items-stretch
          [grid-template-areas:'aw-head'_'aw-photo'_'aw-bio']
          lg:grid-cols-12 lg:gap-x-10 lg:gap-y-6
          lg:[grid-template-areas:'aw-photo_aw-photo_aw-photo_aw-photo_aw-photo_aw-head_aw-head_aw-head_aw-head_aw-head_aw-head_aw-head'_'aw-photo_aw-photo_aw-photo_aw-photo_aw-photo_aw-bio_aw-bio_aw-bio_aw-bio_aw-bio_aw-bio_aw-bio']"
      >
        <div className="[grid-area:aw-head] space-y-6 wallach-fade-right">
          <p className="font-label text-xs uppercase tracking-widest text-brand-navy wallach-underline-grow">
            Sócio Fundador
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-brand-navy wallach-spacing">
            Armando Wallach
          </h2>
          <p className="font-display italic text-xl text-brand-navy/90 wallach-shimmer-text-dark">
            OAB/PE — Advogado há mais de 20 anos
          </p>
        </div>

        <div className="[grid-area:aw-photo] min-h-0">
          <GvTilt className="relative h-full min-h-[420px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src={assetPath("/images/team/armando-wallach.jpg")}
                alt="Armando Wallach"
                fill
                className="object-cover object-[50%_15%]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
            <span className="absolute bottom-4 right-4 bg-brand-navy text-white font-label text-xs px-3 py-2 rounded-xl shadow-glow z-20">
              Sócio Fundador · OAB/PE
            </span>
          </GvTilt>
        </div>

        <div className="[grid-area:aw-bio] space-y-6 wallach-fade-right">
          <div className="text-slate-700 font-body leading-relaxed whitespace-pre-line">
            {bio}
          </div>
          <div className="pt-2">
            <GlassButton href="/contato" icon={Mail} className="inline-block">
              Entrar em Contato
            </GlassButton>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {especialidades.map((esp) => {
          const Icon = esp.icon;
          return (
            <div
              key={esp.titulo}
              className={`group relative bg-white border border-brand-navy/20 rounded-2xl p-6
                hover:bg-brand-navy/[0.04] hover:border-brand-navy/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(28,46,92,0.15)]
                transition-all duration-500 cursor-default overflow-hidden gv-animate-on-scroll ${esp.delay}`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
              </div>

              <div
                className="w-12 h-12 rounded-xl bg-brand-navy/10 border border-brand-navy/15 flex items-center justify-center mb-5
                group-hover:bg-brand-navy group-hover:border-brand-navy group-hover:scale-110 transition-all duration-500"
              >
                <Icon
                  className="w-5 h-5 text-brand-navy group-hover:text-white transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>

              <div className="h-[1.5px] w-8 bg-brand-navy/30 group-hover:w-full group-hover:bg-brand-steel/60 transition-all duration-500 mb-5" />

              <h3 className="font-display font-semibold text-lg text-brand-navy mb-2 leading-snug">
                {esp.titulo}
              </h3>

              <p className="font-body text-sm text-slate-600 leading-relaxed">
                {esp.descricao}
              </p>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}
