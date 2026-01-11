'use client'
import React, { useEffect, useState, useRef } from 'react'
import proyectos from '../mockdata/proyectos'

const Proyect2 = () => {
  const [proyectosConDims, setProyectosConDims] = useState([])
  const carouselRef = useRef(null)
  const [device, setDevice] = useState('desktop')

  // Detectar dispositivo
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) setDevice('mobile')
      else if (width >= 768 && width < 1024) setDevice('tablet')
      else setDevice('desktop')
    }

    handleResize() // detecta al cargar
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Obtener dimensiones de imágenes
  const getImgSizes = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () =>
        resolve({ width: img.naturalWidth, height: img.naturalHeight })
      img.onerror = () => reject(`Error cargando imagen: ${url}`)
      img.src = url
    })
  }

  const buildImagesArray = async (proyectos) => {
    const resultado = []
    for (const proyecto of proyectos) {
      if (!proyecto.images?.length) continue
      try {
        const firstUrl = proyecto.images[0]
        const dims = await getImgSizes(firstUrl)
        resultado.push({
          id: proyecto.id,
          images: proyecto.images,
          nombre: proyecto.nombre,
          ...dims,
        })
      } catch (err) {
        console.error(err)
      }
    }
    console.log(resultado)
    return resultado
  }

  useEffect(() => {
    ;(async () => {
      const imgsConDims = await buildImagesArray(proyectos)
      setProyectosConDims(imgsConDims)
    })()
  }, [])

  // Drag con inercia para desktop/tablet
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const velocity = useRef(0)
  const frame = useRef(null)
  const lastX = useRef(0)

  const onMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.pageX - carouselRef.current.offsetLeft
    scrollLeft.current = carouselRef.current.scrollLeft
    lastX.current = e.pageX
    cancelAnimationFrame(frame.current)
    carouselRef.current.style.cursor = 'grabbing'
  }

  const onMouseLeave = () => onMouseUp()
  const onMouseUp = () => {
    if (!isDragging.current) return
    isDragging.current = false
    carouselRef.current.style.cursor = 'grab'
    momentum()
  }

  const onMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = x - startX.current
    carouselRef.current.scrollLeft = scrollLeft.current - walk

    // calcular velocidad para inercia
    velocity.current = e.pageX - lastX.current
    lastX.current = e.pageX
  }

  const momentum = () => {
    const deceleration = 0.95
    const step = () => {
      if (Math.abs(velocity.current) < 0.5) return
      carouselRef.current.scrollLeft -= velocity.current
      velocity.current *= deceleration
      frame.current = requestAnimationFrame(step)
    }
    frame.current = requestAnimationFrame(step)
  }

  const MAX_WIDTH = 550
  const MAX_WIDTH_MOBILE = 400
  const MAX_HEIGHT_MOBILE = 550

  return (
    <section>
      <div className='flex flex-col'>
        {/* Títulos */}
        <div className='flex w-full lg:px-24 border-t border-b border-black/25'>
          <div className='flex w-full'>
            <div
              id='titulos'
              className='md:flex-12 flex h-full px-8 py-16 gap-4'>
              <h2 className='title font-bold tracking-tight text-primary leading-none text-mobile-title md:text-tablet-title md:max-w-3xl md:px-32 lg:text-[3em]'>
                Nuestros últimos{' '}
                <span className='text-primary/50'>Proyectos</span>
              </h2>
            </div>
            <div className='flex-7'></div>
          </div>
        </div>

        {/* Carrusel */}
        {device === 'mobile' ? (
          // Mobile: carrusel con flechas
          <div className='relative w-full overflow-hidden'>
            {/* Flecha izquierda */}
            <button
              onClick={() => {
                carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' })
              }}
              className='absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full'>
              ‹
            </button>

            {/* Carrusel scrollable */}
            <div
              ref={carouselRef}
              className='flex gap-4 overflow-x-auto scroll-smooth py-4 px-2'
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {proyectosConDims.map((project) => {
                const scaleX = MAX_WIDTH_MOBILE / project.width
                const scaleY = MAX_HEIGHT_MOBILE / project.height
                const width = project.width * scaleX
                const height = project.height * scaleY
                return (
                  <div
                    key={project.id}
                    className='flex-shrink-0  rounded-lg'
                    style={{ width, height }}>
                    <img
                      src={project.images?.[0] || '/casas/S205/1.png'}
                      alt={`Proyecto ${project.id}`}
                      className='w-full h-full object-cover'
                    />
                    <h2 className='font-Gotham-light text-2xl font-bold'>
                      {project.nombre}
                    </h2>
                    <a href={`/proyectos/${project.id}`}>Ver más</a>
                  </div>
                )
              })}
            </div>

            {/* Flecha derecha */}
            <button
              onClick={() => {
                carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' })
              }}
              className='absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full'>
              ›
            </button>
          </div>
        ) : (
          // Desktop/Tablet: carrusel drag
          <div
            ref={carouselRef}
            className='carruselContainer flex items-end gap-24 border-b border-black/25 overflow-x-hidden cursor-grab'
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {/* Ocultar scrollbar en Chrome/Safari */}
            <style>
              {`
                .carruselContainer::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>

            {proyectosConDims.map((project) => {
              const scale = MAX_WIDTH / project.height
              const width = project.width * scale
              const height = project.height * scale
              return (
                <div
                  key={project.id}
                  className='px-4 py-8  flex flex-col items-start flex-shrink-0'>
                  <div
                    style={{ width, height }}
                    className='overflow-hidden '>
                    <img
                      src={project.images?.[0] || '/casas/S205/1.png'}
                      alt={`Proyecto ${project.id}`}
                      className='w-full h-full object-cover user-select-none pointer-events-none'
                    />
                  </div>
                  <h2 className='font-Gotham-light text-2xl font-bold'>
                    {project.nombre}
                  </h2>
                  <a href={`/proyectos/${project.id}`}>Ver más</a>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default Proyect2
