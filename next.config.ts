import type { NextConfig } from "next";
import type { Configuration } from "webpack";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  webpack: (config: Configuration) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
    };
    return config;
  },
};

export default withMDX(nextConfig);
