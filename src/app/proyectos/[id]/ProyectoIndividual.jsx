'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { MessageCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function ProyectoIndividual({ proyecto }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fade-in', {
        scrollTrigger: {
          trigger: '.fade-in',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const whatsappMessage = `Hola! Estoy interesado en el Modelo SIENNA ${proyecto.nombre} (${proyecto.m2}m²). Me gustaría recibir más información.`
  const whatsappLink = `https://wa.me/5491234567890?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <>
      <Header />
      <section
        ref={containerRef}
        className='bg-secondary'>
        {/* HERO SECTION */}
        <div className='relative h-screen w-full flex items-end'>
          <Image
            alt={`Proyecto ${proyecto.nombre}`}
            fill
            src={proyecto.images[0]}
            className='object-cover'
            sizes='100vw'
            priority
          />
          {/* Overlay gradient */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />

          {/* Content */}
          <div className='layout-wrap relative z-10 pb-16 md:pb-24'>
            <div className='layout-grid'>
              <div className='col-span-4 md:col-span-8'>
                <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4'>
                  Modelo SIENNA {proyecto.nombre}
                </h1>
                <p className='text-white/90 text-lg md:text-xl font-Gotham-light'>
                  {proyecto.ubicacion}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FICHA TÉCNICA */}
        <div className='layout-wrap py-16 md:py-24'>
          <div className='layout-grid gap-8'>
            <div className='col-span-4 md:col-span-12'>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12'>
                <div className='text-center md:text-left border-b md:border-b-0 md:border-r border-black/10 pb-6 md:pb-0 md:pr-12'>
                  <p className='text-4xl md:text-5xl font-bold text-primary mb-2'>
                    {proyecto.m2}
                  </p>
                  <span className='text-sm uppercase tracking-wider text-primary/60 font-Gotham-book'>
                    m² totales
                  </span>
                </div>
                <div className='text-center md:text-left border-b md:border-b-0 md:border-r border-black/10 pb-6 md:pb-0 md:pr-12'>
                  <p className='text-4xl md:text-5xl font-bold text-primary mb-2'>
                    {proyecto.modulos}
                  </p>
                  <span className='text-sm uppercase tracking-wider text-primary/60 font-Gotham-book'>
                    módulos
                  </span>
                </div>
                <div className='text-center md:text-left border-b md:border-b-0 md:border-r border-black/10 pb-6 md:pb-0 md:pr-12'>
                  <p className='text-4xl md:text-5xl font-bold text-primary mb-2'>
                    {proyecto.baños}
                  </p>
                  <span className='text-sm uppercase tracking-wider text-primary/60 font-Gotham-book'>
                    baños
                  </span>
                </div>
                <div className='text-center md:text-left'>
                  <p className='text-4xl md:text-5xl font-bold text-primary mb-2'>
                    {proyecto.ambientes}
                  </p>
                  <span className='text-sm uppercase tracking-wider text-primary/60 font-Gotham-book'>
                    ambientes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DESCRIPCIÓN */}
        <div className='layout-wrap py-16 md:py-24 border-t border-black/10'>
          <div className='layout-grid gap-12'>
            <div className='col-span-4 md:col-span-5 fade-in'>
              <h2 className='text-3xl md:text-4xl font-bold text-primary mb-6'>
                Descripción
              </h2>
            </div>
            <div className='col-span-4 md:col-span-7 fade-in'>
              <p className='text-base md:text-lg text-primary/80 leading-relaxed font-Gotham-light'>
                {proyecto.descripcion}
              </p>
            </div>
          </div>
        </div>

        {/* GALERÍA TIPO REVISTA */}
        {/* Layout 1: Imagen Full Width */}
        {proyecto.images[1] && (
          <div className='w-full py-8 md:py-16 fade-in'>
            <div className='relative w-full h-[50vh] md:h-[70vh]'>
              <Image
                alt='Imagen del proyecto'
                fill
                src={proyecto.images[1]}
                className='object-cover'
                sizes='100vw'
              />
            </div>
          </div>
        )}

        {/* Layout 2: Grid 2 Columnas */}
        {proyecto.images[2] && proyecto.images[3] && (
          <div className='layout-wrap py-8 md:py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 fade-in'>
              <div className='relative h-[40vh] md:h-[60vh]'>
                <Image
                  alt='Imagen del proyecto'
                  fill
                  src={proyecto.images[2]}
                  className='object-cover'
                  sizes='(min-width: 768px) 50vw, 100vw'
                />
              </div>
              <div className='relative h-[40vh] md:h-[60vh]'>
                <Image
                  alt='Imagen del proyecto'
                  fill
                  src={proyecto.images[3]}
                  className='object-cover'
                  sizes='(min-width: 768px) 50vw, 100vw'
                />
              </div>
            </div>
          </div>
        )}

        {/* Layout 3: Imagen Grande + Texto Lateral */}
        {proyecto.images[4] && (
          <div className='layout-wrap py-16 md:py-24 border-t border-black/10'>
            <div className='layout-grid gap-12'>
              <div className='col-span-4 md:col-span-7 fade-in'>
                <div className='relative h-[50vh] md:h-[70vh]'>
                  <Image
                    alt='Imagen del proyecto'
                    fill
                    src={proyecto.images[4]}
                    className='object-cover'
                    sizes='(min-width: 768px) 60vw, 100vw'
                  />
                </div>
              </div>
              <div className='col-span-4 md:col-span-5 flex flex-col justify-center fade-in'>
                <h3 className='text-2xl md:text-3xl font-bold text-primary mb-6'>
                  Diseño modular y versátil
                </h3>
                <p className='text-base md:text-lg text-primary/80 leading-relaxed font-Gotham-light'>
                  Nuestros proyectos se adaptan a tus necesidades específicas,
                  combinando funcionalidad y estética en cada espacio.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Layout 4: Composición Asimétrica */}
        {proyecto.images[5] && proyecto.images[6] && (
          <div className='layout-wrap py-8 md:py-16'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 fade-in'>
              <div className='md:col-span-2 relative h-[45vh] md:h-[65vh]'>
                <Image
                  alt='Imagen del proyecto'
                  fill
                  src={proyecto.images[5]}
                  className='object-cover'
                  sizes='(min-width: 768px) 66vw, 100vw'
                />
              </div>
              <div className='md:col-span-1 relative h-[45vh] md:h-[65vh]'>
                <Image
                  alt='Imagen del proyecto'
                  fill
                  src={proyecto.images[6]}
                  className='object-cover'
                  sizes='(min-width: 768px) 33vw, 100vw'
                />
              </div>
            </div>
          </div>
        )}

        {/* Más imágenes en formato simple */}
        {proyecto.images.slice(7).map((image, index) => (
          <div
            key={index}
            className='w-full py-8 md:py-12 fade-in'>
            <div className='layout-wrap'>
              <div className='relative w-full h-[50vh] md:h-[70vh]'>
                <Image
                  alt={`Imagen del proyecto ${index + 8}`}
                  fill
                  src={image}
                  className='object-cover'
                  sizes='100vw'
                />
              </div>
            </div>
          </div>
        ))}

        {/* CTA WHATSAPP */}
        <div className='layout-wrap py-24 md:py-32 border-t border-black/10'>
          <div className='layout-grid'>
            <div className='col-span-4 md:col-start-3 md:col-span-8 text-center'>
              <h2 className='text-3xl md:text-5xl font-bold text-primary mb-6'>
                ¿Te interesó este proyecto?
              </h2>
              <p className='text-lg md:text-xl text-primary/70 font-Gotham-light mb-12'>
                Contactanos para recibir más información y comenzar a hacer
                realidad tu próximo proyecto.
              </p>
              <a
                href={whatsappLink}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-Gotham-medium text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl'>
                <MessageCircle size={24} />
                Quiero más información
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  )
}
