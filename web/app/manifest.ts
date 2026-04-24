import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wallach Assessoria Jurídica",
    short_name: "Wallach",
    description:
      "Assessoria jurídica em Recife. Recuperação judicial, direito empresarial e tributário.",
    start_url: base ? `${base}/` : "/",
    display: "standalone",
    background_color: "#0f1e35",
    theme_color: "#1C2E5C",
    icons: [
      {
        src: `${base}/images/logo/wallach-logo.png`,
        sizes: "200x200",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
