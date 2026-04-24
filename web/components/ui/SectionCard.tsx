import { cn } from "@/lib/cn";

export function SectionCard({
  children,
  dark,
  className,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <section
      className={cn("section-card p-8 md:p-16 lg:p-24", dark && "dark", className)}
    >
      {children}
    </section>
  );
}
