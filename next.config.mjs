/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // url: https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png
        protocol: "https",
        hostname:
          "animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app",
        pathname: "**",
        port: "",
      },
    ],
  },
}

export default nextConfig
