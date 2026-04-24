import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  member: {
    id: string;
    nome: string;
    cargo: string;
    oab: string;
    foto: string;
    especialidade?: string;
  };
  delayClass?: string;
};

export function TeamCard({ member, delayClass = "" }: Props) {
  return (
    <div
      className={cn(
        "group bg-surface-dark/60 border border-slate-700/40 rounded-2xl overflow-hidden hover:border-brand-steel/40 hover:-translate-y-1 hover:shadow-glow transition-all duration-500 gv-animate-on-scroll",
        delayClass
      )}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={member.foto}
          alt={member.nome}
          fill
          className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors duration-500" />
      </div>

      <div className="px-5 py-4 text-center">
        <p className="font-display font-semibold text-lg text-white leading-snug">
          {member.nome}
        </p>
        <p className="font-label text-[10px] uppercase tracking-widest text-brand-steel mt-1">
          {member.cargo}
        </p>
        {member.especialidade && (
          <span className="inline-block mt-3 bg-brand-navy/60 border border-brand-steel/20 text-brand-steel font-label text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
            {member.especialidade}
          </span>
        )}
        <p className="font-label text-[10px] text-slate-600 mt-2">{member.oab}</p>
      </div>
    </div>
  );
}
