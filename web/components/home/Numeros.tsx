import { SectionCard } from "@/components/ui/SectionCard";

const items = [
  {
    n: "20+",
    label: "Anos de Experiência",
    sub: "Desde 2004 ao lado de clientes em Recife e todo o nordeste",
  },
  {
    n: "7",
    label: "Áreas de Atuação",
    sub: "Cobertura completa para pessoas físicas e jurídicas",
  },
  {
    n: "100%",
    label: "Foco no seu Resultado",
    sub: "Estratégias orientadas ao resultado que você precisa",
  },
];

export function Numeros() {
  return (
    <SectionCard className="bg-surface-card">
      <p className="font-label text-xs uppercase tracking-widest text-brand-steel mb-10 text-center gv-animate-on-scroll">
        Wallach em números
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x divide-slate-200 text-center">
        {items.map((it, i) => (
          <div
            key={it.label}
            className={`gv-animate-on-scroll flex flex-col items-center px-4 md:px-8 ${
              i === 0 ? "delay-100" : i === 1 ? "delay-200" : "delay-350"
            }`}
          >
            <p className="font-display font-semibold text-6xl text-brand-navy">{it.n}</p>
            <p className="font-label text-xs uppercase tracking-widest text-brand-steel mt-3">
              {it.label}
            </p>
            <p className="font-body text-sm text-slate-500 mt-2 max-w-[220px]">
              {it.sub}
            </p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
