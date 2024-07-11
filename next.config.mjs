/** @type {import('next').NextConfig} */
const nextConfig = {transpilePackages: ["geist"], 
  
  images: {
      domains: [
        "api.microlink.io", // Microlink Image Preview
      ],
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

};

export default nextConfig;
