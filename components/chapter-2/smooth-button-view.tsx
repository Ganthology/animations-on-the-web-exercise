"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { Spinner } from "@/components/base/spinner"

const buttonCopy = {
  idle: "Send me a login link",
  loading: <Spinner size={16} color="rgba(255, 255, 255, 0.65)" />,
  success: "Login link sent!",
}

export const SmoothButtonView = () => {
  const [buttonState, setButtonState] =
    useState<keyof typeof buttonCopy>("idle")

  const buttonBoxShadowClassname =
    "shadow-[0px_0px_1px_1px_rgba(255_255_255_0.08)_inset,0px_1px_1.5px_0px_rgba(0_0_0_0.32),0px_0px_0px_0.5px_#1a94ff]" as const

  return (
    <div className="flex justify-center px-10 py-[7.5rem]">
      <button
        className={`relative h-8 w-[9.25rem] overflow-hidden rounded-lg bg-gradient-to-b from-[#1994ff] to-[#157cff] text-[13px] font-medium ${buttonBoxShadowClassname}`}
        disabled={buttonState !== "idle"}
        onClick={() => {
          // This code is just a placeholder
          setButtonState("loading")

          setTimeout(() => {
            setButtonState("success")
          }, 1750)

          setTimeout(() => {
            setButtonState("idle")
          }, 3500)
        }}
      >
        <span className="flex w-full items-center justify-center text-white [text-shadow:_0_0.5px_1.5px_rgba(0_0_0.16)]">
          {buttonCopy[buttonState]}
        </span>
      </button>
    </div>
  )
}
