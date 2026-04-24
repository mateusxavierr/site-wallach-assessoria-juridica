# Wallach — site (Next.js)

`output: "export"`: o build gera a pasta `out/` com HTML estático (GitHub Pages, qualquer host estático).

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build e pré-visualização local

```bash
npm run build
npm run preview
```

Abre [http://localhost:3000](http://localhost:3000) com a pasta `out/`.

## GitHub Project Pages (subcaminho)

O site fica em `https://<user>.github.io/<repo>/`. No build, defina (o workflow de CI já faz isso):

- `NEXT_PUBLIC_BASE_PATH=/<nome-do-repositório>`
- `NEXT_PUBLIC_SITE_URL=https://<user>.github.io/<repo>`

`npm run dev` local: **não** defina `BASE_PATH` (o site fica na raiz em `localhost:3000`).

## Formulário de contato (sem backend)

- Com **`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`** (grátis em [web3forms.com](https://web3forms.com)): envio via `fetch` no browser.
- **Sem** a chave: o botão abre o cliente de e-mail com `mailto:` e a mensagem preenchida.

## Variáveis

Ver `.env.local.example`.
