"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Check, Copy } from "lucide-react"

const variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
}

export const CopyCodeSnippetView = () => {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText("Copied some code!")
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <button
      aria-label="Copy code snippet"
      onClick={copy}
      className="rounded-lg border border-gray-700 p-2"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="checkmark"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Check className="text-gray-300" strokeWidth={1.5} />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Copy className="text-gray-300" strokeWidth={1.5} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
