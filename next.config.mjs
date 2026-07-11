/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Static export for Vercel */
  output: 'export',
  
  /* Image optimization — use unoptimized for static export */
  images: {
    unoptimized: true,
  },
  
  /* Trailing slashes for clean URLs */
  trailingSlash: true,
};

export default nextConfig;
