import { Hero } from "@/components/home/Hero";
import { Numeros } from "@/components/home/Numeros";
import { AreasDestaque } from "@/components/home/AreasDestaque";
import { PorQueWallach } from "@/components/home/PorQueWallach";
import { Depoimentos } from "@/components/home/Depoimentos";
import { SobreTeaser } from "@/components/home/SobreTeaser";
import { CtaFinal } from "@/components/home/CtaFinal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wallach Assessoria Jurídica | Recife, PE",
  description:
    "Assessoria jurídica em Recife desde 2004. Especialistas em recuperação judicial, direito empresarial e tributário. Fale com nossa equipe.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Numeros />
      <AreasDestaque />
      <PorQueWallach />
      <Depoimentos />
      <SobreTeaser />
      <CtaFinal />
    </>
  );
}
