'use client'

import React from 'react'
import Button from '../components/Button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const Hero = () => {
  useGSAP(() => {
    gsap.set('#video-frame', {
      clipPath: 'polygon(4% 4%, 96% 4%, 96% 96%, 4% 96%)',
    })
    gsap.from('#video-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'top top',
        end: 'bottom center',
        scrub: true,
      },
    })
  })

  return (
    <section
      id='inicio'
      className='h-screen relative overflow-hidden'>
      {/* Video de fondo */}
      <video
        id='video-frame'
        className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
        autoPlay
        loop
        muted
        playsInline
        poster='/images/background.jpg'
        preload='auto'
        >
        <source
          src='/videos/hero.mp4'
          type='video/webm'
        />
        Tu navegador no soporta el video en HTML5.
      </video>

      {/* Contenido del Hero */}
      <div className='relative w-full h-full flex flex-col items-center px-4 pt-38 sm:pt-10 md:justify-center'>
        <div className='md:block hidden flex-1'></div>
        <div
          id='hero-content'
          className='flex flex-4 flex-col items-center gap-8 max-w-6xl md:p-0'>
          <div
            className='flex flex-col items-center gap-4'
            id='text-content'>
            <h2 className='px-4 font-special text-mobile-title sm:text-tablet-title lg:text-web-title text-secondary text-center font-bold tracking-tight leading-none'>
              Incursiona con nosotros en el futuro de la construcción
            </h2>
            <h4 className='text-mobile-subtitle lg:text-web-subtitle sm:text-tablet-subtitle text-center px-4 text-secondary'>
              Diseño a medida, calidad garantizada y entregas en tiempo récord.
            </h4>
          </div>
          <div className='flex gap-8'>
            <Button text={'Brochure'} />
            <Button text={'Agenda tu reunion'} />
          </div>
        </div>
        <div className='flex-1'></div>
      </div>
    </section>
  )
}

export default Hero
