"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypingTextProps {
  texts: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export default function TypingText({
  texts,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false)
          setIsDeleting(true)
          return
        }

        const fullText = texts[currentTextIndex]

        if (isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length - 1))

          if (currentText === "") {
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1))

          if (currentText === fullText) {
            setIsPaused(true)
          }
        }
      },
      isPaused ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <motion.div
      className={`${className} text-cyan-400 neon-cyan`}
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <span className="animate-pulse text-pink-400">|</span>
    </motion.div>
  )
}
