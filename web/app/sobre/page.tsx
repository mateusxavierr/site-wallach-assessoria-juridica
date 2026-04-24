import type { Metadata } from "next";
import { SectionCard } from "@/components/ui/SectionCard";
import { BeamDecor } from "@/components/layout/BeamDecor";
import { GvTilt } from "@/components/ui/GvTilt";
import { Heart, Award, Eye, Flag, TrendingUp } from "lucide-react";
import { PrimaryButtonLink } from "@/components/ui/PrimaryButton";

export const metadata: Metadata = {
  title: "Sobre a Wallach | 20 Anos de Assessoria Jurídica em Recife",
  description:
    "Fundada em 2004 em Recife por Armando Wallach. Duas décadas de comprometimento com resultados reais para pessoas e empresas.",
};

const historia = `A Wallach Assessoria Jurídica surgiu em Recife, no ano de 2004, fundada pelo advogado Armando Wallach com a missão de entregar assessoria jurídica de alto padrão — com comprometimento genuíno com o resultado de cada cliente.

Desde o início, o escritório optou por uma atuação diferenciada: em vez de atender um volume massivo de casos, a Wallach se dedicou a construir relações duradouras com seus clientes, baseadas em confiança, transparência e resultados concretos.

Com o passar dos anos, o escritório expandiu suas áreas de atuação e consolidou uma equipe técnica sólida, mantendo sempre o mesmo padrão de atenção individual que marcou sua fundação.

Hoje, a Wallach é referência em Pernambuco em direito empresarial e recuperação judicial, atendendo empresas e pessoas físicas que buscam não apenas um advogado, mas um parceiro jurídico de confiança.`;

