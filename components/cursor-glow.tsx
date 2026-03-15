"use client"

import { useEffect, useState } from "react"

type Point = { x: number; y: number }

export function CursorGlow() {
  const [position, setPosition] = useState<Point | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mouseleave", handleLeave)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mouseleave", handleLeave)
    }
  }, [])

  if (!position) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 mix-blend-screen"
      aria-hidden="true"
    >
      <div
        className={`pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-300`}
        style={{
          left: position.x,
          top: position.y,
          width: 200,
          height: 200,
          opacity: isVisible ? 0.45 : 0,
          background:
            "radial-gradient(circle at center, rgba(56, 189, 248, 0.8), rgba(59, 130, 246, 0.1), transparent 70%)",
        }}
      />
    </div>
  )
}

