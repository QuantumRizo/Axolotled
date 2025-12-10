---
description: How to deploy the Axolotl project to Vercel
---

# Deploying to Vercel

Since you have already pushed your code to GitHub, deploying to Vercel is straightforward.

1.  **Log in to Vercel**: Go to [vercel.com](https://vercel.com) and log in (usually with your GitHub account).
2.  **Add New Project**:
    *   Click on the **"Add New..."** button in the dashboard.
    *   Select **"Project"**.
3.  **Import Git Repository**:
    *   You should see a list of your GitHub repositories.
    *   Find **Axolotl** (or whatever you named your repo) and click **"Import"**.
4.  **Configure Project**:
    *   **Framework Preset**: Vercel should automatically detect **Vite**. If not, select it manually.
    *   **Root Directory**: `./` (default)
    *   **Build Command**: `npm run build` (or `vite build`) - Vercel usually detects this.
    *   **Output Directory**: `dist` (default for Vite).
    *   **Environment Variables**: You don't have any critical env vars for this static site yet, so you can skip this.
5.  **Deploy**:
    *   Click **"Deploy"**.
    *   Wait for the build to complete (it should take less than a minute).
6.  **Verify**:
    *   Once deployed, Vercel will give you a domain (e.g., `axolotl-ed.vercel.app`).
    *   Click the screenshot or the link to visit your live site.

## Troubleshooting
- If the build fails, check the "Build Logs" in Vercel.
- Common issue: Ensure `package.json` and `package-lock.json` are in the root of your repository.
