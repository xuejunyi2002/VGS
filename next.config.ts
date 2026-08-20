import type { NextConfig } from "next";

// GitHub Pages serves this site from https://<owner>.github.io/<repo>/,
// so the app needs to know its own base path when built for Pages.
const repoName = "VGS";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
};

export default nextConfig;
