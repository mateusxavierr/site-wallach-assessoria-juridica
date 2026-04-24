import type { Metadata } from "next";
import { SectionCard } from "@/components/ui/SectionCard";
import { ContatoForm } from "@/components/contato/ContatoForm";
import { InfoCard } from "@/components/contato/InfoCard";

export const metadata: Metadata = {
  title: "Contato | Wallach Assessoria Jurídica",
  description:
    "Entre em contato com a Wallach. Telefone (81) 3088-3317 · contato@wallach.adv.br · Recife, Pernambuco.",
};

export default function ContatoPage() {
  return (
    <>
      <SectionCard dark className="relative overflow-hidden">
        <div
          className="absolute right-[-1rem] top-1/2 -translate-y-1/2 select-none pointer-events-none"
          aria-hidden="true"
        >
          <span className="font-display leading-none text-white opacity-[0.05] text-[280px] md:text-[340px]">
            {"\u201C"}
          </span>
        </div>

        <div className="relative z-10">
          <p className="font-label text-xs uppercase tracking-widest text-brand-steel mb-4 gv-animate-on-scroll">
            Fale conosco
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6 gv-clip-on-scroll">
            Vamos resolver juntos.
          </h1>
          <p className="text-lg text-slate-300 font-body max-w-2xl gv-animate-on-scroll delay-200">
            O primeiro passo para resolver sua questão jurídica é uma conversa. Nossa
            equipe está pronta para ouvir seu caso e indicar o melhor caminho.
          </p>
        </div>
      </SectionCard>

      <SectionCard>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-navy mb-4 wallach-spacing">
              Envie sua mensagem
            </h2>
            <p className="text-slate-600 font-body mb-8">
              Preencha o formulário abaixo e retornaremos em até 24 horas úteis.
            </p>
            <ContatoForm />
          </div>
          <div className="lg:col-span-5">
            <InfoCard />
          </div>
        </div>
      </SectionCard>
    </>
  );
}
