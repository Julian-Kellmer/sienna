'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
// import EmblaCarousel from '../../components/EmblaCarousel/EmblaCarusel'
import ImageCarousel from '../../components/EmblaCarousel/ImageCarrousel'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)
const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
export default function ProyectoIndividual({ proyecto }) {
  const router = useRouter()
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.text-web-title', {
        scrollTrigger: {
          trigger: '.info-box',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className=' bg-white'>
      <div className='flex lg:flex-row flex-col h-full  '>
        {/* INFO LATERAL */}
        <div className='flex-2 flex flex-col justify-between lg:pl-12  '>
          {/* Título y ubicación */}
          <div className='flex flex-col h-full pl-4 md:pl-16  justify-between '>
            <div className='pl-12 pt-12 border-l border-b flex flex-col justify-center'>
              <h1 className='pt-6 text-web-title font-bold mb-2'>
                {proyecto.nombre}
              </h1>
              <p className='text-gray-600 flex items-center gap-1 text-base pb-6'>
                {proyecto.ubicacion}
              </p>
            </div>

            {/* Ficha técnica */}
            <div className=' border-l h-full flex flex-col justify-around  md:px-8'>
              <div className='md:px-6 grid grid-cols-2 mt-12 text-center  text-gray-700'>
                <div className='border-dashed border-b border-black/25 border-r p-4'>
                  <p className='text-2xl font-medium'>{proyecto.m2}m²</p>
                  <span className='text-sm text-gray-500'>m² totales</span>
                </div>
                <div className='border-dashed border-b border-black/25 p-4'>
                  <p className='text-2xl font-medium'>{proyecto.modulos}</p>
                  <span className='text-sm text-gray-500'>módulos</span>
                </div>
                <div className='border-dashed border-r border-black/25 p-4'>
                  <p className='text-2xl font-medium'>{proyecto.baños}</p>
                  <span className='text-sm text-gray-500'>baños</span>
                </div>
                <div className='p-4'>
                  <p className='text-2xl font-medium '>{proyecto.ambientes}</p>
                  <span className='text-sm text-gray-500'>ambientes</span>
                </div>
              </div>

              {/* Descripción */}
              <div className='p-4  md:px-12'>
                <h2 className='capitalize text-web-subtitle font-semibold text-primary mb-1'>
                  Descripción
                </h2>
                <p className='text-sm text-gray-600 leading-relaxed md:p-4'>
                  {proyecto.descripcion}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGEN DESTACADA */}
        <div className='flex-3 relative'>
          <Image
            alt='Imagen del proyecto principal'
            fill
            src={proyecto.images[0]}
            className='object-cover'
            sizes='(min-width: 1024px) 60vw, 100vw'
            priority
          />
        </div>
      </div>
      <div>
        <ImageCarousel images={proyecto.images}/>
      </div>

    </section>
  )
}