import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/content/site";

export function FloatingPhoneButton() {
  return (
    <Link
      href={siteConfig.telefoneHref}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand-navy rounded-full flex items-center justify-center text-white shadow-glow ring-1 ring-white/20 hover:bg-brand-navyhover hover:ring-white/40 hover:scale-110 transition-all duration-300"
      title="Ligar para a Wallach"
    >
      <Phone className="w-6 h-6" strokeWidth={1.5} />
    </Link>
  );
}
