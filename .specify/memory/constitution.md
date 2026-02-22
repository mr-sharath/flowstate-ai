---
description: Project constitution for a static web application
---

# Project Constitution – Static Web App

## 1. Purpose

- **Goal**  
  Deliver a static web application that can be built and served as plain HTML/CSS/JS (or a static-site framework that outputs the same), without requiring a custom backend at runtime.

- **Primary Outcomes**  
  - A fast, reliable, easily deployable static website.
  - Simple, reproducible build and deploy process.
  - Minimal but clear structure for future extension.

---

## 2. Scope & Non‑Goals

- **In Scope**
  - Static pages (HTML) styled with CSS.
  - Client-side interactivity using JavaScript.
  - Optional use of a static-site generator (e.g. Next.js static export, Astro, etc.) as long as the output is static assets.
  - Basic SEO (title, meta tags, open graph where relevant).
  - Responsive layout for mobile and desktop.

- **Out of Scope (for now)**
  - Custom server-side APIs or databases.
  - User authentication and authorization.
  - Real-time features (websockets, push, etc.).
  - Complex CI/CD beyond a simple static deploy.

---

## 3. Architecture & Technology

- **Runtime Characteristics**
  - App must run fully from compiled static assets:
    - `index.html` (and additional HTML pages if needed).
    - Bundled `*.js` and `*.css` files.
    - Static assets (images, fonts, icons).

- **Allowed Technologies**
  - Any framework or toolchain that produces static build artifacts only.
  - Client-side state and logic must not depend on server rendering at runtime.

- **Performance Baseline**
  - Ship only necessary JS and CSS.
  - Use asset optimization where provided by the chosen tooling (minification, bundling).

---

## 4. Project Structure (Minimum)

- **Source**
  - `src/` (or framework-equivalent) contains components, styles, and assets.
- **Build Output**
  - `dist/`, `build/`, or framework default build directory contains final static assets.
- **Configuration**
  - One primary build command (e.g. `npm run build`) that produces the static output.
  - One primary preview/serve command (e.g. `npm run preview` or `npm run dev`).

---

## 5. Quality & Testing

- **Minimum Quality Bar**
  - No build-time errors or console errors in modern browsers.
  - Basic accessibility: semantic HTML for core layout and navigation.
  - Basic responsiveness tested on a narrow mobile viewport and a desktop viewport.

- **Optional Testing (Encouraged)**
  - At least smoke tests for key interactive behavior (if applicable).
  - Automated linting for JS/TS and CSS, if tools are available.

---

## 6. Developer Experience

- **Setup**
  - Single documented install step (e.g. `npm install`).
  - Clear README with:
    - How to run in development.
    - How to build for production.
    - How to deploy static assets.

- **Conventions**
  - Consistent code style within the project.
  - Use environment-agnostic configuration: build should not depend on secrets or runtime server config.

---

## 7. Deployment

- **Deployment Target**
  - Any static hosting provider (e.g. Netlify, GitHub Pages, Vercel static export, S3+CloudFront).

- **Requirements**
  - Deployment uses only the static build output directory.
  - No server-side compute required to serve the site.

---

## 8. Change Management

- **Modifications to this Constitution**
  - Changes that affect:
    - The runtime nature of the app (static vs. dynamic), or
    - The build/deploy model
  - Must be explicitly documented in this file and communicated to collaborators before implementation.