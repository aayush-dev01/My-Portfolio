"use client"

import { motion } from "framer-motion"

// Seeded random number generator for deterministic values
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9999) * 10000
  return x - Math.floor(x)
}

// Pre-computed particle positions for SSR compatibility
const particleData = Array.from({ length: 50 }, (_, i) => ({
  x: seededRandom(i * 1) * 100,
  y: seededRandom(i * 2 + 100) * 100,
  delay: seededRandom(i * 3 + 200) * 5,
  duration: 15 + seededRandom(i * 4 + 300) * 10,
  size: 2 + seededRandom(i * 5 + 400) * 3,
  xOffset: seededRandom(i * 6 + 500) * 20 - 10,
}))

// Pre-computed floating particles around orb
const orbParticleData = Array.from({ length: 6 }, (_, i) => ({
  xEnd: Math.cos((i * Math.PI * 2) / 6) * 150,
  yEnd: Math.sin((i * Math.PI * 2) / 6) * 150,
}))

function Particle({ index }: { index: number }) {
  const data = particleData[index]

  // Use fixed precision and explicit units so SSR and client
  // produce identical style strings for hydration.
  const sizePx = `${data.size.toFixed(2)}px`
  const leftPercent = `${data.x.toFixed(6)}%`
  const topPercent = `${data.y.toFixed(6)}%`

  return (
    <motion.div
      className="absolute rounded-full bg-primary/40"
      style={{
        width: sizePx,
        height: sizePx,
        left: leftPercent,
        top: topPercent,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, data.xOffset, 0],
        opacity: [0.2, 0.8, 0.2],
      }}
      transition={{
        duration: data.duration,
        delay: data.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

function AnimatedOrb() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Outer glow ring */}
      <motion.div
        className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,212,212,0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main sphere */}
      <motion.div
        className="relative w-48 h-48 md:w-64 md:h-64"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 15, 0, -15, 0],
        }}
        transition={{
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      >
        {/* Sphere gradient */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(0,255,170,0.4) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(0,212,212,0.6) 0%, transparent 50%),
              linear-gradient(135deg, rgba(0,212,212,0.3) 0%, rgba(0,255,170,0.2) 100%)
            `,
            boxShadow: `
              0 0 60px rgba(0,212,212,0.4),
              0 0 120px rgba(0,212,212,0.2),
              inset 0 0 60px rgba(0,255,170,0.2)
            `,
          }}
        />

        {/* Inner highlight */}
        <motion.div
          className="absolute inset-4 rounded-full"
          style={{
            background: "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.2) 0%, transparent 60%)",
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orbiting ring 1 */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30"
            style={{ transform: "translate(-50%, -50%) rotateX(75deg)" }}
          />
        </motion.div>

        {/* Orbiting ring 2 */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute top-1/2 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20"
            style={{ transform: "translate(-50%, -50%) rotateX(60deg) rotateY(30deg)" }}
          />
        </motion.div>
      </motion.div>

      {/* Floating particles around orb */}
      {orbParticleData.map((data, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary"
          style={{
            boxShadow: "0 0 10px rgba(0,212,212,0.8)",
          }}
          animate={{
            x: [0, data.xEnd],
            y: [0, data.yEnd],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Particle field */}
      {[...Array(50)].map((_, i) => (
        <Particle key={i} index={i} />
      ))}

      {/* Animated orb */}
      <AnimatedOrb />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,212,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,212,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
}
