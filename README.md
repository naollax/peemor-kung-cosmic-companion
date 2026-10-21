# Peemor Kung — Cosmic Companion

Static personal AI and divination web app for GitHub Pages.

## Features
- Thai-first wellness, heart, and divination experience
- Local AI via WebLLM-style browser model
- Offline-ready shell + service worker
- Account/demo sync UI
- Calendar, profile, release, world clock, and astronomy sections

## Run locally
Open in a local web server:

```bash
python -m http.server 8000
```

Then browse to:

```text
http://localhost:8000
```

Important:
- For local AI model download, use `localhost` or HTTPS.
- WebGPU support is required for on-device model execution.
- GitHub Pages can serve the static site, but the local AI model requires browser support and a secure context.

## Deploy to GitHub Pages
1. Push this repo to GitHub.
2. Open repository Settings → Pages.
3. Set Source to `Deploy from a branch`.
4. Choose `main` and `/ (root)`.
5. Save.

## Notes
The app is intentionally static and local-first. Some advanced AI features depend on the browser and model download support.