export default function SobrePage() {
  return (
    <>
      <SectionCard dark className="relative overflow-hidden">
        <BeamDecor />

        {/* Marca d'água decorativa — "20" em fundo */}
        <div
          className="absolute right-[-2rem] top-1/2 -translate-y-1/2 select-none pointer-events-none"
          aria-hidden="true"
        >
          <span className="font-display font-semibold leading-none text-white opacity-[0.06] text-[260px] md:text-[320px] tracking-tighter">
            20
          </span>
        </div>

        <div className="relative z-10 max-w-3xl">
          <p className="font-label text-xs uppercase tracking-widest text-brand-steel mb-4 gv-animate-on-scroll">
            Nossa história
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-medium text-white wallach-shimmer-text italic mb-6 leading-tight">
            Duas décadas de compromisso com quem confia em nós.
          </h1>
          <p className="text-lg text-slate-300 font-body leading-relaxed gv-animate-on-scroll delay-200">
            A Wallach Assessoria Jurídica nasceu em Recife em 2004, com um propósito
            que permanece o mesmo: oferecer assessoria jurídica de excelência com
            atenção real a cada cliente.
          </p>
        </div>
      </SectionCard>

      <SectionCard>
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-6 wallach-fade-left">
            <p className="font-label text-xs uppercase tracking-widest text-brand-navy wallach-underline-grow">
              A Wallach
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-brand-navy wallach-spacing">
              Uma trajetória construída caso a caso.
            </h2>
            <p className="text-slate-700 font-body leading-relaxed whitespace-pre-line text-base">
              {historia}
            </p>
          </div>

          <div className="lg:col-span-5 wallach-fade-right sticky top-24">
            <GvTilt className="w-full">
              <div className="bg-brand-navy rounded-3xl p-10 shadow-glow text-center">
                <p className="font-display font-semibold text-8xl text-white">20</p>
                <p className="font-label text-xs uppercase tracking-widest text-brand-steellight mt-2">
                  Anos de história
                </p>
                <div className="border-t border-white/20 my-6" />
                <p className="font-body italic text-lg text-brand-steellight leading-relaxed">
                  &ldquo;Fundada em Recife com o propósito de ser o escritório em que
                  você realmente confia.&rdquo;
                </p>
              </div>
            </GvTilt>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          <div className="group flex gap-5 items-start p-5 rounded-2xl hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(28,46,92,0.08)] transition-all duration-500 gv-animate-on-scroll delay-100">
            <div className="flex-none w-10 h-10 rounded-xl bg-brand-navy/10 border border-brand-navy/15 flex items-center justify-center mt-0.5 group-hover:bg-brand-navy group-hover:border-brand-navy transition-all duration-300 group-hover:scale-110">
              <Flag
                className="w-4 h-4 text-brand-navy group-hover:text-white transition-colors duration-300"
                strokeWidth={1.5}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-label text-[10px] uppercase tracking-widest text-brand-steel group-hover:text-brand-navy transition-colors duration-300 mb-1">
                2004
              </p>
              <div className="h-px w-6 bg-brand-navy/20 group-hover:w-full group-hover:bg-brand-steel/50 transition-all duration-500 mb-2" />
              <p className="font-display font-semibold text-lg text-brand-navy leading-snug mb-1">
                Fundação
              </p>
              <p className="font-body text-sm text-slate-500 leading-relaxed">
                Armando Wallach funda o escritório em Recife com foco em direito
                empresarial.
              </p>
            </div>
          </div>

          <div className="group flex gap-5 items-start p-5 rounded-2xl hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(28,46,92,0.08)] transition-all duration-500 gv-animate-on-scroll delay-200 md:border-x md:border-slate-100">
            <div className="flex-none w-10 h-10 rounded-xl bg-brand-navy/10 border border-brand-navy/15 flex items-center justify-center mt-0.5 group-hover:bg-brand-navy group-hover:border-brand-navy transition-all duration-300 group-hover:scale-110">
              <TrendingUp
                className="w-4 h-4 text-brand-navy group-hover:text-white transition-colors duration-300"
                strokeWidth={1.5}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-label text-[10px] uppercase tracking-widest text-brand-steel group-hover:text-brand-navy transition-colors duration-300 mb-1">
                2010
              </p>
              <div className="h-px w-6 bg-brand-navy/20 group-hover:w-full group-hover:bg-brand-steel/50 transition-all duration-500 mb-2" />
              <p className="font-display font-semibold text-lg text-brand-navy leading-snug mb-1">
                Expansão
              </p>
              <p className="font-body text-sm text-slate-500 leading-relaxed">
                Ampliação para novas áreas, incluindo recuperação judicial e direito
                tributário.
              </p>
            </div>
          </div>

          <div className="group flex gap-5 items-start p-5 rounded-2xl hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(28,46,92,0.08)] transition-all duration-500 gv-animate-on-scroll delay-300">
            <div className="flex-none w-10 h-10 rounded-xl bg-brand-navy/10 border border-brand-navy/15 flex items-center justify-center mt-0.5 group-hover:bg-brand-navy group-hover:border-brand-navy transition-all duration-300 group-hover:scale-110">
              <Award
                className="w-4 h-4 text-brand-navy group-hover:text-white transition-colors duration-300"
                strokeWidth={1.5}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-label text-[10px] uppercase tracking-widest text-brand-steel group-hover:text-brand-navy transition-colors duration-300 mb-1">
                Hoje
              </p>
              <div className="h-px w-6 bg-brand-navy/20 group-hover:w-full group-hover:bg-brand-steel/50 transition-all duration-500 mb-2" />
              <p className="font-display font-semibold text-lg text-brand-navy leading-snug mb-1">
                Referência em PE
              </p>
              <p className="font-body text-sm text-slate-500 leading-relaxed">
                20+ anos de atuação, equipe consolidada e clientes em todo o nordeste.
              </p>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard dark>
        <p className="font-label text-xs uppercase tracking-widest text-brand-steel text-center mb-4">
          O que nos guia
        </p>
        <h2 className="text-4xl font-display font-semibold text-white text-center wallach-spacing mb-12">
          Princípios que norteiam cada caso.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-glass border border-white/10 rounded-2xl p-8 backdrop-blur-sm gv-animate-on-scroll delay-100">
            <Heart className="w-8 h-8 text-brand-steel mb-6" strokeWidth={1.5} />
            <h3 className="font-display font-semibold text-2xl text-white mb-3">
              Comprometimento
            </h3>
            <p className="font-body text-sm text-slate-400">
              Cada caso é tratado como se fosse o único. O resultado do seu processo
              é nossa prioridade desde a primeira conversa.
            </p>
          </div>
          <div className="bg-surface-glass border border-white/10 rounded-2xl p-8 backdrop-blur-sm gv-animate-on-scroll delay-200">
            <Eye className="w-8 h-8 text-brand-steel mb-6" strokeWidth={1.5} />
            <h3 className="font-display font-semibold text-2xl text-white mb-3">
              Transparência
            </h3>
            <p className="font-body text-sm text-slate-400">
              Você sempre sabe o que está acontecendo no seu caso. Comunicação clara,
              sem juridiquês, do início ao fim.
            </p>
          </div>
          <div className="bg-surface-glass border border-white/10 rounded-2xl p-8 backdrop-blur-sm gv-animate-on-scroll delay-350">
            <Award className="w-8 h-8 text-brand-steel mb-6" strokeWidth={1.5} />
            <h3 className="font-display font-semibold text-2xl text-white mb-3">
              Excelência técnica
            </h3>
            <p className="font-body text-sm text-slate-400">
              Duas décadas de prática resultaram em uma equipe com domínio profundo
              em cada área de atuação — e com vontade genuína de fazer bem feito.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard className="text-center">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-navy mb-4 wallach-spacing max-w-2xl mx-auto">
          Conheça a equipe que vai cuidar do seu caso.
        </h2>
        <p className="text-slate-600 font-body max-w-lg mx-auto mb-8">
          Mais de 20 anos de história, um time dedicado e o compromisso de entregar
          o melhor resultado.
        </p>
        <PrimaryButtonLink href="/contato">Falar com a Equipe</PrimaryButtonLink>
      </SectionCard>
    </>
  );
}
