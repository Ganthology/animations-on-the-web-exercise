"use client"

import { useRouter } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

export const TableOfContent = () => {
  const router = useRouter()
  return (
    <AnimatePresence>
      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {ROUTES.map((route) => (
          <>
            <motion.li
              key={route.path}
              className="relative z-10 cursor-pointer rounded-md border border-gray-900 bg-yellow-50 px-3 pb-24 pt-3"
              onClick={() => router.push(route.path)}
              whileHover={{
                boxShadow:
                  "-8px 8px 0px 0px rgb(254,252,232),-8px 8px 0px 1px rgba(0, 0, 0)",
                translateY: -6,
                translateX: 6,
                transition: { duration: 0.1 },
              }}
            >
              <h1 className="text-lg font-semibold">{route.name}</h1>
              <p className="text-xs">{route.description}</p>
            </motion.li>
          </>
        ))}
      </ul>
    </AnimatePresence>
  )
}

const ROUTES = [
  {
    path: "/framer-intro/motion-div",
    name: "Motion Div",
    description: "Animate a div with scale, y, and rotate properties.",
  },
  {
    path: "/framer-intro/show-second-rectangle",
    name: "Show Second Rectangle",
    description: "Learn how to use layoutId to animate between two elements.",
  },
  {
    path: "/framer-intro/layout-id-tabs",
    name: "Layout ID Tabs",
    description: "Create tabs with animated indicators using layoutId.",
  },
  {
    path: "/framer-intro/layout-animation",
    name: "Layout Animation",
    description: "Magic of using layout props.",
  },
  {
    path: "/framer-intro/app-store-shared-layout",
    name: "App Store Shared Layout",
    description: "More layoutId magic, item transitioned into modal/popup.",
  },
]
