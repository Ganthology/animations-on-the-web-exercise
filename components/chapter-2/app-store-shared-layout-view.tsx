"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useOnClickOutside } from "usehooks-ts"

export const AppStoreSharedLayoutView = () => {
  const [activeGame, setActiveGame] = useState<(typeof GAMES)[number] | null>(
    null
  )
  const ref = useRef(null)
  useOnClickOutside(ref, () => setActiveGame(null))

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveGame(null)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      {activeGame ? (
        <>
          <div className="pointer-events-none absolute inset-0 z-10 bg-black/20" />
          <div className="absolute inset-0 z-10 grid place-items-center">
            <div
              className="flex h-fit w-[500px] cursor-pointer flex-col items-start gap-4 overflow-hidden bg-white p-4"
              ref={ref}
              style={{ borderRadius: 12 }}
            >
              <div className="flex w-full items-center gap-4">
                <Image
                  height={56}
                  width={56}
                  alt="Game"
                  src={activeGame.image}
                  style={{ borderRadius: 12 }}
                />
                <div className="flex grow items-center justify-between">
                  <div className="flex flex-col p-0">
                    <h2 className="text-sm font-medium">{activeGame.title}</h2>
                    <p className="text-sm text-[#63635d]">
                      {activeGame.description}
                    </p>
                  </div>
                  <button className="rounded-full bg-[#f1f0ef] px-3 py-1 text-xs font-semibold text-[#007aff]">
                    Get
                  </button>
                </div>
              </div>
              <p className="text-sm text-[#63635d]">
                {activeGame.longDescription}
              </p>
            </div>
          </div>
        </>
      ) : null}
      <ul className="relative mx-0 my-12 flex w-full flex-col items-center p-0">
        {GAMES.map((game) => (
          <li
            key={game.title}
            onClick={() => setActiveGame(game)}
            style={{ borderRadius: 8 }}
            className="group flex w-[386px] cursor-pointer items-center gap-4 p-0"
          >
            <Image
              height={56}
              width={56}
              alt="Game"
              src={game.image}
              style={{ borderRadius: 12 }}
            />
            <div className="flex grow items-center justify-between border-b border-solid border-[#d4d6d861] group-last:border-none">
              <div className="flex flex-col px-0 py-4">
                <h2 className="text-sm font-medium">{game.title}</h2>
                <p className="text-sm text-[#63635d]">{game.description}</p>
              </div>
              <button className="rounded-full bg-[#f1f0ef] px-3 py-1 text-xs font-semibold text-[#007aff]">
                Get
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

const GAMES = [
  {
    title: "The Oddysey",
    description: "Explore unknown galaxies.",
    longDescription:
      "Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png",
  },
  {
    title: "Angry Rabbits",
    description: "They are coming for you.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png",
  },
  {
    title: "Ghost town",
    description: "Find the ghosts.",
    longDescription:
      "You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp",
  },
  {
    title: "Pirates in the jungle",
    description: "Find the treasure.",
    longDescription:
      "You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png",
  },

  {
    title: "Lost in the mountains",
    description: "Find your way home.",
    longDescription:
      "You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/boy.webp",
  },
]
