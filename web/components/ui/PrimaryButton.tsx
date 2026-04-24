import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

const btnClass =
  "gv-btn-primary inline-flex items-center justify-center gap-2 bg-brand-navy text-white px-8 py-4 rounded-full text-sm font-semibold shadow-glow hover:scale-105 transition-transform duration-300 group font-label";

const particles = [
  { left: "15%", d: 1.8, ad: 0.2 },
  { left: "35%", d: 2.2, ad: 0.5 },
  { left: "60%", d: 2.0, ad: 0.1 },
  { left: "85%", d: 2.5, ad: 0.4 },
];

function Inner({
  children,
  withArrow,
}: {
  children: React.ReactNode;
  withArrow: boolean;
}) {
  return (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {withArrow && (
          <ArrowRight
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            strokeWidth={1.5}
          />
        )}
      </span>
      {particles.map((p, i) => (
        <span
          key={i}
          className="gv-particle"
          style={{
            left: p.left,
            animationDuration: `${p.d}s`,
            animationDelay: `${p.ad}s`,
          }}
        />
      ))}
    </>
  );
}

export function PrimaryButtonLink({
  href,
  children,
  className,
  withArrow = true,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  withArrow?: boolean;
}) {
  return (
    <Link href={href} className={cn(btnClass, className)}>
      <Inner withArrow={withArrow}>{children}</Inner>
    </Link>
  );
}

export function PrimaryButtonSubmit({
  children,
  className,
  withArrow = true,
  disabled,
  type = "submit",
}: {
  children: React.ReactNode;
  className?: string;
  withArrow?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        btnClass,
        disabled && "opacity-70 cursor-wait",
        className
      )}
    >
      <Inner withArrow={withArrow}>{children}</Inner>
    </button>
  );
}
