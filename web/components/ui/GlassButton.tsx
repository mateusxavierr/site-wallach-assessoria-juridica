import Link, { type LinkProps } from "next/link";
import { Shield, Phone, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Mini: px-4 py-2 text-xs (tags Hero) */
  size?: "default" | "mini";
  icon?: LucideIcon;
} & LinkProps;

export function GlassButton({
  children,
  className,
  size = "default",
  icon: Icon = Shield,
  href,
  ...linkProps
}: Props) {
  return (
    <div
      className={cn("relative inline-block overflow-hidden rounded-full p-[1.5px] group", className)}
    >
      <div
        className="absolute inset-[-100%] w-[300%] h-[300%] animate-[spin_4s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, transparent 80deg, rgba(128,144,168,0.9) 180deg, transparent 280deg, transparent 360deg)",
        }}
      />
      <div className="absolute inset-[1.5px] bg-surface-dark rounded-full backdrop-blur-xl group-hover:bg-surface-dark/90 transition-colors" />
      <Link
        href={href}
        className={cn(
          "relative z-10 flex items-center gap-3 text-white font-semibold group-hover:scale-[1.02] transition-transform font-label",
          size === "mini" ? "px-4 py-2 text-xs" : "px-6 py-3 text-sm"
        )}
        {...linkProps}
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-navy to-brand-darkbg flex items-center justify-center shadow-inner shrink-0">
          <Icon className="w-3 h-3 text-brand-steel" strokeWidth={1.5} />
        </div>
        {children}
      </Link>
    </div>
  );
}

export function GlassButtonPhone(props: Omit<Props, "icon">) {
  return <GlassButton icon={Phone} {...props} />;
}
