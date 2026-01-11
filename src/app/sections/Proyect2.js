'use client'
import React, { useEffect, useState, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import proyectos from '../mockdata/proyectos'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Proyect2 = () => {
  const [proyectosConDims, setProyectosConDims] = useState([])
  const carouselRef = useRef(null)

  // Embla hooks
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  )

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
    <section id='proyectos'>
      <div className='flex flex-col'>
        {/* Títulos y Filtros */}
        <div className='flex flex-col w-full lg:px-24 mb-12'>
          <div className='flex w-full'>
            <div
              id='titulos'
              className='md:flex-12 flex h-full px-8 pt-16 pb-8 gap-4'>
              <h2 className='title font-bold tracking-tight text-primary leading-none text-mobile-title md:text-tablet-title md:max-w-3xl md:px-32 lg:text-[3em]'>
                Nuestros últimos{' '}
                <span className='text-primary/50'>Proyectos</span>
              </h2>
            </div>
            <div className='flex-7'></div>
          </div>

          {/* Filtros */}
          <div className='px-8 md:px-[calc(8rem+4px+2rem)] flex flex-wrap gap-4'>
            {['Ver todos', 'Viviendas', 'Oficinas', 'Turismo'].map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full border border-black/10 text-sm font-Gotham-book hover:bg-black/5 transition-colors ${
                  cat === 'Ver todos'
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-transparent text-primary'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Carrusel */}
        {device === 'mobile' ? (
          // Mobile: Embla Carousel
          <div
            className='relative w-full overflow-hidden'
            ref={emblaRef}>
            <div className='flex gap-4 py-8 pl-4'>
              {proyectosConDims.map((project) => {
                const scaleX = MAX_WIDTH_MOBILE / project.width
                const scaleY = MAX_HEIGHT_MOBILE / project.height
                const width = project.width * scaleX
                const height = project.height * scaleY
                return (
                  <div
                    key={project.id}
                    className='flex-[0_0_auto] flex flex-col gap-4 mx-2'
                    style={{ width }}>
                    <div
                      style={{ height }}
                      className='rounded-lg overflow-hidden relative shadow-md'>
                      <img
                        src={project.images?.[0] || '/casas/S205/1.png'}
                        alt={`Proyecto ${project.id}`}
                        className='w-full h-full object-cover'
                      />
                    </div>

                    <div className='flex items-center justify-between px-1'>
                      <div>
                        <h2 className='font-Gotham-medium text-2xl text-primary font-bold'>
                          {project.nombre}
                        </h2>
                        <p className='text-primary/60 font-Gotham-book text-sm uppercase tracking-wider'>
                          S66
                        </p>
                      </div>
                      <a
                        href={`/proyectos/${project.id}`}
                        className='group flex items-center justify-center w-12 h-8 border border-black/20 rounded-full hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300'>
                        <ArrowRight
                          size={18}
                          className='text-current transition-colors'
                        />
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          // Desktop/Tablet: carrusel drag
          <div
            ref={carouselRef}
            className='carruselContainer flex items-end gap-24  overflow-x-hidden cursor-grab'
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
                  className='px-4 py-8 flex flex-col items-start flex-shrink-0 gap-4'>
                  <div
                    style={{ width, height }}
                    className='overflow-hidden '>
                    <img
                      src={project.images?.[0] || '/casas/S205/1.png'}
                      alt={`Proyecto ${project.id}`}
                      className='w-full h-full object-cover user-select-none pointer-events-none grayscale-[20%] hover:grayscale-0 transition-all duration-500'
                    />
                  </div>

                  <div className='w-full flex items-center justify-between mt-2'>
                    <div>
                      <h2 className='font-Gotham-medium text-2xl text-primary font-bold'>
                        {project.nombre}
                      </h2>
                      <p className='text-primary/60 font-Gotham-book text-sm uppercase tracking-wider'>
                        S66
                      </p>
                    </div>
                    <a
                      href={`/proyectos/${project.id}`}
                      className='group flex items-center justify-center w-14 h-8 border border-black/20 rounded-full hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300'>
                      <ArrowRight
                        size={20}
                        className='text-current transition-colors'
                      />
                    </a>
                  </div>
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
