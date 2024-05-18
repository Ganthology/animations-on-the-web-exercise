"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export const LayoutAnimationView = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.div
        layout
        onClick={() => setOpen((o) => !o)}
        className="size-12 bg-yellow-300"
        style={
          open
            ? { position: "fixed", inset: 0, width: "100%", height: "100%" }
            : { height: 48, width: 48 }
        }
      />
    </>
  )
}
