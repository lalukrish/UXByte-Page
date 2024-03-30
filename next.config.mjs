/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: [],
    remotePatterns: [
      { hostname: "drive.google.com" },
      { hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;
