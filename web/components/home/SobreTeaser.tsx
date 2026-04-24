import Image from "next/image";
import Link from "next/link";
import { SectionCard } from "@/components/ui/SectionCard";
import { GvTilt } from "@/components/ui/GvTilt";
import { assetPath } from "@/lib/basePath";

export function SobreTeaser() {
  return (
    <SectionCard>
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <GvTilt className="relative">
            <div
              className="relative aspect-[3/4] rounded-2xl overflow-hidden"
              style={{
                boxShadow:
                  "0 0 35px rgba(28,46,92,0.8), 0 10px 50px rgba(28,46,92,0.4)",
              }}
            >
              <Image
                src={assetPath("/images/team/armando-wallach.jpg")}
                alt="Armando Lemos Wallach"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
            <span className="absolute bottom-4 right-4 bg-brand-navy text-white font-label text-xs px-3 py-2 rounded-xl shadow-glow">
              Fundador · OAB/PE
            </span>
          </GvTilt>
        </div>
        <div className="lg:col-span-7 wallach-fade-right">
          <p className="font-label text-xs uppercase tracking-widest text-brand-navy wallach-underline-grow mb-4">
            Sobre a Wallach
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-brand-navy mb-6 wallach-spacing">
            20 anos construindo confiança.
          </h2>
          <p className="text-slate-700 font-body leading-relaxed mb-8">
            A Wallach Assessoria Jurídica foi fundada em 2004 em Recife por Armando
            Wallach com uma missão clara: oferecer assessoria jurídica de alto nível
            com o comprometimento e a atenção que todo cliente merece.
            <br />
            <br />
            Duas décadas depois, o escritório consolidou-se como referência no
            direito empresarial e em casos de recuperação judicial em Pernambuco.
          </p>
          <Link
            href="/sobre"
            className="font-label text-sm text-brand-navy hover:text-brand-steel uppercase tracking-widest inline-block"
          >
            Conheça nossa história →
          </Link>
        </div>
      </div>
    </SectionCard>
  );
}
