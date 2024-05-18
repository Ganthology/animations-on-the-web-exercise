"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export const ShowSecondRectangleView = () => {
  const [showSecond, setShowSecond] = useState(false)

  return (
    <>
      <motion.button
        layout
        // layoutId="button"
        className="rounded-lg bg-white px-4 py-2 text-sm"
        onClick={() => setShowSecond((s) => !s)}
      >
        Animate
      </motion.button>
      {showSecond ? (
        <motion.div
          className="size-24 rounded-xl bg-orange-400"
          layoutId="rectangle"
        />
      ) : (
        <motion.div
          className="size-12 rounded-xl bg-yellow-300"
          layoutId="rectangle"
        />
      )}
    </>
  )
}
