'use client'
import React, { useEffect, useState, useRef } from 'react'
import ContactButton from '../components/Reusables/ContactButton'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

// WaveText Component with mask animation
// WaveText Component with mask animation
const WaveText = ({ text, className = '', delay = 0, noWrap = false }) => {
  const [isVisible, setIsVisible] = useState(false)
  const textRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current)
      }
    }
  }, [])

  const words = text.split(' ')
  let globalCharIndex = 0

  return (
    <div
      ref={textRef}
      className={className}
      // Use block to take full width, noWrap prop to force single line if requested
      style={{
        display: 'block',
        whiteSpace: noWrap ? 'nowrap' : 'normal',
        width: '100%',
      }}>
      {words.map((word, wordIndex) => {
        const currentWordStartUserIndex = globalCharIndex
        const chars = word.split('')
        globalCharIndex += chars.length + 1 // +1 for space

        return (
          <React.Fragment key={wordIndex}>
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              {chars.map((char, charIndex) => (
                <span
                  key={charIndex}
                  style={{
                    display: 'inline-block',
                    overflow: 'hidden',
                    verticalAlign: 'bottom',
                    lineHeight: '1', // Tight line height for the characters themselves
                    paddingBottom: '0.1em',
                    marginBottom: '-0.1em',
                  }}>
                  <span
                    style={{
                      display: 'inline-block',
                      animation: isVisible
                        ? `waveUp 0.8s ease-out ${
                            delay +
                            (currentWordStartUserIndex + charIndex) * 0.03
                          }s forwards`
                        : 'none',
                      transform: 'translateY(100%)',
                      opacity: 0,
                    }}>
                    {char}
                  </span>
                </span>
              ))}
            </span>
            {/* Real space character for natural flow */}
            {wordIndex < words.length - 1 && ' '}
          </React.Fragment>
        )
      })}
      <style jsx>{`
        @keyframes waveUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

const Hero2 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 4000 })],
  )
  const [loadedImages, setLoadedImages] = useState({})
  const imageRefs = useRef([])

  // Placeholder images for the carousel
  const slides = [
    '/images/background.jpg',
    '/images/background.jpg',
    '/images/background.jpg',
    '/images/background.jpg',
  ]

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }))
  }

  // Check if images are already loaded (from cache)
  useEffect(() => {
    imageRefs.current.forEach((img, index) => {
      if (img && img.complete) {
        setLoadedImages((prev) => ({ ...prev, [index]: true }))
      }
    })
  }, [])

  return (
    <section className='min-h-screen'>
      <section className='layout-wrap relative flex-col w-full h-auto py-12 md:py-24 flex gap-12 md:gap-24'>
        {/* Header Section */}
        <div className='layout-grid'>
          {/* Title */}
          <div className='col-span-full md:col-start-2 md:col-span-10 flex flex-col gap-6 md:gap-8 mt-24'>
            {/* Removed flex-col to let blocks stack naturally. Reduced gap/leading via classes if needed */}
            <h1 className='text-mobile-title sm:text-tablet-title lg:text-web-title font-bold text-primary tracking-tighter leading-none'>
              <WaveText
                text='Redefinimos la experiencia de la'
                className=''
                delay={0}
                // Force single line for the first part
                noWrap={true}
              />
              <WaveText
                text='construcción.'
                className='text-primary/50'
                delay={0.96}
              />
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
              {/* Skeleton Placeholder */}
              {!loadedImages[index] && (
                <div className='absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 animate-pulse' />
              )}

              <img
                ref={(el) => (imageRefs.current[index] = el)}
                src={src}
                alt={`Slide ${index}`}
                onLoad={() => handleImageLoad(index)}
                className={`w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 ${
                  loadedImages[index] ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero2
