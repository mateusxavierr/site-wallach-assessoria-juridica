import type { AreaItem, AreaIconName } from "@/lib/content/site";
import {
  Briefcase,
  Building2,
  FileText,
  Heart,
  Home,
  Receipt,
  RefreshCw,
  Tag,
  type LucideIcon,
} from "lucide-react";
import { GlassTagMini } from "@/components/ui/GlassTagMini";

const icons: Record<AreaIconName, LucideIcon> = {
  RefreshCw,
  Building2,
  Receipt,
  FileText,
  Briefcase,
  Home,
  Heart,
};

export function AreaCard({ area }: { area: AreaItem }) {
  const Icon = icons[area.icone] ?? FileText;
  return (
    <div
      id={area.id}
      className="relative flex h-full min-h-0 flex-col bg-white rounded-2xl p-8 shadow-card hover:shadow-cardhover
        border border-slate-100 hover:border-brand-steel/20 hover:-translate-y-1
        transition-all duration-500 group overflow-hidden scroll-mt-24"
    >
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0
          group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(28,46,92,0.06) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r
          from-transparent via-brand-steel to-transparent
          scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
      />

      <div
        className="relative z-[1] mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-navy/5
          group-hover:scale-110 group-hover:bg-brand-navy group-hover:shadow-glow
          transition-all duration-500"
      >
        <Icon
          className="text-brand-navy w-7 h-7 group-hover:text-white transition-colors duration-300"
          strokeWidth={1.5}
        />
      </div>

      <h3
        className="relative z-[1] mb-3 shrink-0 font-display text-2xl font-semibold text-slate-900
        group-hover:text-brand-navy transition-colors duration-300"
      >
        {area.titulo}
      </h3>

      <p
        className="relative z-[1] mb-0 min-h-0 flex-1 font-body text-sm text-slate-600 leading-relaxed
        group-hover:text-slate-700 transition-colors duration-300"
      >
        {area.descricao}
      </p>

      <div className="relative z-[1] mt-auto pt-6">
        <GlassTagMini icon={Tag} className="inline-block max-w-full">
          {area.tag}
        </GlassTagMini>
      </div>
    </div>
  );
}
