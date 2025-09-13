"use client"
import { useCallback, useEffect, useState } from "react"
import { motion } from "framer-motion"

let interval: NodeJS.Timeout

type Card = {
  id: number
  content: React.ReactNode
}

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  autoFlip = true,
  intervalMs = 5000,
}: {
  items: Card[]
  offset?: number
  scaleFactor?: number
  autoFlip?: boolean
  intervalMs?: number
}) => {
  const CARD_OFFSET = offset || 12
  const SCALE_FACTOR = scaleFactor || 0.06
  const [cards, setCards] = useState<Card[]>(items)
  const startFlipping = useCallback(() => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]
        newArray.unshift(newArray.pop()!) // move last element to front
        return newArray
      })
    }, intervalMs)
  }, [intervalMs])
  
  useEffect(() => {
    if (!autoFlip) return
    startFlipping()
    return () => clearInterval(interval)
  }, [autoFlip, startFlipping])

  

  return (
    <div className="relative h-[32rem] w-full max-w-3xl mx-auto">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute w-full"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          {/* Instead of CardStack styles, just render ProjectCard */}
          {card.content}
        </motion.div>
      ))}
    </div>
  )
}
