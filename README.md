# Ehtesham — Portfolio (React)

This repository is a personal portfolio built with Create React App. It demonstrates
modern front-end features and a few small UI behaviours that make the site feel
professional: responsive layout, theme toggle (dark/light), subtle animations,
and a mock sign-in flow to demonstrate authenticated UI states.

This project is intended as a starting point you can customize with your own
projects, images, and real authentication/back end.

## Features

- Componentized React UI: `Header`, `About`, `Projects`, `Contact`, `Footer`, `Login`
- Theme toggle (persists to `localStorage`) — dark & light themes
- Mock auth flow (client-only): sign in with a name/email to show a user pill and logout
- Responsive project cards and simple animations (fade/slide/pop)
- Accessible-ish HTML (improvements still recommended)

## Quick start

Prerequisite: Node.js (16+ recommended) and npm installed.

From the project root run:

```powershell
npm install
npm start
```

Open http://localhost:3000 in your browser. The floating login card is at the
bottom-right — use it to sign in and experiment with the logged-in header state.

## Build for production

```powershell
npm run build
```

The production-ready files are written to the `build/` folder.

## Deployment

This app was created with Create React App and can be deployed to GitHub Pages,
Netlify, Vercel, or any static site host. For GitHub Pages, one simple approach:

1. Install the `gh-pages` package and add homepage/script entries to `package.json`.
2. Run `npm run build` and `npm run deploy` (see CRA docs for details).

I can help add a deploy script if you tell me where you'd like to host the site.

## How to customize

- Projects: edit `src/components/Projects.js` and replace the `SAMPLE_PROJECTS`
	array with your own projects. Add image thumbnails in `public/` and link them.
- Contact: update `src/components/Contact.js` with your real email and link URLs.
- Auth: the current login is mocked and only stored in localStorage. If you want
	a real authentication flow, tell me whether you prefer Firebase, Auth0,
	NextAuth (for Next.js), or a custom Express + database solution and I'll
	scaffold it.

## Developer notes

- Theme and user state are stored in `localStorage` keys `pf_theme` and `pf_user`.
- Styles are in `src/components/Portfolio.css` and basic app styles remain in `src/App.css`.
- No new dependencies were added — the project uses the existing CRA stack.

## Next recommended improvements

1. Replace mock auth with real sign-in (OAuth, JWT, or provider of your choice).
2. Add image assets and project detail pages (or a small API that serves projects).
3. Improve accessibility (keyboard focus, aria attributes, form validation).
4. Add unit/integration tests for critical components (`Login`, `Header`, `Projects`).

---

If you'd like, I can now:

- run `npm start` locally and report any runtime issues, or
- wire a real auth provider (tell me which one), or
- populate the `Projects` list with your real project data and images.

Tell me which of the above you want next and I'll proceed.

