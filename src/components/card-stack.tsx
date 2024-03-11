'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { Button } from './ui/button'

let interval: any

type Card = {
  id: number
  name: string
  designation: string
  content: React.ReactNode
}

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[]
  offset?: number
  scaleFactor?: number
}) => {
  const CARD_OFFSET = offset || 10
  const SCALE_FACTOR = scaleFactor || 0.06
  const [cards, setCards] = useState<Card[]>(items)

  useEffect(() => {
    startFlipping()
  }, [])
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards] // create a copy of the array
        newArray.unshift(newArray.pop()!) // move the last element to the front
        return newArray
      })
    }, 5000)

    return () => clearInterval(interval)
  }

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute flex h-60 w-60 flex-col justify-between gap-y-3 rounded-3xl border border-zinc-200 bg-background p-4 shadow-xl shadow-black/[0.1] dark:border-white/[0.1] dark:bg-black dark:shadow-white/[0.05] md:h-60 md:w-96"
            style={{
              transformOrigin: 'top center',
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-zinc-700 dark:text-zinc-200">
              {card.content}
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <p className="font-medium text-neutral-500 dark:text-white">
                  {card.name}
                </p>
                <p className="text-xs font-normal text-neutral-400 dark:text-neutral-200">
                  {card.designation}
                </p>
              </div>
              <Button variant="brand" onClick={() => console.log(card.id)}>
                Reservar
              </Button>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
