/**
 * Prefixo para ficheiros em `public/` quando o site usa subcaminho (ex.: GitHub Project Pages).
 * O export estático não aplica `basePath` ao `src` de `next/image` — usar sempre aqui.
 */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normal = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${normal}` : normal;
}
