import Link from "next/link";
import Image from "next/image";
import { siteConfig, navLinks } from "@/lib/content/site";
import { cn } from "@/lib/cn";
import { FooterScrollTop } from "@/components/layout/FooterScrollTop";

export function Footer() {
  return (
    <footer>
      <div className="section-card dark p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="max-w-sm">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/logo/wallach-logo-transparent.png"
                alt={siteConfig.nome}
                width={300}
                height={300}
                className="h-20 sm:h-28 w-auto object-contain brightness-0 invert scale-110"
              />
            </div>
            <p className="text-sm text-slate-400 font-body text-left">
              Fundada em {siteConfig.fundacao}, em {siteConfig.cidade}, com o
              compromisso de oferecer assessoria jurídica de excelência para pessoas
              e empresas.
            </p>
          </div>
          <div>
            <p className="font-label text-xs uppercase tracking-widest text-brand-steel mb-4">
              Navegação
            </p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-300 hover:text-white font-body transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contato"
                  className="text-sm text-slate-300 hover:text-white font-body transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-label text-xs uppercase tracking-widest text-brand-steel mb-4">
              Contato
            </p>
            <a
              href={siteConfig.telefoneHref}
              className="block text-white font-body text-sm mb-1 hover:text-brand-steellight"
            >
              {siteConfig.telefone}
            </a>
            <a
              href={siteConfig.emailHref}
              className="block text-slate-300 font-body text-sm mb-2 hover:text-white"
            >
              {siteConfig.email}
            </a>
            <p className="text-sm text-slate-400 font-body">
              {siteConfig.cidade} — {siteConfig.estado}
            </p>
          </div>
        </div>
        <div
          className={cn(
            "mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 max-w-6xl mx-auto"
          )}
        >
          <p className="text-xs text-slate-500 font-body text-center sm:text-left">
            © 2024 {siteConfig.nome}. OAB/PE.
          </p>
          <FooterScrollTop />
        </div>
      </div>
    </footer>
  );
}
