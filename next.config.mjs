/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(process.env.FIGMA && process.env.FIGMA_PUBLIC_URL
    ? { allowedDevOrigins: [new URL(process.env.FIGMA_PUBLIC_URL).hostname] }
    : {}),
};

export default nextConfig;
