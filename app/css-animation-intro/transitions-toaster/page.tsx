"use client"

import "./styles.css"

import { useEffect, useState } from "react"

export default function Screen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-100 space-y-4">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Toaster />
        <h1 className="text-2xl font-bold">Toaster (cmd+r to clear)</h1>
      </div>
    </div>
  )
}

function Toaster() {
  const [toasts, setToasts] = useState(0)

  return (
    <div className="wrapper">
      <div className="toaster">
        {Array.from({ length: toasts }).map((_, i) => (
          <Toast key={i} index={toasts - (i + 1)} />
        ))}
      </div>
      <button
        className="button"
        onClick={() => {
          setToasts(toasts + 1)
        }}
      >
        Add toast
      </button>
    </div>
  )
}

function Toast({ index }: { index: number }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      className="toast"
      style={{
        // @ts-ignore
        "--index": index,
      }}
      data-mounted={mounted}
    >
      <span className="title">Event Created </span>
      <span className="description">Monday, January 3rd at 6:00pm</span>
    </div>
  )
}
