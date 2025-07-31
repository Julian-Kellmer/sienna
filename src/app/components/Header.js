'use client'

import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import gsap from 'gsap'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const Header = () => {
  const headerRef = useRef(null)
  const [atTop, setAtTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY
    const header = headerRef.current

    const handleScroll = () => {
      const currentY = window.scrollY
      setAtTop(currentY < 10)

      if (currentY > lastScrollY && currentY > 100) {
        gsap.to(header, {
          y: '-100',
          duration: 0.4,
          ease: 'power2.out',
        })
      }

      if (currentY < lastScrollY) {
        gsap.to(header, {
          y: '0%',
          duration: 0.4,
          ease: 'power2.out',
        })
      }

      lastScrollY = currentY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 z-50 px-8 py-4 w-full flex items-center justify-between transition-colors duration-300 ${
          atTop ? 'bg-transparent' : 'bg-white shadow-lg'
        }`}
      >
        {/* NAV izquierda (desktop) */}
        <nav className='md:flex hidden flex-1 items-center'>
          <ul className='flex gap-8 text-black font-book font-light'>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Proyecto</li>
            <li>Contacto</li>
          </ul>
        </nav>

        {/* LOGO centro */}
        <div className='flex-1 flex justify-center'>
          <img src='/images/Logo.svg' alt='Logo' />
        </div>

        {/* NAV derecha (desktop) */}
        <div className='md:flex hidden flex-1 justify-end'>
          <Button text='Contactanos' />
        </div>

        {/* Botón menú hamburguesa (mobile) */}
        <div className='md:hidden flex items-center'>
          <button
            onClick={() => setMenuOpen(true)}
            className='text-black'
            aria-label='Abrir menú'
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Overlay + Menú Mobile Deslizable */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* FONDO OSCURO */}
            <motion.div
              className='fixed inset-0 bg-black/40 backdrop-blur-sm z-40'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* PANEL DESLIZANTE */}
            <motion.div
              className='fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white z-50 px-6 py-8 flex flex-col justify-between'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* Cierre */}
              <div className='flex justify-end mb-6'>
                <button
                  onClick={() => setMenuOpen(false)}
                  className='text-black'
                  aria-label='Cerrar menú'
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navegación */}
              <nav>
                <ul className='flex flex-col gap-6 text-lg font-light text-black'>
                  <li onClick={() => setMenuOpen(false)}>Inicio</li>
                  <li onClick={() => setMenuOpen(false)}>Nosotros</li>
                  <li onClick={() => setMenuOpen(false)}>Proyecto</li>
                  <li onClick={() => setMenuOpen(false)}>Contacto</li>
                </ul>
              </nav>

              {/* Botón */}
              <div className='mt-10'>
                <Button text='Contactanos' />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
