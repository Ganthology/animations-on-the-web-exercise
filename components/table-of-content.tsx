"use client"

import { AnimatePresence, motion } from "framer-motion"

import { useRouter } from "next/navigation"

export const TableOfContent = () => {
  const router = useRouter()
  return (
    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {ROUTES.map((route) => (
        <>
          <AnimatePresence mode="popLayout">
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
          </AnimatePresence>
        </>
      ))}
    </ul>
  )
}

const FRAMER_INTRO_ROUTES = [
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
  {
    path: "/framer-intro/smooth-button",
    name: "Smooth Button",
    description: "Create a smooth button with loading and success states.",
  },
  {
    path: "/framer-intro/copy-code-snippet",
    name: "Copy Code Snippet",
    description: "Copy code snippet with animation.",
  },
  {
    path: "/framer-intro/animating-height",
    name: "Animating Height",
    description:
      "Animate height of a div from auto to auto. Using family drawer as example.",
  },
]

const CSS_ANIMATION_INTRO_ROUTES = [
  {
    path: "/css-animation-intro/transforms",
    name: "Transforms",
    description: "Animate transforms with CSS.",
  },
  {
    path: "/css-animation-intro/transitions-yellow-ball",
    name: "Transitions Yellow Ball",
    description: "Animate a yellow ball with CSS.",
  },
  {
    path: "/css-animation-intro/transitions-card-hover",
    name: "Transitions Card Hover",
    description: "Animate a card with CSS.",
  },
  {
    path: "/css-animation-intro/transitions-download-arrow",
    name: "Transitions Download Arrow",
    description: "Animate a download arrow with CSS.",
  },
  {
    path: "/css-animation-intro/transitions-toaster",
    name: "Transitions Toaster",
    description: "Animate a toaster with CSS.",
  },
]

const ROUTES = [...FRAMER_INTRO_ROUTES, ...CSS_ANIMATION_INTRO_ROUTES]
