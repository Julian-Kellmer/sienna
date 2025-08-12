import React, { useEffect, useRef, useState } from 'react'
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

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
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
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className='min-h-screen md:h-[500vh] bg-white flex flex-col md:flex-row relative overflow-hidden '>
      {/* Parte izquierda fija */}
      <div
        className='info 
      md:w-1/2  md:h-screen
      md:sticky md:top-0
      border-b border-dashed md:border-b-0 md:border-r border-black/25  shadow-xl
      flex flex-col md:justify-between  bg-white'>
        <div className='p-6 md:p-24 flex flex-col gap-4 border-b border-black/25 border-dashed '>
          <h2 className='text-[2rem] md:text-web-title lading-none  font-bold  text-Gotham tracking-tight leading-none max-w-2xl'>
            Crea tu espacio con la efectividad adecuada
          </h2>
          <p className='font-Gotham-light text-sm md:text-base max-w-2xl'>
            Somos SIENNA, una empresa argentina dedicada a la arquitectura y
            construcción modular, donde la innovación, el diseño a medida y la
            excelencia técnica se combinan para crear espacios únicos,
            funcionales y sostenibles.
          </p>
        </div>
        <div className='p-4 md:p-16 max-w-2xl '>
          <div className='p-4 md:p-16 max-w-2xl '>
            {/* En desktop: mostrar lista completa */}
            <div className='hidden md:block '>
              {informacion.map((item, i) => (
                <div
                  key={i}
                  className='mb-4'>
                  <div className='font-bold border-black/25 border-dashed border-b text-web-subtitle font-Gotham-light'>
                    {item.titulo}
                  </div>
                  {activeIndex === i && (
                    <div className='font-Gotham-light mt-2 text-sm p-2 transition-opacity duration-300 opacity-100'>
                      {item.descripcion}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* En mobile: mostrar solo el índice activo */}
            <div className='block md:hidden '>
              <div className='mb-4'>
                <div className='font-bold border-black/25 border-dashed border-b text-web-subtitle font-Gotham-light'>
                  {informacion[activeIndex].titulo}
                </div>
                <div className='font-Gotham-light mt-2 text-sm p-2 transition-opacity duration-300 opacity-100'>
                  {informacion[activeIndex].descripcion}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parte derecha que se scrollea */}
      <div className='videos w-full md:w-1/2 space-y-16 p-4 md:p-8'>
        {informacion.map((item, i) => (
          <div
            key={i}
            className='video-block h-[60vh] md:h-screen border border-dashed border-black/25 flex items-center justify-center text-4xl font-bold'>
            <video
              src={item.video}
              className='w-full h-full object-cover'
              autoPlay
              muted
              loop
              playsInline
              preload='auto'
              // poster={foto}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default History
