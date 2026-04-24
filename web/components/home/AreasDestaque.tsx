import Link from "next/link";
import {
  Building2,
  Receipt,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { SectionCard } from "@/components/ui/SectionCard";
import { areas } from "@/lib/content/site";

const iconMap: Record<string, LucideIcon> = {
  RefreshCw,
  Building2,
  Receipt,
};

export function AreasDestaque() {
  const destaques = areas.filter((a) => a.destaque);
  return (
    <SectionCard dark>
      <p className="font-label text-xs uppercase tracking-widest text-brand-steel mb-4 gv-animate-on-scroll">
        Expertise jurídica
      </p>
      <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-4 wallach-spacing">
        Expertise que resolve.
      </h2>
      <p className="text-slate-300 font-body max-w-2xl mb-12 gv-animate-on-scroll delay-100">
        Atuamos nas principais frentes do direito, com equipe especializada e
        estratégia personalizada para cada caso.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {destaques.map((a, i) => {
          const Icon = iconMap[a.icone] ?? Building2;
          return (
            <div
              key={a.id}
              className={`relative flex h-full min-h-0 flex-col bg-surface-dark/60 border border-slate-700/40 rounded-2xl p-8
    hover:border-brand-steel/40 hover:shadow-glow hover:-translate-y-1
    transition-all duration-500 group overflow-hidden gv-animate-on-scroll ${
    i === 0 ? "delay-100" : i === 1 ? "delay-200" : "delay-350"
  }`}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(128,144,168,0.06) 0%, transparent 60%)",
                }}
              />

              <div className="w-12 h-12 rounded-xl bg-brand-navy/50 flex items-center justify-center mb-6
    group-hover:bg-brand-navy group-hover:scale-110 group-hover:shadow-glow
    transition-all duration-500 relative z-[1]">
                <Icon
                  className="w-6 h-6 text-brand-steel group-hover:text-brand-steellight transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>

              <h3
                className="font-display font-semibold text-2xl text-white mb-3
    group-hover:text-brand-steellight transition-colors duration-300 relative z-[1]"
              >
                {a.titulo}
              </h3>

              <p
                className="mb-0 flex-1 font-body text-sm text-slate-400 leading-relaxed
    group-hover:text-slate-300 transition-colors duration-300 relative z-[1] min-h-0"
              >
                {a.descricao}
              </p>

              <Link
                href={`/areas#${a.id}`}
                className="mt-auto pt-6 font-label text-xs text-brand-steel hover:text-brand-steellight
      tracking-widest uppercase inline-flex items-center gap-2
      group/link transition-colors duration-300 relative z-[1]"
              >
                Saiba mais
                <span className="translate-x-0 group-hover/link:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>
          );
        })}
      </div>
      <Link
        href="/areas"
        className="font-label text-sm text-brand-steel hover:text-steellight tracking-widest uppercase mt-12 block text-center"
      >
        Ver todas as áreas de atuação →
      </Link>
    </SectionCard>
  );
}
