# Wallach Assessoria Jurídica — site

Site institucional (Next.js) em [`web/`](./web/). O build é **estático** (`out/`), pronto para **GitHub Pages** ou outro hosting estático.

## Desenvolvimento

```bash
cd web && npm install && npm run dev
```

## Build (export estático)

```bash
cd web && npm run build && npm run preview
```

## GitHub Pages

1. **Settings** → **Pages** → **Build and deployment** → **Source: GitHub Actions**.  
2. Com push na `main`, o workflow [`.github/workflows/deploy-github-pages.yml`](./.github/workflows/deploy-github-pages.yml) faz build em `web/` e publica `out/`.  
3. O site: `https://<seu-user>.github.io/site-wallach-assessoria-juridica/`

Domínio próprio: definir e ajustar `NEXT_PUBLIC_SITE_URL` / `NEXT_PUBLIC_BASE_PATH` conforme a doc do Pages.
