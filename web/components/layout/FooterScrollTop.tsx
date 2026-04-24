"use client";

export function FooterScrollTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="font-label text-xs text-brand-steel hover:text-white transition-colors"
    >
      ↑ Topo
    </button>
  );
}
