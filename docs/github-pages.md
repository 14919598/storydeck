# GitHub Pages Setup

StoryDeck is already configured for GitHub Pages deployment through GitHub Actions.

## What is already in place

- `vite.config.ts` uses `base: './'`
- `.github/workflows/deploy-pages.yml` builds and deploys the app
- `npm run build` outputs the static site to `dist/`

## What you need to do on GitHub

1. Create a new GitHub repository, for example `storydeck`.
2. Push this project to the repository.
3. In GitHub, open `Settings -> Pages`.
4. Under `Build and deployment`, choose `GitHub Actions`.
5. Make sure your default branch is `main`.

After that, every push to `main` will trigger the Pages deployment workflow.

## Suggested first push flow

```bash
git init
git branch -M main
git add .
git commit -m "Initial StoryDeck MVP"
git remote add origin <your-repo-url>
git push -u origin main
```

## Where the demo will appear

Once the workflow succeeds, GitHub will publish the site at:

`https://<your-github-username>.github.io/<your-repo-name>/`

## Notes

- If you rename the default branch, update `.github/workflows/deploy-pages.yml`.
- If the first deployment does not appear, check the `Actions` tab and confirm that Pages is set to `GitHub Actions`.
- Because StoryDeck is a static app with no router, it works cleanly on GitHub Pages without extra SPA fallback handling.
