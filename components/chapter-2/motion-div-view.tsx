"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export const MotionDivView = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false)

  return (
    <>
      <button
        className="rounded-lg bg-white px-4 py-2 text-sm"
        onClick={() => setShouldAnimate((s) => !s)}
      >
        Animate
      </button>
      <motion.div
        className="size-12 rounded-xl bg-red-500"
        animate={{
          scale: shouldAnimate ? 2 : 1,
          y: shouldAnimate ? -40 : 0,
          rotate: shouldAnimate ? 120 : 0,
        }}
      ></motion.div>
    </>
  )
}
