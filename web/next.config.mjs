/** @satisfies {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  /** Compatível com GitHub Pages (pastas com index.html) */
  trailingSlash: true,
  /** GitHub Project Pages: NEXT_PUBLIC_BASE_PATH=/nome-do-repo (ex: /site-wallach-assessoria-juridica) */
  ...(process.env.NEXT_PUBLIC_BASE_PATH
    ? { basePath: process.env.NEXT_PUBLIC_BASE_PATH }
    : {}),
};

export default nextConfig;
