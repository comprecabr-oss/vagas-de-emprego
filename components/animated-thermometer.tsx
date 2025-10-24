"use client"

import { useEffect, useRef, useState } from "react"

export function AnimatedThermometer() {
  const [isHot, setIsHot] = useState(false)
  const [mercuryLevel, setMercuryLevel] = useState(0.7)
  const mercuryRef = useRef<SVGRectElement>(null)

  useEffect(() => {
    const animateThermo = () => {
      const level = Math.random() * 0.35 + 0.6 // 0.6–0.95
      setMercuryLevel(level)

      if (level > 0.9) {
        setIsHot(true)
        setTimeout(() => setIsHot(false), 400)
      }
    }

    // Initial animation
    animateThermo()

    // Repeat animation every 7 seconds
    const interval = setInterval(animateThermo, 7000)

    return () => clearInterval(interval)
  }, [])

  const mercuryHeight = mercuryLevel * 140
  const mercuryY = 160 - mercuryHeight

  return (
    <div className={`relative inline-block w-[50px] h-[200px] ${isHot ? "animate-shake" : ""}`}>
      <svg viewBox="0 0 60 200" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="mercury-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* Tube */}
        <rect
          x="26"
          y="20"
          width="8"
          height="140"
          rx="4"
          ry="4"
          fill="#e5e7eb"
          stroke="#374151"
          strokeWidth="1.5"
          className="dark:fill-gray-800 dark:stroke-gray-400"
        />

        {/* Mercury (animated level) */}
        <rect
          ref={mercuryRef}
          x="27"
          y={mercuryY}
          width="6"
          height={mercuryHeight}
          rx="3"
          ry="3"
          fill="url(#mercury-gradient)"
          className="transition-all duration-[7000ms] ease-in-out"
        />

        {/* Bulb */}
        <circle
          cx="30"
          cy="175"
          r="14"
          fill="#ef4444"
          className="transition-all duration-400"
          style={{
            filter: "drop-shadow(0 0 6px rgba(239, 68, 68, 0.6))",
          }}
        />

        {/* Shine effect */}
        <circle cx="26" cy="170" r="4" fill="rgba(255,255,255,0.5)" />
      </svg>

      {/* Vapor effect */}
      <div className="absolute bottom-[160px] left-1/2 w-[6px] h-[6px] rounded-full bg-white/40 -translate-x-1/2 animate-vapor" />

      <style jsx>{`
        @keyframes vapor {
          0% {
            opacity: 0;
            transform: translate(-50%, 0) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translate(-50%, -40px) scale(1.4);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -80px) scale(0.8);
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(1px, -1px) rotate(1deg);
          }
          50% {
            transform: translate(-1px, 1px) rotate(-1deg);
          }
          75% {
            transform: translate(1px, 1px) rotate(1deg);
          }
        }

        .animate-vapor {
          animation: vapor 3s ease-in-out infinite;
        }

        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </div>
  )
}
