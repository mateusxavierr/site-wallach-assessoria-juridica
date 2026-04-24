import Image from "next/image";
import { Building2, Receipt, Scale, Shield } from "lucide-react";
import { PrimaryButtonLink } from "@/components/ui/PrimaryButton";
import { GlassTagMini } from "@/components/ui/GlassTagMini";
import { GvTilt } from "@/components/ui/GvTilt";
import { BeamDecor } from "@/components/layout/BeamDecor";
import { SectionCard } from "@/components/ui/SectionCard";
import { siteConfig } from "@/lib/content/site";

export function Hero() {
  return (
    <SectionCard dark className="relative overflow-hidden min-h-[85vh] flex items-center">
      <BeamDecor />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-navy/10 rounded-full blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="font-label text-xs uppercase tracking-widest text-brand-steel mb-6 gv-animate-on-scroll">
            Assessoria Jurídica · Recife, PE
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[0.95] mb-6 gv-clip-on-scroll">
            Protegemos o que
            <br />
            você construiu.
          </h1>
          <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-body gv-animate-on-scroll delay-200 mb-8">
            Desde 2004, a Wallach Assessoria Jurídica atua ao lado de pessoas e
            empresas em Recife
            <span className="hidden lg:inline">
              , oferecendo orientação segura nas decisões que mais importam — com
              experiência, estratégia e comprometimento real com o seu caso
            </span>.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <GlassTagMini icon={Building2}>Direito Empresarial</GlassTagMini>
            <GlassTagMini icon={Scale}>Recuperação Judicial</GlassTagMini>
            <GlassTagMini icon={Receipt}>Direito Tributário</GlassTagMini>
          </div>
          <div>
            <PrimaryButtonLink href="/contato">Agendar Consulta</PrimaryButtonLink>
            <p className="font-label text-xs text-slate-500 mt-3">
              ou ligue agora:{" "}
              <a
                href={siteConfig.telefoneHref}
                className="text-slate-500 underline-offset-2 hover:text-slate-300 hover:underline"
              >
                {siteConfig.telefone}
              </a>
            </p>
          </div>
        </div>
        <div className="lg:col-span-5 flex justify-center lg:justify-center lg:pl-4 mt-10 lg:mt-0">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Foto principal */}
            <div className="relative aspect-[3/4] sm:aspect-square w-full scale-110 lg:scale-125 origin-center lg:-translate-x-12">
              <Image
                src="/images/hero/justica.png"
                alt="Themis — Deusa da Justiça"
                fill
                className="object-contain object-center"
                priority
                style={{
                  filter:
                    'drop-shadow(0 0 30px rgba(128,144,168,0.45)) drop-shadow(0 0 80px rgba(128,144,168,0.20))',
                }}
              />
            </div>

            {/* Badge flutuante — superior esquerdo */}
            <GvTilt className="absolute top-0 -left-6 sm:-left-12 lg:-left-20 bg-surface-dark border border-brand-steel/30 rounded-2xl px-4 py-3 shadow-glow backdrop-blur-md z-10">
              <p className="font-label text-[10px] uppercase tracking-widest text-brand-steel">Desde</p>
              <p className="font-display font-semibold text-2xl text-white leading-none">2004</p>
            </GvTilt>

            {/* Badge flutuante — inferior direito com stats */}
            <GvTilt className="absolute -bottom-8 sm:-bottom-12 -right-8 lg:-right-16 bg-surface-dark border border-brand-steel/20 rounded-2xl p-5 shadow-glow backdrop-blur-md z-10 max-w-[min(100%,320px)]">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-brand-steel shrink-0" strokeWidth={1.5} />
                <p className="font-display italic text-base text-white leading-tight">Assessoria de Confiança</p>
              </div>
              <div className="border-t border-slate-700/40 pt-4 grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="font-display font-semibold text-4xl text-white leading-none">20+</p>
                  <p className="font-label text-[10px] text-slate-400 uppercase tracking-wider mt-2">Anos</p>
                </div>
                <div>
                  <p className="font-display font-semibold text-4xl text-white leading-none">7</p>
                  <p className="font-label text-[10px] text-slate-400 uppercase tracking-wider mt-2">Áreas</p>
                </div>
              </div>
            </GvTilt>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
