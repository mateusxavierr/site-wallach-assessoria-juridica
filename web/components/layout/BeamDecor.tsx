import { cn } from "@/lib/cn";

export function BeamDecor({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <div className="gv-beam gv-beam-1" style={{ left: "8%" }} />
      <div className="gv-beam gv-beam-2" style={{ right: "8%" }} />
    </div>
  );
}
