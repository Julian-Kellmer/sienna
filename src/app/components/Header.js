'use client'

import React, { useEffect, useRef, useState } from 'react'

import gsap from 'gsap'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

import ContactButton from './Reusables/ContactButton'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavScroll = (e, id) => {
    e.preventDefault()
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push(`/#${id}`)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full flex justify-center transition-all duration-300 bg-secondary/80  backdrop-blur-xs `}>
        <div className={`layout-wrap flex items-center justify-between py-4`}>
          <div className='flex items-center'>
            <a href='/'>
              <img
                src='/Logo.svg'
                alt='Logo Sienna'
                className='h-8 md:h-10'
              />
            </a>
          </div>

          <div className='hidden md:flex items-center gap-12'>
            <nav>
              <ul className='flex gap-8 text-black font-Gotham-book text-sm'>
                <li>
                  <a
                    href='/'
                    onClick={(e) => handleNavScroll(e, 'inicio')}>
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    onClick={(e) => handleNavScroll(e, 'nosotros')}>
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    onClick={(e) => handleNavScroll(e, 'proyectos')}>
                    Proyectos
                  </a>
                </li>
                <li>
                  <a
                    href='/contact'
                    onClick={(e) => handleNavScroll(e, 'contact')}>
                    Kontakt
                  </a>
                </li>
              </ul>
            </nav>
            <ContactButton
              text='Descargar Brochure'
              className='!px-6 !py-2 text-xs'
            />
          </div>

          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setMenuOpen(true)}
              className='text-black'
              aria-label='Abrir menú'>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

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
                      href='#proyectos'
                      onClick={(e) => {
                        handleNavScroll(e, 'proyectos')
                        setMenuOpen(false)
                      }}>
                      Proyectos
                    </a>
                  </li>
                  <li>
                    <a
                      href='#nosotros'
                      onClick={(e) => {
                        handleNavScroll(e, 'nosotros')
                        setMenuOpen(false)
                      }}>
                      Sobre nosotros
                    </a>
                  </li>
                  <li>
                    <a
                      href='#pasos'
                      onClick={(e) => {
                        handleNavScroll(e, 'pasos')
                        setMenuOpen(false)
                      }}>
                      Pasos
                    </a>
                  </li>
                  <li>
                    <a
                      href='#contact'
                      onClick={(e) => {
                        handleNavScroll(e, 'contact')
                        setMenuOpen(false)
                      }}>
                      Contacto
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Botón */}
              <div className='mt-10'>
                <ContactButton text='Download Brochure' />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
