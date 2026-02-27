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
      links: [
        { label: 'Modulos', href: '#' },
        { label: 'Brochure', href: '#' },
        { label: 'Galeria', href: '#' },
        { label: 'Para desarrolladores', href: '#' },
      ],
    },
    {
      title: 'Nosotros',
      links: [
        { label: 'Compañia', href: '#' },
        { label: 'Beneficios', href: '#' },
      ],
    },
    {
      title: 'Conoce más',
      links: [
        { label: 'Contacto', href: '#contact' },
        { label: 'Agendar reunión', href: 'https://calendly.com/' },
      ],
    },
    {
      title: 'Social',
      links: [
        {
          label: 'Instagram',
          href: 'https://www.instagram.com/siennamodular/',
        },
        { label: '+54 9 11 6118-2622', href: 'tel:+5491161182622' },
        { label: 'info@siennamodular.com.ar', href: 'mailto:info@siennamodular.com.ar' },
      ],
    },
  ]

  return (
    <footer
      ref={footerRef}
      className='bg-secondary text-black py-16'>
      <div className='layout-wrap'>
        <div className='layout-grid gap-y-12 md:gap-y-0'>
          {/* Columna Izquierda: Logo y Copyright */}
          <div className='pb-8 md:pb-0 col-span-4 md:col-span-4 flex flex-col justify-center items-center h-full'>
            <div className='flex flex-col items-center justify-center  align-center'>
              <div className='relative w-48 h-16 md:w-64  md:h-24 mb-6'>
                <Image
                  src='/Logo.svg'
                  alt='Logo SIENNA'
                  fill
                  className='object-contain  '
                />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm text-black'>
                  © 2025 SIENNA Modular. All rights reserved.
                </p>
                <p className='text-sm text-black'>
                  Developed by{' '}
                  <a
                    className='underline hover:text-primary transition-colors'
                    href='https://wa.me/+5491166161929?text=Hola%20quiero%20hacer%20Mi%20pagina%20web'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Julian Kellmer
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Enlaces y Botones */}
          <div className='col-span-full md:col-span-8 flex flex-col justify-between  h-full'>
            {/* Grid de Enlaces */}
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12 md:mb-0'>
              {columns.map((section, idx) => (
                <div key={idx}>
                  <h4 className='text-sm font-bold text-black uppercase mb-4 flex justify-center items-center tracking-wider'>
                    {section.title}
                  </h4>
                  <ul className='flex flex-col gap-3 justify-center items-center'>
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a
                          href={link.href}
                          target={
                            link.href.startsWith('http') ? '_blank' : undefined
                          }
                          rel={
                            link.href.startsWith('http')
                              ? 'noopener noreferrer'
                              : undefined
                          }
                          className='text-sm text-black/70 hover:text-black transition-colors'>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Botones (Desktop y Mobile) */}
            <div className='flex flex-col md:flex-row gap-4 justify-end items-start md:items-center mt-auto'>
              <ContactButton
                text='Agendar reunión'
                light={false}
                calendly={true}
              />
              <BrochureButton
                text='Descargar Brochure'
                light={false}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
