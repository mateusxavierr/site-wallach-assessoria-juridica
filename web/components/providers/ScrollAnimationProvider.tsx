"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Reproduz os observers do design-system-wallach-v1.1.
 */
export function ScrollAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const mainOpts: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.15,
    };

    const onReveal = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    };

    const oMain = new IntersectionObserver(onReveal, mainOpts);
    const oWord = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".wallach-word").forEach((w) => {
              w.classList.add("is-visible");
            });
          }
        });
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
    );

    document
      .querySelectorAll(
        ".gv-animate-on-scroll, .gv-clip-on-scroll, .wallach-spacing, .wallach-fade-left, .wallach-fade-right, .wallach-underline-grow"
      )
      .forEach((el) => oMain.observe(el));

    document.querySelectorAll("h3, h4").forEach((el) => {
      if (el.querySelector(".wallach-word")) {
        oWord.observe(el);
      }
    });

    return () => {
      oMain.disconnect();
      oWord.disconnect();
    };
  }, [pathname]);

  return <>{children}</>;
}
