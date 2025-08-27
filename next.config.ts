/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
      'pdfjs-dist/build/pdf.worker.entry': false,
    };
    return config;
  },
};

export default nextConfig;
