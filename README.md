# Portfolio

Personal portfolio built with React 19, Vite, Tailwind CSS v4 and shadcn/ui. It ships as a single page
(no sidebar, no auth) with a light/dark theme switch and English/Vietnamese translations, and is hosted on
Cloudflare Pages.

## Scripts

| Command           | What it does                                     |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start the dev server on http://localhost:3000    |
| `npm run build`   | Type-check and build into `dist/`                |
| `npm run preview` | Serve the production build locally               |
| `npm run verify`  | Type-check, lint and run the tests with coverage |

## Structure

- `src/modules/portfolio` – the portfolio page (overview, skills, projects and coding skills tabs).
- `src/locale/{common,portfolio,portfolio-content}` – `en` and `vi` translations.
- `src/_widgets` – the shadcn/ui primitives the page uses, imported through `@ui`.
- `showcase/` – hand-trimmed excerpts of the [FE-react-boilerplate](https://github.com/ngocle61/FE-react-boilerplate)
  that the coding skills tab shows as source code. Each file keeps only the technique its topic explains
  (no dialogs, layout or long import lists), so edit them by hand rather than copying from the boilerplate.
  They are loaded as raw text, never compiled, linted or tested.

## CI/CD and deploy

[`.github/workflows/ci.yml`](./.github/workflows/ci.yml) runs on pull requests into `main` and on pushes to
it: formatting, `npm run verify` and the production build.

The site runs as a Cloudflare Worker with static assets. The `portfolio` Worker is connected to this repo
(Workers Builds), so every push to `main` runs `npm run build` and `npx wrangler deploy`.
[`wrangler.jsonc`](./wrangler.jsonc) serves `dist/` and uses `single-page-application` not-found handling,
so shared links such as `/?tab=coding-skills&skill=...` open directly. `public/_headers` caches `/assets/*`
forever and `index.html` never.

The CI `deploy` job only sends a `POST` to a `DEPLOY_HOOK_URL` repository secret when one is set; without it
the job logs a notice.
