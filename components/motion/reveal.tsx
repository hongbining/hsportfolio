"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

interface RevealProps {
  children: React.ReactNode
  className?: string
  /** Stagger delay in seconds. */
  delay?: number
}

/**
 * Fades and slides its children in once they enter the viewport.
 * Respects `prefers-reduced-motion` by rendering static content.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  // Deliberately understated: a soft fade with a 6px rise. No flashy motion.
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
