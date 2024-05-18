"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
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
      <AnimatePresence>
        {activeGame ? (
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              layout: { duration: 0.5, type: "spring", bounce: 0.5 },
            }}
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {activeGame ? (
          <div className="absolute inset-0 z-10 grid place-items-center">
            <motion.div
              className="flex h-fit w-[500px] cursor-pointer flex-col items-start gap-4 overflow-hidden bg-white p-4"
              ref={ref}
              style={{ borderRadius: 12 }}
              layoutId={activeGame.title + "container"}
              // transition={{
              //   layout: { duration: 0.5, type: "spring", bounce: 0.2 },
              // }}
            >
              <div className="flex w-full items-center gap-4">
                <motion.img
                  layoutId={activeGame.title + "image"}
                  height={56}
                  width={56}
                  alt="Game"
                  src={activeGame.image}
                  style={{ borderRadius: 12 }}
                />
                <div className="flex grow items-center justify-between">
                  <div className="flex flex-col p-0">
                    <motion.h2
                      className="text-sm font-medium"
                      layoutId={activeGame.title + "title"}
                    >
                      {activeGame.title}
                    </motion.h2>
                    <motion.p
                      className="text-sm text-[#63635d]"
                      layoutId={activeGame.title + "description"}
                    >
                      {activeGame.description}
                    </motion.p>
                  </div>
                  <motion.button
                    className="rounded-full bg-[#f1f0ef] px-3 py-1 text-xs font-semibold text-[#007aff]"
                    layoutId={activeGame.title + "button"}
                  >
                    Get
                  </motion.button>
                </div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.1,
                }}
                className="text-sm text-[#63635d]"
              >
                {activeGame.longDescription}
              </motion.p>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="relative mx-0 my-12 flex w-full flex-col items-center p-0">
        {GAMES.map((game) => (
          <motion.li
            key={game.title}
            onClick={() => setActiveGame(game)}
            style={{ borderRadius: 8 }}
            className="group flex w-[386px] cursor-pointer items-center gap-4 p-0"
            layoutId={game.title + "container"}
            // transition={{
            //   layout: { duration: 0.5, type: "spring", bounce: 0.2 },
            // }}
          >
            <motion.img
              layoutId={game.title + "image"}
              height={56}
              width={56}
              alt="Game"
              src={game.image}
              style={{ borderRadius: 12 }}
            />
            <div className="flex grow items-center justify-between border-b border-solid border-[#d4d6d861] group-last:border-none">
              <div className="flex flex-col px-0 py-4">
                <motion.h2
                  className="text-sm font-medium"
                  layoutId={game.title + "title"}
                >
                  {game.title}
                </motion.h2>
                <motion.p
                  className="text-sm text-[#63635d]"
                  layoutId={game.title + "description"}
                >
                  {game.description}
                </motion.p>
              </div>
              <motion.button
                className="rounded-full bg-[#f1f0ef] px-3 py-1 text-xs font-semibold text-[#007aff]"
                layoutId={game.title + "button"}
              >
                Get
              </motion.button>
            </div>
          </motion.li>
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
