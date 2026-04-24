import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  step: string;
  title: string;
  description: string;
  active?: boolean;
  icon: LucideIcon;
  /** Fundo claro (section-card sem dark) */
  light?: boolean;
};

export function StepItem({
  step,
  title,
  description,
  active,
  icon: Icon,
  light,
}: Props) {
  const I = Icon;
  if (active) {
    if (light) {
      return (
        <div className="flex items-center gap-4 rounded-xl p-4 border border-brand-steel/30 bg-white/80 -translate-x-2 transition-transform shadow-sm">
          <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xs shadow-glow font-label shrink-0">
            {step}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-brand-navy font-body">{title}</p>
            <p className="text-xs text-slate-600 font-body mt-0.5">{description}</p>
          </div>
          <I
            className={cn("w-5 h-5 shrink-0 text-brand-steel")}
            strokeWidth={1.5}
          />
        </div>
      );
    }
    return (
      <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4 shadow-xl backdrop-blur-md border border-brand-steel/30 -translate-x-2 transition-transform">
        <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xs shadow-glow font-label shrink-0">
          {step}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white font-body">{title}</p>
          <p className="text-xs text-slate-400 font-body mt-0.5">{description}</p>
        </div>
        <I
          className={cn("w-5 h-5 shrink-0", "text-white")}
          strokeWidth={1.5}
        />
      </div>
    );
  }
  if (light) {
    return (
      <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 group transition-colors border border-transparent hover:border-slate-200">
        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs group-hover:bg-brand-steel/20 group-hover:text-brand-steel transition-colors font-label">
          {step}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors font-body">
            {title}
          </p>
          <p className="text-xs text-slate-500 group-hover:text-slate-700 transition-colors font-body mt-0.5">
            {description}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 group transition-colors cursor-pointer border border-transparent hover:border-white/10">
      <div className="w-8 h-8 rounded-full bg-white/10 text-slate-500 flex items-center justify-center font-bold text-xs group-hover:bg-brand-steel/20 group-hover:text-brand-steel transition-colors font-label">
        {step}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-slate-500 group-hover:text-white transition-colors font-body">
          {title}
        </p>
        <p className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors font-body mt-0.5">
          {description}
        </p>
      </div>
    </div>
  );
}
