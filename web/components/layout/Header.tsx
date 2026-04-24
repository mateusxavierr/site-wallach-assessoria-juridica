"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { siteConfig, navLinks } from "@/lib/content/site";
import { GlassButtonPhone } from "@/components/ui/GlassButton";

function NavLinks({
  onNavigate,
  mobile,
}: {
  onNavigate?: () => void;
  mobile?: boolean;
}) {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "flex",
        mobile ? "flex-col gap-6" : "items-center gap-6 mx-0 lg:gap-8"
      )}
    >
      {navLinks.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "font-label text-xs uppercase tracking-widest transition-colors",
              mobile && "wallach-fade-left",
              active
                ? "text-brand-steel"
                : "text-slate-300 hover:text-white"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={cn(
            "pointer-events-auto w-full lg:w-fit lg:max-w-none",
            "bg-brand-darkbg/90 backdrop-blur-md border border-white/10 rounded-full",
            "py-2 px-3 flex items-center gap-4 sm:gap-6 text-sm shadow-xl",
            "lg:py-3.5 lg:px-6 lg:gap-0",
            "min-h-[3rem] lg:min-h-[4.25rem] justify-between lg:justify-start"
          )}
        >
          {/* Mobile: grid — logo (centrada) | Contato | menu (centrado), áreas 11×11 iguais */}
          <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3 lg:hidden">
            <div className="flex min-w-0 items-center justify-center">
              <Link
                href="/"
                className="relative flex size-11 shrink-0 items-center justify-center"
                onClick={() => setOpen(false)}
              >
                <Image
                  src="/images/logo/wallach-logo-transparent.png"
                  alt={siteConfig.nome}
                  fill
                  className="object-contain p-0.5 brightness-0 invert"
                  sizes="44px"
                  priority
                />
              </Link>
            </div>
            <div className="flex min-w-0 items-center justify-center">
              <GlassButtonPhone href="/contato" onClick={() => setOpen(false)}>
                Contato
              </GlassButtonPhone>
            </div>
            <div className="flex min-w-0 items-center justify-center">
              <button
                type="button"
                className="flex size-11 items-center justify-center text-white"
                onClick={() => setOpen((o) => !o)}
                aria-label={open ? "Fechar menu" : "Abrir menu"}
              >
                {open ? (
                  <X className="h-6 w-6" strokeWidth={1.5} />
                ) : (
                  <Menu className="h-6 w-6" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>

          {/* Desktop: logo + respiro + nav */}
          <div className="hidden lg:flex min-w-0 max-w-full items-center">
            <Link
              href="/"
              className="flex items-center justify-center h-10 shrink-0 pl-0.5 pr-3"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/images/logo/wallach-logo-transparent.png"
                alt={siteConfig.nome}
                width={200}
                height={200}
                className="h-11 w-auto max-w-[9.5rem] object-contain object-left brightness-0 invert origin-left scale-100"
                priority
              />
            </Link>
            <div className="ml-2 flex min-h-0 min-w-0 flex-1 items-center justify-end gap-7 pl-2">
              <NavLinks />
              <GlassButtonPhone href="/contato" className="shrink-0">
                Contato
              </GlassButtonPhone>
            </div>
          </div>
        </nav>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 z-40 bg-brand-darkbg flex flex-col pt-20 wallach-slide-up min-h-0">
          <div className="flex-1 flex flex-col justify-center min-h-0 overflow-y-auto">
            <nav className="flex flex-col w-full max-w-2xl mx-auto px-6">
              {navLinks.map((item, i) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between py-5 border-b border-white/10 transition-colors duration-200",
                      "font-display font-semibold text-4xl wallach-fade-in-up",
                      active
                        ? "text-brand-steel"
                        : "text-white hover:text-brand-steel"
                    )}
                    style={{ animationDelay: `${i * 80 + 150}ms` }}
                  >
                    <span>{item.label}</span>
                    <span className="font-label text-xs text-slate-600 tracking-widest mt-2">
                      0{i + 1}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div
            className="shrink-0 px-6 py-8 border-t border-white/10 space-y-3 wallach-fade-in-up"
            style={{ animationDelay: "500ms" }}
          >
            <div className="flex justify-center">
              <GlassButtonPhone
                href="/contato"
                onClick={() => setOpen(false)}
              >
                Falar com a Equipe
              </GlassButtonPhone>
            </div>
            <p className="font-label text-xs text-slate-600 tracking-widest text-center">
              <a
                href={siteConfig.telefoneHref}
                className="text-slate-600 hover:text-slate-400"
              >
                {siteConfig.telefone}
              </a>
              {" · Recife, PE"}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
