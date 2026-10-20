# CabinView landing

CabinView’s public product website, hosted at **https://cabinview.kodlabs.in** on Cloudflare Workers Static Assets.

Plain HTML and CSS. No framework, dependencies, browser JavaScript, tracking, contact form, or package installation. The contact address is **contact@kodlabs.in**.

## Pages

- `/` — app overview, real app screenshot, features, and common questions
- `/privacy` — app, website, and support privacy policy
- `/contact` — support email and troubleshooting
- `/terms` — terms and conditions
- Unmatched paths return a custom HTTP 404 page.

## Preview

Serve `public/` with any static server, for example:

```sh
python3 -m http.server 4173 --directory public
```

Open http://localhost:4173. A basic local server uses `/privacy.html`, `/contact.html`, and `/terms.html`; Cloudflare serves the extensionless production links.

## Deploy

Requires Node.js 22.18+ and an already installed, authenticated `cf` CLI. This project was deployed with `cf` 1.0.0-beta.19. Select the intended Cloudflare account before deploying.

```sh
node prepare.mjs
cf deploy --prebuilt --dry-run
cf deploy --prebuilt
```

`prepare.mjs` copies `public/` and the configuration into cf’s v0 Build Output format. It installs nothing. `--prebuilt` prevents cf from automatically adding build dependencies. Generated output is ignored by Git.

`cloudflare.config.ts` declares the Worker, custom domain, clean HTML URLs, and 404 behavior. Only `public/` is uploaded. Cloudflare manages the domain’s DNS and HTTPS certificate.

## Content and privacy

App claims reflect the native CabinView implementation. Browsing happens on iPhone; CarPlay provides a menu and system playback controls. No App Store availability is asserted. The site uses the app’s existing icon and screenshot.

`public/_headers` supplies a Content Security Policy and browser security headers. No external fonts, scripts, or image requests are needed to render the site. Cloudflare still processes requests to deliver and protect the website, as described in the privacy policy.

## Complexity

No client-side functions exist. `prepare.mjs` uses straight-line file operations with zero decisions (module CC 1, manually counted). No refactoring or function extraction was needed. Automated test files were intentionally omitted; deployment validation and browser checks are run directly.
