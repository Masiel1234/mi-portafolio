

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = 'mi-portafolio';
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
};
module.exports = nextConfig;