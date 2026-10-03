# Tharusha Tours Sri Lanka

A single-page, English-language tourism website built with Next.js App Router, TypeScript and Tailwind CSS. Visitors discuss airport transfers and private transport directly with Tharusha through WhatsApp or email.

## Local development

Use Node.js 22.13 or newer (a supported LTS version is recommended).

```sh
npm ci
npm run dev
```

Visit http://localhost:3000.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Folder structure

```text
src/
  app/                  # Page composition, global styles, metadata, robots and sitemap
  components/
    layout/             # Header, footer, floating contact
    sections/           # Independent page sections; only contact is interactive
    ui/                 # Shared headings and contact links
  content/site.ts       # Business details, navigation, destinations and FAQs
  lib/contact.ts        # Encoded WhatsApp and email URL helpers
public/
  images/               # Locally stored, optimised photography and supplied logo
docs/
  image-credits.md      # Photo sources and licence records
scripts/                # Asset preparation and browser smoke checks
resources/              # Original supplied business assets (preserved)
```

Most sections are server components. Only the mobile header and trip-message composer use client-side React. There is no database, tracking, account system or form submission endpoint. Composer details remain in browser memory until the visitor opens WhatsApp or email; the destination application sends the message.

## Content changes

Edit `src/content/site.ts` for contact details, destinations and FAQs. Driver copy and vehicle descriptions live in their section components. Use genuine driver and vehicle photos when they become available. Vehicle capacities, payment terms and reviews are deliberately omitted until confirmed.

## Before deploying

1. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the real HTTPS domain. This enables canonical URLs, the sitemap and the social preview image; no placeholder domain is published.
2. Confirm business copy and contact details with Tharusha.
3. Run lint, typecheck, build and the browser smoke check against a running site.
4. Import the repository into Vercel as a Next.js project, set the same environment variable, and connect the domain. Verify WhatsApp, email and navigation on the published site.

Images are local; no third-party image host is required at runtime. Sources and licences are documented in `docs/image-credits.md`.

## Dependency maintenance

The initial production dependency audit (`npm audit --omit=dev`) passed with zero known vulnerabilities. The full audit reports five high-severity entries stemming from the `braces` dependency used by the Next.js ESLint tooling. These are development-only; the audit did not offer a compatible patched upgrade at verification time. Review upstream updates before upgrading the lint configuration, rather than using a forced framework downgrade.

## Browser smoke check

Install Playwright as a development tool or use an existing installation. With the site running:

```sh
node scripts/smoke-check.mjs
```

If Playwright is supplied externally, set `PLAYWRIGHT_MODULE_PATH` to its absolute module entry. Set `CHROME_EXECUTABLE_PATH` when using a system Chromium browser instead of Playwright's bundled browser. Screenshots are saved under the ignored `.checks/` directory. The check never sends messages.
