'use client'
import React, { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ImageCarousel = ({ images }) => {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

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
        container.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount)

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    console.log(images)
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollButtons)
      checkScrollButtons()

      return () => container.removeEventListener('scroll', checkScrollButtons)
    }
    
  }, [])

  return (
    
    <div className='relative w-full'>
      {/* Botón izquierdo */}
      <button
        onClick={() => scroll('left')}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 hover:bg-white hover:scale-110 ${
          !canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
        <ChevronLeft className='w-6 h-6 text-gray-700' />
      </button>

      {/* Botón derecho */}
      <button
        onClick={() => scroll('right')}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 hover:bg-white hover:scale-110 ${
          !canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
        <ChevronRight className='w-6 h-6 text-gray-700' />
      </button>

      {/* Carrusel de imágenes */}
      <div
        ref={scrollContainerRef}
        className='flex gap-6 overflow-x-auto scrollbar-hide py-4 px-6'
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}>
        {images.map((image,i) => (
          <div
            key={i}
            className='flex-shrink-0 group cursor-pointer w-[80vw] max-w-[600px]'
            // style={{ width: `${image.width}px` }}
          >
            <div className='relative overflow-hidden shadow-lg transition-all duration-500 '>
              <img
                src={image}
                alt='imagenes del proyecto tanto interiores como exteriores'
                className='w-full h-[65vh] object-cover transition-transform duration-700 group-hover:scale-105'
                style={{
                  width: `auto`,
                  height: `65vh`,
                }}
                loading='lazy'
              />

              {/* Overlay gradiente */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}

              {/* Brillo deslizante */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 ease-out" /> */}
            </div>
          </div>
        ))}
      </div>

      {/* Gradientes laterales para fade visual */}
      {/* <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-100 to-transparent pointer-events-none z-5" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-5" /> */}
    </div>
  )
}

export default ImageCarousel
