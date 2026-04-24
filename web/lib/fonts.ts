import { Cormorant, Inter, Lora } from "next/font/google";

/** Display: Cormorant (Google). DS nomeia “Cormorant Garant”; Cormorant compartilha a mesma família de estilo. */
export const fontDisplay = Cormorant({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const fontBody = Lora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const fontLabel = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-label",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
