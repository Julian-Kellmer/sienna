'use client'
import React, { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ImageCarousel = () => {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const images = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=800',
      alt: 'Torre moderna curva',
      width: 400,
      height: 600,
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/1308624/pexels-photo-1308624.jpeg?auto=compress&cs=tinysrgb&w=800&h=500',
      alt: 'Complejo residencial moderno',
      width: 700,
      height: 450,
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600&h=900',
      alt: 'Rascacielos contemporáneo',
      width: 450,
      height: 700,
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=700&h=400',
      alt: 'Edificio de oficinas moderno',
      width: 600,
      height: 350,
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1634279/pexels-photo-1634279.jpeg?auto=compress&cs=tinysrgb&w=500&h=750',
      alt: 'Torre residencial',
      width: 380,
      height: 580,
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      alt: 'Complejo arquitectónico mixto',
      width: 650,
      height: 480,
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=600&h=800',
      alt: 'Edificio de diseño único',
      width: 420,
      height: 630,
    },
  ]

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction) => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = 1200
      const newScrollLeft =
        container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollButtons)
      checkScrollButtons()

      return () => container.removeEventListener('scroll', checkScrollButtons)
    }
  }, [])

  return (
    <div className="relative w-full">
      {/* Botón izquierdo */}
      <button
        onClick={() => scroll('left')}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 hover:bg-white hover:scale-110 ${
          !canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Botón derecho */}
      <button
        onClick={() => scroll('right')}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 hover:bg-white hover:scale-110 ${
          !canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Carrusel de imágenes */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-6"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="flex-shrink-0 group cursor-pointer"
            style={{ width: `${image.width}px` }}
          >
            <div className="relative overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                style={{
                  width: `${image.width}px`,
                  height: `${image.height}px`,
                }}
                loading="lazy"
              />

              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Brillo deslizante */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 ease-out" />
            </div>
          </div>
        ))}
      </div>

      {/* Gradientes laterales para fade visual */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-100 to-transparent pointer-events-none z-5" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-5" />
    </div>
  )
}

export default ImageCarousel
