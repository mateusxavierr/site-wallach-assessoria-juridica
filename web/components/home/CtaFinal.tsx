import { PrimaryButtonLink } from "@/components/ui/PrimaryButton";
import { BeamDecor } from "@/components/layout/BeamDecor";
import { SectionCard } from "@/components/ui/SectionCard";
import { siteConfig } from "@/lib/content/site";

export function CtaFinal() {
  return (
    <SectionCard dark className="relative overflow-hidden text-center">
      <BeamDecor />
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl font-medium text-white text-center wallach-shimmer-text mb-6 leading-tight">
          Seu problema jurídico tem solução.
          <br />
          Vamos conversar.
        </h2>
        <p className="text-lg text-slate-300 max-w-lg mx-auto text-center font-body mb-8">
          Agende uma consulta inicial com nossa equipe. Analisamos seu caso e
          apresentamos um caminho claro.
        </p>
        <div className="flex flex-col items-center gap-4">
          <PrimaryButtonLink href="/contato">Entrar em Contato</PrimaryButtonLink>
          <p className="font-label text-sm text-slate-500 mt-4 tracking-wide">
            <a
              href={siteConfig.telefoneHref}
              className="text-slate-500 hover:text-slate-300 underline-offset-2 hover:underline"
            >
              {siteConfig.telefone}
            </a>
            {" · "}
            <a
              href={siteConfig.emailHref}
              className="text-slate-500 hover:text-slate-300 underline-offset-2 hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    </SectionCard>
  );
}
