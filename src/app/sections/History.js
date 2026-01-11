'use client'
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const informacion = [
  {
    titulo: 'Equipo',
    descripcion:
      'Conformado por un equipo de profesionales con amplia trayectoria en la construcción y el desarrollo inmobiliario, gestionamos de forma integral cada etapa del proceso: desde el diseño inicial hasta la entrega final',
    video: '/videos/video1.webm',
  },
  {
    titulo: 'Fabrica',
    descripcion:
      'Nuestra fabricación 100% en planta nos permite garantizar plazos cortos, máxima precisión y un estricto control de calidad, eliminando los imprevistos típicos de la obra tradicional.',
    video: '/videos/video2.webm',
  },
  {
    titulo: 'Enfoque',
    descripcion:
      'Atendemos tanto proyectos residenciales como desarrollos de alta complejidad técnica, brindando soluciones para los sectores de energía, petróleo, minería y obra pública.',
    video: '/videos/video3.webm',
  },
  {
    titulo: 'Nuestros Modulos',
    descripcion:
      'Cada módulo es versátil, escalable y diseñado a medida, adaptándose a las necesidades específicas de cada cliente y contexto.',
    video: '/videos/video4.webm',
  },
]

const History = () => {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const titleRef = useRef(null)
  const textRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  // ScrollTrigger para detectar secciones
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: '.info',
        scrub: true,
      })

      const sections = gsap.utils.toArray('.video-block')
      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          onEnter: () => handleIndexChange(i),
          onEnterBack: () => handleIndexChange(i),
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  // Manejo de animaciones con salida → cambio → entrada
  const handleIndexChange = (i) => {
    if (i === activeIndex) return

    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: 'power2.inOut' },
    })

    tl.to([titleRef.current, textRef.current], {
      opacity: 0,
      y: -30,
      onComplete: () => setActiveIndex(i),
    }).fromTo(
      [titleRef.current, textRef.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.2 },
      '+=0.1'
    )
  }

  return (
    <section
      ref={containerRef}
      className='min-h-screen md:h-[500vh] bg-white flex flex-col md:flex-row relative overflow-hidden'>
      {/* Panel izquierdo */}
      <div
        className='info  md:w-1/2  md:h-screen
        md:sticky md:top-0
        border-b border-dashed md:border-b-0 md:border-r border-black/25 shadow-xl
        flex flex-col md:justify-center bg-white '>
        {/* Bloque principal solo en desktop */}
        <div className='p-6 md:px-8 flex-col gap-4 border-b border-black/25 border-dashed hidden md:flex'>
          <h2 className='text-mobile-title sm:text-tablet-title md:text-web-title font-bold self-center text-Gotham tracking-tight leading-none max-w-2xl'>
            Crea tu espacio con la efectividad adecuada
          </h2>
          <p className='font-Gotham-light text-mobile-body md:text-web-body max-w-2xl self-center'>
            Somos SIENNA, una empresa argentina dedicada a la arquitectura y
            construcción modular, donde la innovación, el diseño a medida y la
            excelencia técnica se combinan para crear espacios únicos,
            funcionales y sostenibles.
          </p>
        </div>
        
        {/* Contenido dinámico → siempre visible en mobile */}
        <div className='gap-2 h-[30vh]  justify-end flex flex-col md:self-center max-w-2xl pb-4 pt-12 md:py-12 px-4   border-black/25 border-dashed'>
          <h3
            ref={titleRef}
            key={activeIndex + '-title'}
            className='text-mobile-title sm:text-tablet-title md:text-web-title font-bold text-Gotham tracking-tight leading-none text-black/70'>
            {informacion[activeIndex].titulo}
          </h3>
          <p
            ref={textRef}
            key={activeIndex + '-text'}
            className='font-Gotham-light text-sm md:text-base '>
            {informacion[activeIndex].descripcion}
          </p>
        </div>
      </div>

      {/* Videos */}
      <div className='videos w-full md:w-1/2 space-y-16 p-4 md:p-8'>
        {informacion.map((item, i) => (
          <div
            key={i}
            className='video-block h-[60vh] md:h-screen border border-dashed border-black/25 flex items-center justify-center'>
            <video
              src={item.video}
              className='w-full h-full object-cover'
              autoPlay
              muted
              loop
              playsInline
              preload='auto'
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default History
