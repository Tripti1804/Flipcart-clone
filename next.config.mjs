// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true, // Enable SWC minification (faster builds)
    images: {
      domains: ['example.com'], // Add domains you use for images
    },
  };
  
  export default nextConfig;  