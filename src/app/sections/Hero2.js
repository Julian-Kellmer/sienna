'use client'
import React, { useEffect, useState } from 'react'
import ContactButton from '../components/Reusables/ContactButton'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Hero2 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 4000 })],
  )

  // Placeholder images for the carousel
  const slides = [
    '/images/background.jpg',
    '/images/background.jpg',
    '/images/background.jpg',
    '/images/background.jpg',
  ]

  return (
    <section className='min-h-screen'>
      <section className='layout-wrap relative flex-col w-full h-auto  py-12 md:py-24 flex gap-12 md:gap-24'>
        {/* Header Section */}
        <div className='layout-grid'>
          {/* Title */}
          <div className='col-span-full md:col-start-2 md:col-span-10 flex flex-col gap-6 md:gap-8 mt-24'>
            <h1 className='md:max-w-1/2 text-mobile-title sm:text-tablet-title lg:text-web-title font-bold text-primary tracking-tighter leading-none'>
              Redefinimos la experiencia de la{' '}
              <span className='text-primary/50 '>construcción.</span>
            </h1>

            <div className='flex flex-col md:flex-row justify-between items-start md:items-end gap-8 w-full'>
              <p className='font-Gotham-light text-mobile-body md:text-tablet-body max-w-md text-primary'>
                Diseño a medida, calidad garantizada y entregas en tiempo
                récord.
              </p>
              <ContactButton />
            </div>
          </div>
        </div>
      </section>

      <div
        className='w-full overflow-hidden'
        ref={emblaRef}>
        <div className='flex -ml-6 md:-ml-[24px]'>
          {slides.map((src, index) => (
            <div
              key={index}
              className='flex-[0_0_100%] md:flex-[0_0_83.33%] min-w-0 relative h-[50vh] md:h-[80vh] pl-6 md:pl-[24px]'>
              <img
                src={src}
                alt={`Slide ${index}`}
                className='w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 '
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero2
