"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import useMeasure from "react-use-measure"

export const AnimatingHeightView = () => {
  const [showExtraContent, setShowExtraContent] = useState(false)

  const [ref, { height }] = useMeasure()

  return (
    <>
      <motion.button
        layoutId="toggle-height-button"
        className="rounded-lg bg-white px-4 py-2 text-sm"
        onClick={() => setShowExtraContent((b) => !b)}
      >
        Toggle height
      </motion.button>
      <motion.div
        className="flex w-80 flex-col gap-2 overflow-hidden rounded-2xl bg-white"
        animate={{ height: height }}
      >
        <div className="px-4 py-[13px]" ref={ref}>
          <h1 className="font-semibold">Fake Family Drawer</h1>
          <p className="text-[#63635d]">
            This is a fake family drawer. Animating height is tricky, but
            satisfying when it works.
          </p>
          <AnimatePresence>
            {showExtraContent ? (
              <motion.p
                className="text-[#63635d]"
                initial={{
                  opacity: 0.2,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0.2,
                }}
                transition={{
                  duration: 0.1,
                }}
              >
                This extra content will change the height of the drawer. Some
                even more content to make the drawer taller and taller and
                taller...
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  )
}
