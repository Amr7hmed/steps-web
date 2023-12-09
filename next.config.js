const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n,
  swcMinify: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    BACKEND_URL: process.env.BACKEND_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.api.uizard.io",
      },
    ],
  },
};

module.exports = nextConfig;

/*
const nextConfig = {
  output: "export",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};
*/

// Build-time configuration
/*

module.exports = nextConfig;
*/
/*
const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */
/*
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  i18n,
  swcMinify: true,
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;
module.exports = {
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  // Use the new 'output' configuration
  output: {
    // Set your export path, e.g., 'out' is the default
    dir: "./out",
  },
};
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

*/
