"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface CursorProps {
  mousePosition: { x: number; y: number }
}

export default function Cursor({ mousePosition }: CursorProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show cursor after a short delay to prevent initial animation from wrong position
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      animate={{
        x: mousePosition.x - 15,
        y: mousePosition.y - 15,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 300,
        mass: 0.5,
      }}
    >
      <motion.div
        className="w-8 h-8 bg-[#FFE136] rounded-full flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z" fill="#1E1E1E" />
        </svg>
      </motion.div>
    </motion.div>
  )
}
