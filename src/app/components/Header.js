'use client'

import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import gsap from 'gsap'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

const Header = () => {
  const headerRef = useRef(null)
  const [atTop, setAtTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const handleScroll = (e, id) => {
    e.preventDefault()
    if (pathname === '/') {
      // Scroll suave en la misma página
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Ir a la home y luego scrollear
      router.push(`/#${id}`)
    }
  }

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
        className={`fixed left-0 z-50 w-full flex  ${
          atTop
            ? ' border-y border-black/25 border-dashed top-6'
            : 'top-0 bg-white shadow-lg'
        }`}>
        {/* NAV izquierda (desktop) */}

        <div className=' flex-1 '></div>
        <div className='relative flex flex-16  h-full  justify-around py-4 px-6  '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 20 20'
            className={`${atTop ? 'top-[-6px] left-[-7px]':'hidden'} absolute  transition-transform duration-500 hover:rotate-[180deg]`}>
            <path
              fill='black'
              d='M10 0c.423 0 .766.343.766.766v8.467h8.468a.766.766 0 1 1 0 1.533h-8.468v8.468a.766.766 0 1 1-1.532 0l-.001-8.468H.766a.766.766 0 0 1 0-1.532l8.467-.001V.766A.768.768 0 0 1 10 0Z'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 20 20'
            className={`${atTop ? 'top-[-6px] right-[-7px]':'hidden'} absolute  transition-transform duration-500 hover:rotate-[180deg]`}>
            <path
              fill='black'
              d='M10 0c.423 0 .766.343.766.766v8.467h8.468a.766.766 0 1 1 0 1.533h-8.468v8.468a.766.766 0 1 1-1.532 0l-.001-8.468H.766a.766.766 0 0 1 0-1.532l8.467-.001V.766A.768.768 0 0 1 10 0Z'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 20 20'
            className={`${atTop ? 'bottom-[-6px] right-[-7px]':'hidden'} absolute  transition-transform duration-500 hover:rotate-[180deg]`}>
            <path
              fill='black'
              d='M10 0c.423 0 .766.343.766.766v8.467h8.468a.766.766 0 1 1 0 1.533h-8.468v8.468a.766.766 0 1 1-1.532 0l-.001-8.468H.766a.766.766 0 0 1 0-1.532l8.467-.001V.766A.768.768 0 0 1 10 0Z'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 20 20'
            className={`${atTop ? 'bottom-[-6px] left-[-7px]':'hidden'} absolute  transition-transform duration-500 hover:rotate-[180deg]`}>
            <path
              fill='black'
              d='M10 0c.423 0 .766.343.766.766v8.467h8.468a.766.766 0 1 1 0 1.533h-8.468v8.468a.766.766 0 1 1-1.532 0l-.001-8.468H.766a.766.766 0 0 1 0-1.532l8.467-.001V.766A.768.768 0 0 1 10 0Z'
            />
          </svg>
          <nav className=' relative md:flex hidden  flex-1 items-center'>
            <ul className='flex gap-8 text-black font-book font-light'>
              <li>
                <a
                  href='/'
                  onClick={(e) => handleScroll(e, 'inicio')}>
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href='/'
                  onClick={(e) => handleScroll(e, 'nosotros')}>
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href='/'
                  onClick={(e) => handleScroll(e, 'proyectos')}>
                  Proyectos
                </a>
              </li>
            </ul>
          </nav>

          {/* LOGO centro */}
          <div className='flex-1 flex justify-center'>
            <img
              src='/images/Logo.svg'
              alt='Logo'
            />
          </div>

          {/* NAV derecha (desktop) */}
          <div className='md:flex hidden flex-1 justify-end'>
            <Button text='Contactanos' />
          </div>
        </div>
        <div className=' flex-1'></div>

        {/* Botón menú hamburguesa (mobile) */}
        <div className='md:hidden flex items-center'>
          <button
            onClick={() => setMenuOpen(true)}
            className='text-black'
            aria-label='Abrir menú'>
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
              transition={{ duration: 0.3, ease: 'easeInOut' }}>
              {/* Cierre */}
              <div className='flex justify-end mb-6'>
                <button
                  onClick={() => setMenuOpen(false)}
                  className='text-black'
                  aria-label='Cerrar menú'>
                  <X size={24} />
                </button>
              </div>

              {/* Navegación */}
              <nav>
                <ul className='flex flex-col gap-6 text-lg font-light text-black'>
                  <li>
                    <a
                      href='/'
                      onClick={(e) => {
                        handleScroll(e, 'inicio')
                        setMenuOpen(false)
                      }}>
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      onClick={(e) => {
                        handleScroll(e, 'nosotros')
                        setMenuOpen(false)
                      }}>
                      Nosotros
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      onClick={(e) => {
                        handleScroll(e, 'proyectos')
                        setMenuOpen(false)
                      }}>
                      Proyectos
                    </a>
                  </li>
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
