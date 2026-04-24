import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Tag estilo glass (mini) do Hero — sem link; somente o visual do DS.
 */
export function GlassTagMini({
  icon: Icon,
  children,
  className,
}: {
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative inline-block overflow-hidden rounded-full p-[1.5px] max-w-full",
        className
      )}
    >
      <div
        className="absolute inset-[-100%] w-[300%] h-[300%] animate-[spin_4s_linear_infinite] opacity-80"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, transparent 80deg, rgba(128,144,168,0.7) 180deg, transparent 280deg, transparent 360deg)",
        }}
      />
      <div className="absolute inset-[1.5px] bg-surface-dark/90 rounded-full backdrop-blur-md" />
      <div className="relative z-10 flex items-center gap-2 text-white text-xs font-semibold font-label px-4 py-2">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-navy to-brand-darkbg flex items-center justify-center shadow-inner shrink-0">
          <Icon className="w-2.5 h-2.5 text-brand-steel" strokeWidth={1.5} />
        </div>
        {children}
      </div>
    </div>
  );
}
