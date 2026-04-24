import type { Metadata } from "next";
import { SectionCard } from "@/components/ui/SectionCard";
import { equipe } from "@/lib/content/site";
import { ArmandoFeatured } from "@/components/equipe/ArmandoFeatured";
import { PlaceholderTeamCard } from "@/components/equipe/PlaceholderTeamCard";
import { TeamCard } from "@/components/equipe/TeamCard";
import { PrimaryButtonLink } from "@/components/ui/PrimaryButton";

export const metadata: Metadata = {
  title: "Nossa Equipe | Wallach Assessoria Jurídica",
  description:
    "Conheça os advogados da Wallach. Profissionais comprometidos com o seu caso em Recife, Pernambuco.",
};

export default function EquipePage() {
  return (
    <>
      <SectionCard dark className="relative overflow-hidden">
        <div
          className="absolute right-[-2rem] top-1/2 -translate-y-1/2 select-none pointer-events-none"
          aria-hidden="true"
        >
          <span className="font-display font-bold leading-none text-white opacity-[0.05] text-[260px] md:text-[320px] tracking-tighter">
            W
          </span>
        </div>

        <div className="relative z-10">
          <p className="font-label text-xs uppercase tracking-widest text-brand-steel mb-4 gv-animate-on-scroll">
            Quem somos
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6 gv-clip-on-scroll">
            Pessoas comprometidas com o seu resultado.
          </h1>
          <p className="text-lg text-slate-300 font-body max-w-2xl leading-relaxed gv-animate-on-scroll delay-200">
            A Wallach é formada por advogados com experiência real, formação sólida e
            o compromisso de tratar cada caso com atenção individual.
          </p>
        </div>
      </SectionCard>

      <ArmandoFeatured />

      <SectionCard dark>
        <p className="font-label text-xs uppercase tracking-widest text-brand-steel mb-4">
          A equipe
        </p>
        <h2 className="text-4xl font-display font-semibold text-white mb-4 wallach-spacing">
          Advogados da Wallach
        </h2>
        <p className="text-slate-400 font-body max-w-2xl mb-10 sm:mb-12">
          Cada membro da nossa equipe é selecionado pelo comprometimento com o
          cliente e pela excelência técnica.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
          {equipe
            .filter((m) => m.id !== "armando-wallach")
            .map((m, i) => {
              const delayClass =
                i === 0
                  ? "delay-100"
                  : i === 1
                    ? "delay-200"
                    : i === 2
                      ? "delay-300"
                      : "delay-[400ms]";

              const especialidade =
                "especialidade" in m
                  ? (m as { especialidade?: string }).especialidade
                  : undefined;
              const cargo =
                "cargo" in m ? (m as { cargo?: string }).cargo : undefined;

              if ("placeholder" in m && m.placeholder) {
                return (
                  <PlaceholderTeamCard
                    key={m.id}
                    label={m.nome}
                    index={i}
                    foto={m.foto}
                    delayClass={delayClass}
                    cargo={cargo}
                    especialidade={especialidade}
                  />
                );
              }
              if (
                "foto" in m &&
                m.foto &&
                "cargo" in m &&
                "oab" in m
              ) {
                return (
                  <TeamCard
                    key={m.id}
                    member={m as Parameters<typeof TeamCard>[0]["member"]}
                    delayClass={delayClass}
                  />
                );
              }
              return null;
            })}
        </div>
      </SectionCard>

      <SectionCard className="text-center">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-navy mb-4">
          Fale diretamente com nossa equipe.
        </h2>
        <p className="text-slate-600 font-body max-w-lg mx-auto mb-8">
          Cada caso começa por uma conversa. Entre em contato e dê o primeiro passo.
        </p>
        <PrimaryButtonLink href="/contato" className="inline-flex">
          Agendar Consulta
        </PrimaryButtonLink>
      </SectionCard>
    </>
  );
}
