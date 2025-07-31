'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const footerRef = useRef(null)

  // useEffect(() => {
  //   gsap.fromTo(
  //     footerRef.current,
  //     { opacity: 0, y: 50 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       ease: 'power2.out',
  //       scrollTrigger: {
  //         trigger: footerRef.current,
  //         start: 'top bottom',
  //       },
  //     }
  //   )
  // }, [])

  const columns = [
    {
      title: 'Empresa',
      links: [
        'Novedades',
        'Nosotros',
        'Trabajá con nosotros',
        'Showrooms',
        'Para desarrolladores',
      ],
    },
    {
      title: 'Backyard',
      links: [
        'Modelos',
        'Diseña el tuyo',
        'Cómo funciona',
        'Financiamiento',
        'Preguntas frecuentes',
        'Guías locales',
      ],
    },
    {
      title: 'Social',
      links: ['Instagram', 'YouTube', 'LinkedIn'],
    },
  ]

  return (
    <footer
      ref={footerRef}
      className='bg-white text-black md:px-6 md:py-16 pt-8'>
      <div className='w-full md:px-24 pb-32  mx-auto gap-8 flex md:flex-row flex-col'>
        <div className='logo-container flex flex-1  flex-col'>
          <div className='relative w-screen h-24 md:w-120 md:h-36 mb-4'>
            <Image
              src='/images/logo.svg'
              alt='Logo'
              fill
              className='object-contain'
            />
          </div>
          <p className='pl-8 text-sm black'>
            © 2025 SIENNA Modular. All rights reserved.
          </p>
          <p className='pl-8 text-sm text-bllack'>
            Developer by{' '}
            <a
              href='https://www.instagram.com/aaj_studio/'
              target='_blank'
              className='underline hover:text-black transition-colors'>
              AAJ Studio
            </a>
          </p>
        </div>
        <div className=' flex md:flex-row flex-col  flex-1  justify-center gap-24 px-8'>
          {columns.map((section, idx) => (
            <div
              key={idx}
              className=''>
              <h4 className='text-sm font-semibold text-black uppercase mb-3 tracking-wide'>
                {section.title}
              </h4>
              <ul className='space-y-2 text-sm'>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href='#'
                      className='hover:underline text-neutral-600 hover:text-black transition-colors'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      
    </footer>
  )
}

export default Footer
