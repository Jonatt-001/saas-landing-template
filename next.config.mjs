/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    return "build-" + Date.now().toString(); // forces browser to load fresh JS
  },
};

export default nextConfig;