import { Star } from "lucide-react";
import { SectionCard } from "@/components/ui/SectionCard";
import { depoimentos } from "@/lib/content/site";

export function Depoimentos() {
  return (
    <SectionCard dark>
      <p className="font-label text-xs uppercase tracking-widest text-brand-steel mb-4 gv-animate-on-scroll">
        O que dizem sobre a Wallach
      </p>
      <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-12 wallach-spacing">
        Clientes que confiam em nós.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {depoimentos.map((d, i) => (
          <div
            key={d.id}
            className="h-full min-h-0"
          >
            {/* PLACEHOLDER — substituir por depoimento real */}
            <div
              className={`flex h-full min-h-0 flex-col bg-surface-glass border border-white/10 rounded-2xl p-8 backdrop-blur-sm gv-animate-on-scroll ${
                i === 0 ? "delay-100" : i === 1 ? "delay-200" : "delay-350"
              }`}
            >
              <div className="mb-4 flex shrink-0 gap-1">
                {Array.from({ length: d.estrelas }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 text-brand-steel fill-brand-steel"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <p className="mb-0 min-h-0 flex-1 text-sm text-slate-300 italic font-body leading-relaxed">
                &ldquo;{d.texto}&rdquo;
              </p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm font-semibold text-white font-body">{d.nome}</p>
                <p className="mt-1 text-xs text-slate-400 font-label uppercase tracking-wider">
                  {d.cargo}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
