# Repository Guidelines

## Project Structure & Module Organization
- `index.html` – primary single-page application containing layout, content sections, and accessibility hooks.
- `style.css` – global styling system (CSS variables, responsive layout, floating logo treatments); scoped per section.
- `script.js` – client-side logic for catalog rendering, filters, toasts, and the animated background logo.
- `AGENTS.md` – contributor guide (this file). There are no separate build directories; assets load directly from external CDNs.

## Build, Test, and Development Commands
- `python3 -m http.server 8080` – serve the site locally for manual testing.
- `npx serve` – alternative static server if Node.js tooling is preferred.
- `npx prettier --write *.js *.css *.html` – optional formatter to keep files consistent.

## Coding Style & Naming Conventions
- Use two-space indentation in HTML/CSS and standard JS indentation (auto-format via Prettier).
- Favor semantic HTML elements (`section`, `article`, `figure`).
- Keep CSS class names kebab-case (e.g., `hero-copy`, `product-grid`).
- JavaScript constants use `camelCase` for variables and `UPPER_SNAKE_CASE` only for truly immutable configuration.

## Testing Guidelines
- Manual browser verification is expected; focus on layout integrity, product rendering, and animated background behavior.
- When adding JS, write small helper functions that can be exercised via the browser console; no automated test harness is currently configured.

## Commit & Pull Request Guidelines
- Follow conventional, descriptive commit messages (e.g., `feat: add floating logo animation`, `fix: adjust catalog data`).
- Each pull request should describe the change, reference any related issues, and include before/after screenshots or GIFs for visual updates.
- Ensure `index.html`, `style.css`, and `script.js` open without console errors before submitting.

## Additional Tips
- External image/CDN URLs are hard-coded; validate they resolve over HTTPS before merging.
- Keep the floating background logo subtle: opacity < 0.1 and no pointer interaction.
