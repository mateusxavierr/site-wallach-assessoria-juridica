import {
  Award,
  CheckCircle2,
  Target,
  Users,
} from "lucide-react";
import { SectionCard } from "@/components/ui/SectionCard";
import { StepItem } from "@/components/ui/StepItem";

export function PorQueWallach() {
  return (
    <SectionCard>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="wallach-fade-left">
          <p className="font-label text-xs uppercase tracking-widest text-brand-navy wallach-underline-grow mb-4">
            Por que nos escolher
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-brand-navy mb-6 wallach-spacing">
            Mais de duas décadas ao seu lado.
          </h2>
          <p className="text-slate-600 font-body leading-relaxed text-base">
            A Wallach não é um escritório de massa. Cada caso é tratado com
            atenção individual, estratégia própria e comunicação direta com o
            advogado responsável pelo seu processo.
            <br />
            <br />
            Quando você escolhe a Wallach, escolhe uma equipe que entende o que
            está em jogo — e trabalha para que o resultado seja o melhor possível.
          </p>
        </div>
        <div className="wallach-fade-right space-y-3">
          <StepItem
            light
            active
            step="01"
            title="Experiência comprovada"
            description="Mais de 20 anos resolvendo casos complexos em Recife e no nordeste."
            icon={Award}
          />
          <StepItem
            light
            step="02"
            title="Equipe especializada"
            description="Advogados com formação sólida e atuação dedicada em cada área do direito."
            icon={Users}
          />
          <StepItem
            light
            step="03"
            title="Estratégia personalizada"
            description="Nenhum caso é igual. A solução para o seu é construída sob medida."
            icon={Target}
          />
          <StepItem
            light
            step="04"
            title="Resultado como prioridade"
            description="Atuamos com foco claro no que importa: o melhor desfecho para você."
            icon={CheckCircle2}
          />
        </div>
      </div>
    </SectionCard>
  );
}
