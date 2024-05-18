"use client"

import { useState } from "react"
import clsx from "clsx"
import { motion } from "framer-motion"

export const LayoutIdTabsView = () => {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number] | null>(null)

  return (
    <>
      <ul className="flex flex-row">
        {TABS.map((tab) => (
          <motion.li
            layout
            key={tab.name}
            onMouseOver={() => setActiveTab(tab)}
            onMouseLeave={() => setActiveTab(null)}
            onFocus={() => setActiveTab(tab)}
            className={clsx(
              "relative cursor-pointer px-2 py-1 text-sm outline-none transition-colors",
              activeTab?.name === tab.name ? "text-gray-800" : "text-gray-700"
            )}
          >
            {activeTab?.name === tab.name ? (
              <motion.div
                layoutId="highlight"
                className="absolute inset-0 rounded-lg bg-black/5"
              />
            ) : null}
            <span className="relative text-inherit">{tab.name}</span>
          </motion.li>
        ))}
      </ul>
    </>
  )
}

const TABS = [
  {
    name: "Saved Sites",
  },
  {
    name: "Collections",
  },
  {
    name: "48 Following",
  },
  {
    name: "36 Followers",
  },
]
