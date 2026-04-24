import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { SectionCard } from "@/components/ui/SectionCard";
import { BeamDecor } from "@/components/layout/BeamDecor";
import { areas } from "@/lib/content/site";
import { AreaCard } from "@/components/areas/AreaCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { PrimaryButtonLink } from "@/components/ui/PrimaryButton";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Áreas de Atuação | Wallach Assessoria Jurídica",
  description:
    "Recuperação judicial, direito empresarial, tributário, civil, trabalhista, imobiliário e família. Assessoria jurídica completa em Recife.",
};

export default function AreasPage() {
  const sorted = [...areas].sort((a, b) => a.ordem - b.ordem);
  return (
    <>
      <SectionCard dark className="relative overflow-hidden">
        <BeamDecor />

        <div
          className="absolute right-[-1rem] top-1/2 -translate-y-1/2 select-none pointer-events-none"
          aria-hidden="true"
        >
          <span className="font-display leading-none text-white opacity-[0.05] text-[260px] md:text-[320px]">
            §
          </span>
        </div>

        <div className="relative z-10 max-w-3xl">
          <p className="font-label text-xs uppercase tracking-widest text-brand-steel mb-4 gv-animate-on-scroll">
            Expertise jurídica · Wallach
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6 gv-clip-on-scroll">
            Áreas de Atuação
          </h1>
          <p className="text-lg text-slate-300 font-body leading-relaxed gv-animate-on-scroll delay-200">
            Cobertura jurídica completa para pessoas e empresas. Cada área conta
            com advogados dedicados e estratégia construída para o seu caso
            específico.
          </p>
        </div>
      </SectionCard>

      <SectionCard>
        <p className="font-label text-xs uppercase tracking-widest text-brand-steel mb-4">
          O que fazemos
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-semibold text-brand-navy mb-6 wallach-spacing">
          Soluções para cada necessidade jurídica.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {sorted.map((area, index) => (
            <div
              key={area.id}
              className={cn(
                "h-full min-h-0",
                index % 3 === 0
                  ? "gv-animate-on-scroll delay-100"
                  : index % 3 === 1
                    ? "gv-animate-on-scroll delay-200"
                    : "gv-animate-on-scroll delay-350"
              )}
            >
              <AreaCard area={area} />
            </div>
          ))}

          <div
            className="md:col-span-2 relative overflow-hidden rounded-2xl p-6 sm:p-8
              bg-brand-navy/5 border border-dashed border-brand-navy/20
              flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10
              gv-animate-on-scroll delay-350"
          >
            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full
                bg-brand-navy/5 blur-2xl pointer-events-none"
            />

            <div className="relative z-10 min-w-0 flex-1 text-center md:text-left">
              <p className="font-label text-xs uppercase tracking-widest text-brand-steel mb-3">
                Tem uma dúvida jurídica?
              </p>
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-slate-900 mb-2">
                Não encontrou o que precisava?
              </h3>
              <p className="font-body text-sm text-slate-600 leading-relaxed">
                Cada caso é único. Se a sua situação não se encaixa em nenhuma
                das áreas acima, entre em contato — nossa equipe analisa seu caso
                e indica o melhor caminho.
              </p>
            </div>

            <div className="relative z-10 flex shrink-0 justify-center md:justify-end">
              <GlassButton href="/contato" icon={Phone}>
                Falar com a Equipe
              </GlassButton>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard dark className="text-center relative overflow-hidden">
        <BeamDecor />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display italic text-3xl md:text-4xl text-white wallach-shimmer-text mb-6">
            Tem uma dúvida jurídica? A consulta inicial é o primeiro passo.
          </h2>
          <p className="text-slate-300 font-body mb-8">
            Nossa equipe analisa seu caso e aponta o caminho mais adequado. Entre
            em contato — estamos prontos para ouvir.
          </p>
          <PrimaryButtonLink href="/contato">Agendar Consulta</PrimaryButtonLink>
        </div>
      </SectionCard>
    </>
  );
}
