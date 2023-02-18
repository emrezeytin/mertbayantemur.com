/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: { subsets: ["latin"] },
      },
    ],
  },
  images: {
    domains: ["yt3.ggpht.com", "i.ytimg.com"],
  },
}

export default nextConfig
