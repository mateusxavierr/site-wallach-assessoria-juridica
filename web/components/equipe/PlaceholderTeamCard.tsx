import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  label: string;
  index: number;
  foto: string;
  /** object-position for `object-cover` (e.g. `object-top` to keep head/hair in frame) */
  fotoObjectClassName?: string;
  delayClass?: string;
  cargo?: string;
  especialidade?: string;
};

export function PlaceholderTeamCard({
  label,
  index,
  foto,
  fotoObjectClassName = "object-center",
  delayClass = "",
  cargo = "Advogado Associado",
  especialidade,
}: Props) {
  return (
    <div
      className={cn(
        "group bg-surface-dark/30 border border-dashed border-slate-700/20 rounded-2xl overflow-hidden opacity-70 hover:opacity-90 hover:-translate-y-1 hover:border-brand-steel/30 hover:shadow-glow transition-all duration-500 gv-animate-on-scroll",
        delayClass
      )}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-800/40">
        <Image
          src={foto}
          alt={label}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className={cn(
            "object-cover transition-transform duration-700 group-hover:scale-[1.03]",
            fotoObjectClassName
          )}
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors duration-500" />
      </div>

      {/* PLACEHOLDER — substituir por advogado real */}
      <div className="px-5 py-4 text-center">
        <p className="font-display font-semibold text-lg text-slate-200 leading-snug">
          {label}
        </p>
        <p className="font-label text-[10px] uppercase tracking-widest text-slate-500 mt-1">
          {cargo}
        </p>
        {especialidade && (
          <span className="inline-block mt-3 bg-brand-navy/30 border border-slate-700/30 text-slate-400 font-label text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
            {especialidade}
          </span>
        )}
      </div>
    </div>
  );
}
