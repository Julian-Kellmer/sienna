'use client'

import React, { useEffect, useRef, useState } from 'react'

import gsap from 'gsap'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

import ContactButton from './Reusables/ContactButton'

const Header = () => {
  // const headerRef = useRef(null)
  // const [atTop, setAtTop] = useState(true)
  // const [menuOpen, setMenuOpen] = useState(false)
  // const router = useRouter()
  // const pathname = usePathname()
  // const handleScroll = (e, id) => {
  //   e.preventDefault()
  //   if (pathname === '/') {
  //     // Scroll suave en la misma página
  //     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  //   } else {
  //     // Ir a la home y luego scrollear
  //     router.push(`/#${id}`)
  //   }
  // }

  // useEffect(() => {
  //   let lastScrollY = window.scrollY
  //   const header = headerRef.current

  //   const handleScroll = () => {
  //     const currentY = window.scrollY
  //     setAtTop(currentY < 10)

  //     if (currentY > lastScrollY && currentY > 100) {
  //       gsap.to(header, {
  //         y: '-100%',
  //         duration: 0.2,
  //         ease: 'linear',
  //       })
  //     }

  //     if (currentY < lastScrollY) {
  //       gsap.to(header, {
  //         y: '0%',
  //         duration: 0.2,
  //         ease: 'linear',
  //       })
  //     }

  //     lastScrollY = currentY
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  // // Ocultar en dinámicos
  // if (pathname.startsWith('/proyectos/')) {
  //   return null
  // }
  return (
    
      <header
        // ref={headerRef}
        className={`fixed left-0 z-50 w-full flex justify-center `}>
        <div className={`layout-wrap flex items-center justify-between py-4`}>
          {/* LOGO izquierda */}
          <div className='flex items-center'>
            <a href='/'>
              <img
                src='/images/siennalogo.svg'
                alt='Logo Sienna'
                className='h-8 md:h-10'
              />
            </a>
          </div>

          {/* NAV derecha (desktop) */}
          <div className='hidden md:flex items-center gap-12'>
            <nav>
              <ul className='flex gap-8 text-black font-Gotham-book text-sm'>
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
                <li>
                  <a
                    href='/contact'
                    onClick={(e) => handleScroll(e, 'contact')}>
                    Kontakt
                  </a>
                </li>
              </ul>
            </nav>
            <ContactButton
              text='Download Brochure'
              className='!px-6 !py-2 text-xs'
            />
          </div>

          {/* Menú hamburguesa (mobile) */}
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

      
  )
}

export default Header
