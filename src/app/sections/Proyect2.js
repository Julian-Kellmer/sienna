'use client'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import proyectos from '../mockdata/proyectos'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Proyect2 = () => {
  const [proyectosConDims, setProyectosConDims] = useState([])
  const carouselRef = useRef(null)

  // Embla hooks
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: 'center', slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })],
  )

  // Navigation state
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [desktopCanScrollPrev, setDesktopCanScrollPrev] = useState(false)
  const [desktopCanScrollNext, setDesktopCanScrollNext] = useState(true)

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
          m2: proyecto.m2,
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

  // Embla navigation setup
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Desktop carousel navigation
  const scrollDesktopLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -600, behavior: 'smooth' })
    }
  }

  const scrollDesktopRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 600, behavior: 'smooth' })
    }
  }

  // Track desktop scroll position
  const handleDesktopScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setDesktopCanScrollPrev(scrollLeft > 0)
      setDesktopCanScrollNext(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('scroll', handleDesktopScroll)
      handleDesktopScroll()
      return () => carousel.removeEventListener('scroll', handleDesktopScroll)
    }
  }, [proyectosConDims])

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

  const MAX_WIDTH = 400
  const MAX_WIDTH_MOBILE = 280
  const MAX_HEIGHT_MOBILE = 400

  return (
    <section id='proyectos'>
      <div className='flex flex-col'>
        {/* Títulos y Filtros */}
        <div className='layout-wrap mb-12'>
          <div className='layout-grid'>
            <div className='col-span-4 md:col-start-2 md:col-span-10 pt-16 pb-8'>
              <h2 className='title font-bold tracking-tight text-primary leading-none text-mobile-title md:text-tablet-title lg:text-[3em]'>
                Nuestros últimos{' '}
                <span className='text-primary/50'>Proyectos</span>
              </h2>
            </div>

            {/* Filtros */}
            <div className='col-span-4 md:col-start-2 md:col-span-10 pb-8'>
              <div className='flex flex-wrap gap-4'>
                {['Ver todos', 'Viviendas', 'Oficinas', 'Turismo'].map(
                  (cat) => (
                    <button
                      key={cat}
                      className={`px-6 py-2 rounded-full border border-black/10 text-sm font-Gotham-book hover:bg-black/5 transition-colors ${
                        cat === 'Ver todos'
                          ? 'bg-primary text-white hover:bg-primary/90'
                          : 'bg-transparent text-primary'
                      }`}>
                      {cat}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Carrusel */}
        {device === 'mobile' ? (
          // Mobile: Embla Carousel
          <div className='relative w-full'>
            <div
              className='overflow-hidden'
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
                      className='flex-[0_0_auto] flex flex-col gap-4 mx-2 group'
                      style={{ width }}>
                      <a
                        href={`/proyectos/${project.id}`}
                        className='block'>
                        <div
                          style={{ height }}
                          className='rounded-lg overflow-hidden relative shadow-md cursor-pointer group-hover:shadow-2xl transition-all duration-300'>
                          <img
                            src={project.images?.[0] || '/casas/S205/1.png'}
                            alt={`Proyecto ${project.id}`}
                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                          />
                        </div>
                      </a>

                      <div className='flex items-center justify-between px-1'>
                        <div>
                          <h2 className='font-Gotham-medium text-2xl text-primary font-bold'>
                            Modelo SIENNA {project.nombre}
                          </h2>
                          <p className='text-primary/60 font-Gotham-book text-sm uppercase tracking-wider'>
                            {project.m2}M²
                          </p>
                        </div>
                        {/* <a
                          href={`/proyectos/${project.id}`}
                          className='group flex items-center justify-center w-12 h-8 border border-black/20 rounded-full hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300'>
                          <ArrowRight
                            size={18}
                            className='text-current transition-colors'
                          />
                        </a> */}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Mobile Navigation Buttons */}
            <div className='absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none'>
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className={`pointer-events-auto w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 ${
                  canScrollPrev
                    ? 'opacity-100 hover:bg-primary hover:text-white'
                    : 'opacity-30 cursor-not-allowed'
                }`}>
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className={`pointer-events-auto w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 ${
                  canScrollNext
                    ? 'opacity-100 hover:bg-primary hover:text-white'
                    : 'opacity-30 cursor-not-allowed'
                }`}>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        ) : (
          // Desktop/Tablet: carrusel drag
          <div className='relative'>
            <div
              ref={carouselRef}
              className='carruselContainer flex items-end gap-24 overflow-x-hidden cursor-grab'
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
                    className='px-4 py-8 flex flex-col items-start flex-shrink-0 gap-4 group'>
                    <a
                      href={`/proyectos/${project.id}`}
                      className='block overflow-hidden'>
                      <div
                        style={{ width, height }}
                        className='overflow-hidden cursor-pointer shadow-lg group-hover:shadow-2xl transition-all duration-300'>
                        <img
                          src={project.images?.[0] || '/casas/S205/1.png'}
                          alt={`Proyecto ${project.id}`}
                          className='w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500'
                        />
                      </div>
                    </a>

                    <div className='w-full flex items-center justify-between mt-2'>
                      <div>
                        <h2 className='font-Gotham-medium text-2xl text-primary font-bold'>
                          Modelo SIENNA {project.nombre}
                        </h2>
                        <p className='text-primary/60 font-Gotham-book text-sm uppercase tracking-wider'>
                          {project.m2}M²
                        </p>
                      </div>
                      {/* <a
                        href={`/proyectos/${project.id}`}
                        className='group flex items-center justify-center w-14 h-8 border border-black/20 rounded-full hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300'>
                        <ArrowRight
                          size={20}
                          className='text-current transition-colors'
                        />
                      </a> */}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Desktop Navigation Buttons */}
            <div className='absolute top-1/2 -translate-y-1/2 left-8 right-8 flex justify-between pointer-events-none'>
              <button
                onClick={scrollDesktopLeft}
                disabled={!desktopCanScrollPrev}
                className={`pointer-events-auto w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 ${
                  desktopCanScrollPrev
                    ? 'opacity-100 hover:bg-primary hover:text-white hover:scale-110'
                    : 'opacity-30 cursor-not-allowed'
                }`}>
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={scrollDesktopRight}
                disabled={!desktopCanScrollNext}
                className={`pointer-events-auto w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 ${
                  desktopCanScrollNext
                    ? 'opacity-100 hover:bg-primary hover:text-white hover:scale-110'
                    : 'opacity-30 cursor-not-allowed'
                }`}>
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Proyect2
