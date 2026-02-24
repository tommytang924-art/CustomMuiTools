const path = require("path");
let basePath = process.env.NEXT_PUBLIC_BASEPATH || "";
if (basePath != "" && !basePath.startsWith("/")) {
  basePath = "/" + basePath;
}

const nextConfig = {
  ...(basePath && { basePath: basePath }),
  ...(basePath && { assetPrefix: basePath }),
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  experimental: {
    optimizePackageImports: [
      "@mui/material",
      "@mui/icons-material",
      "@fortawesome/react-fontawesome",
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    emotion: true,
  },
  reactStrictMode: process.env.NODE_ENV !== "production",
  turbopack: {},
  async redirects() {
    return [
      {
        source: "/",
        destination: `${basePath}`,
        permanent: false,
        basePath: false,
      },
      {
        source: "/",
        destination: "/login",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;