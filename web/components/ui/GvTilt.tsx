"use client";

import { useRef, type ReactNode, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Props = HTMLAttributes<HTMLDivElement> & { children: ReactNode };

/**
 * Efeito 3D do DS — classe `hover-tilt-3d`.
 */
export function GvTilt({ className, children, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={cn("hover-tilt-3d", className)}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `perspective(800px) rotateY(${
          x * 10
        }deg) rotateX(${-y * 10}deg) translateZ(10px)`;
      }}
      onMouseLeave={() => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = "perspective(800px) rotateY(0) rotateX(0) translateZ(0)";
      }}
      style={{ transformStyle: "preserve-3d" }}
      {...rest}
    >
      {children}
    </div>
  );
}
