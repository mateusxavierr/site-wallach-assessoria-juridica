import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontBody, fontDisplay, fontLabel } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingPhoneButton } from "@/components/layout/FloatingPhoneButton";
import { ScrollAnimationProvider } from "@/components/providers/ScrollAnimationProvider";
import { Toaster } from "sonner";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.wallach.adv.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Wallach Assessoria Jurídica | Recife, PE",
  description:
    "Assessoria jurídica em Recife desde 2004. Especialistas em recuperação judicial, direito empresarial e tributário. Fale com nossa equipe.",
  applicationName: "Wallach",
  category: "legal services",
  appleWebApp: {
    title: "Wallach",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Wallach Assessoria Jurídica",
    title: "Wallach Assessoria Jurídica | Recife, PE",
    description:
      "Assessoria jurídica em Recife desde 2004. Especialistas em recuperação judicial, direito empresarial e tributário.",
    images: [
      {
        url: "/images/logo/wallach-logo.png",
        width: 200,
        height: 200,
        alt: "Wallach Assessoria Jurídica",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Wallach Assessoria Jurídica | Recife, PE",
    description:
      "Assessoria jurídica em Recife desde 2004. Recuperação judicial, direito empresarial e tributário.",
    images: ["/images/logo/wallach-logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1C2E5C" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1e35" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontLabel.variable} scroll-smooth`}
    >
      <body
        className="min-h-screen antialiased selection:bg-brand-steel/30 selection:text-brand-navy pt-24 lg:pt-40"
        style={{
          backgroundColor: "var(--navy-bg)",
        }}
      >
        <ScrollAnimationProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingPhoneButton />
        </ScrollAnimationProvider>
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
