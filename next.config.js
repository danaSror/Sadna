/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const path = require("path");

module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]", // Keep the original filename and extension
            outputPath: "static/pdf/", // Output directory for PDF files (customize as needed)
            publicPath: "/_next/static/pdf/", // Public URL path to PDF files (customize as needed)
          },
        },
      ],
    });

    return config;
  },
};
