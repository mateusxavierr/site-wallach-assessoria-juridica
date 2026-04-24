import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/content/site";

export function InfoCard() {
  return (
    <aside className="bg-brand-navy rounded-2xl p-8 shadow-glow h-fit lg:sticky lg:top-28">
      <p className="font-display italic text-xl text-white mb-6">
        Prefere ligar? Estamos disponíveis.
      </p>
      <div className="space-y-6">
        <a
          href={siteConfig.telefoneHref}
          className="block group border-b border-white/15 pb-5"
        >
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-brand-steel shrink-0" strokeWidth={1.5} />
            <div>
              <p className="font-label text-[10px] uppercase tracking-widest text-brand-steeldark">
                Telefone
              </p>
              <p className="font-display font-semibold text-2xl text-white group-hover:text-brand-steellight transition-colors">
                {siteConfig.telefone}
              </p>
              <p className="font-body text-xs text-brand-steellight mt-0.5">
                Ligue agora e fale com nossa equipe
              </p>
            </div>
          </div>
        </a>
        <a href={siteConfig.emailHref} className="block group">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-brand-steel shrink-0" strokeWidth={1.5} />
            <div>
              <p className="font-label text-[10px] uppercase tracking-widest text-brand-steeldark">
                E-mail
              </p>
              <p className="font-label text-sm text-white group-hover:underline">
                {siteConfig.email}
              </p>
              <p className="font-body text-xs text-brand-steellight">
                Resposta em até 24 horas úteis
              </p>
            </div>
          </div>
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/15 pt-5">
          <div className="flex items-start gap-2">
            <MapPin className="w-5 h-5 text-brand-steel shrink-0" strokeWidth={1.5} />
            <div>
              <p className="font-label text-[10px] uppercase text-brand-steeldark">
                Localização
              </p>
              <p className="text-sm text-white font-body">Recife, Pernambuco</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Clock className="w-5 h-5 text-brand-steel shrink-0" strokeWidth={1.5} />
            <div>
              <p className="font-label text-[10px] uppercase text-brand-steeldark">
                Horário
              </p>
              <p className="text-sm text-white font-body">Seg–Sex · 8h às 18h</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
