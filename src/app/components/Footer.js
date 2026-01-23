'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ContactButton from '../components/Reusables/ContactButton'
import BrochureButton from '../components/Reusables/BrochureButton'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const footerRef = useRef(null)

  const columns = [
    {
      title: 'Productos',
      links: ['Modulos', 'Brochure', 'Galeria', 'Para desarrolladores'],
    },
    {
      title: 'Nosotros',
      links: ['Compañia', 'Beneficios'],
    },
    {
      title: 'Conoce más',
      links: ['Contacto', 'Agendar reunión'],
    },
    {
      title: 'Social',
      links: ['Instagram', 'Telefono', 'Correo'],
    },
  ]

  return (
    <footer
      ref={footerRef}
      className='bg-secondary text-black md:px-6 md:py-16 pt-8 flex '>
      <div className='logo-container flex flex-1  flex-col'>
        <div className='relative w-screen h-24 md:w-180 md:h-64 mb-4'>
          <Image
            src='Logo.svg'
            alt='Logo'
            fill
            className='object-contain'
          />
        </div>
        <p className='pl-16 text-sm black'>
          © 2025 SIENNA Modular. All rights reserved.
        </p>
        <p className='pl-16 text-sm text-bllack'>
          Developed by
          <a
            className='underline hover:text-blue-500 transition-colors text-black'
            href='https://wa.me/5491123456789?text=Hola%20quiero%20hacer%20Mi%20pagina%20web'
            target='_blank'
            rel='noopener noreferrer'>
            Julian Kellmer
          </a>
        </p>
      </div>
      <div className='flex flex-1 flex-col'>
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
        <div className='flex w-full gap-8 justify-end md:px-18 '>
          <ContactButton
            text='Agendar reunión'
            light={false}
          />
          <BrochureButton
            text='Descargar Brochure'
            light={false}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
