'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const lines = [
  'Arquitectura que transforma espacios.',
  'Diseños que inspiran el habitar.',
  'Sienna Modular',
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
    //   staggerDirection: -1,
      opacity: 0,
      y: -1000,
    //   transition: { duration: 0.5, ease: 'easeInOut' },
    },
  },
}

const lineVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -1000,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
}

export default function LoadingPage() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          exit='exit'
          className='fixed inset-0 z-50 bg-white flex flex-col justify-center items-center gap-4 text-center'>
          {lines.map((line, i) => (
            <motion.p
              key={i}
              variants={lineVariant}
              className='text-2xl md:text-4xl font-semibold text-black'>
              {line}
            </motion.p>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
