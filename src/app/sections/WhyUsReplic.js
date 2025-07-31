'use client'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import info from '../mockdata/whyus'
import Image from 'next/image'
const WhyUs = () => {
  gsap.registerPlugin(ScrollTrigger)
  const currentActiveIndexRef = useRef(0)
   useEffect(() => {
    console.log(info[0].icon)
    gsap.fromTo(
      '.title',
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        duration: 1,
        x: 0,
        scrollTrigger: {
          trigger: '.whyUs',
          start: 'top center',
          end: 'bottom bottom',
          toggleActions: 'play none none reverse',
        },
      }
    )
    gsap.fromTo(
      '.images',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        x: 0,
        scrollTrigger: {
          trigger: '.whyUs',
          start: 'top center',
          end: 'bottom bottom',
          toggleActions: 'play none none reverse',
        },
      }
    )

    const imageContainer = document.querySelector('.image-wrapper')
    ScrollTrigger.create({
      trigger: '.whyUs',
      start: 'top top',
      end: `+=${window.innerHeight * 8}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress
        const textContainer = document.querySelector('.text-wrapper')
        if (!textContainer) return

        const textContainerPositionHeight =
          textContainer.getBoundingClientRect().height
        const startPosition = textContainerPositionHeight
        const targetPosition = -textContainerPositionHeight
        const totalDistance = startPosition - targetPosition
        const currentY = startPosition - progress * totalDistance

        gsap.set('.text-wrapper', {
          y: currentY *1.8,
        })

        gsap.set('.image-wrapper', {
          y: -progress * 450,
          // scale: 1.05 - progress * 0.05,
        })

        const viewportMiddle = window.innerHeight / 2
        const titleElements = document.querySelectorAll('.titlesElements')
        let closestIndex = 0
        let closestDistance = Infinity
        titleElements.forEach((title, index) => {
          const titleRect = title.getBoundingClientRect()
          const titleCenter = titleRect.top + titleRect.height / 2
          const distanceFromCenter = Math.abs(titleCenter - viewportMiddle)
          if (distanceFromCenter < closestDistance) {
            closestDistance = distanceFromCenter
            closestIndex = index
          }
        })
        if (closestDistance !== currentActiveIndexRef.current) {
          titleElements.forEach((el, i) => {
            gsap.to(el, {
              opacity: i === closestIndex ? 1 : 0.25,
              scale: i === closestIndex ? 1.2 : 1,
              duration: 0.15,
              ease: 'power1.inOut',
            })
          })
          currentActiveIndexRef.current = closestIndex
        }
      },
    })
  }, [])

  return (
    <section
      id='whyUs'
      className='whyUs h-screen relative bg-white overflow-hidden'>
      <div className=' md:mx-24 mx-4 flex  border-x border-t border-black/25 h-full    '>
        {/* aca va a estar el titulo y el carrusel con los contenidos */}
        <div className='flex flex-col md:flex-4 h-full  border-r border-black/25'>
          <div className='flex-2 flex titles   flex-col '>
            <div className='flex-2 w-full ' />
            <div className=' my-2 flex-3 title-container md:px-16 px-4 py-2 md:py-8 border-t border-b border-black/25 flex flex-col align-start gap-4 '>
              <h2 className='title font-bold tracking-tight leading-none text-mobile-title sm:text-tablet-title lg:text-web-title text-[#222122]  max-w-2xl'>
                Por qué elegirnos es siempre la mejor opción
              </h2>
              <p className='text-mobile-article sm:text-tablet-article lg:text-web-article max-w-4xl'>
                En Sienna nos aseguramos de que tengas la mejor experiencia
                desde el momento en que señas hasta que te entregamos tu
                propiedad
              </p>
            </div>
          </div>
          <div className='flex-4   h-full relative border-t border-dashed border-black/25 overflow-hidden'>
            <div className='  border-x border-y border-dashed border-black/25 absolute top-0 left-1/8 w-6/8  h-full '></div>
            <div className='  text-wrapper absolute top-0 left-1/8 w-6/8 h-full gap-24  flex  flex-col c items-center justify-around -translate-y-[-100%]   '>
              {info.slice(0, 5).map((items, index) => {
                return (
                  <div
                    key={index}
                    className='titlesElements  gap-6 transition-all duration-150 ease-out flex max-w-xl  '>
                    <div className=' md:flex self-start  hidden'></div>
                    <div className='  text-center  flex  flex-col justify-center items-center gap-2 '>
                      <div className='flex align-center  gap-4 items-start content-center '>
                        <div className='md:block hidden  mt-[10px]  '>
                          <svg
                            width='18'
                            height='18'
                            viewBox='0 0 28 24'
                            fill='black'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d={items.icon}
                              fill='#4C454A'
                            />
                          </svg>
                        </div>
                        <h1 className='px-4 font-bold  leading-none sm:text-tablet-subtitle lg:text-web-subtitle text-mobile-subtitle'>
                          {items.title}
                        </h1>
                      </div>
                      <p className='font-Gotham-light text-mobile-body sm:text-tablet-body lg:text-web-body px-6 sm:px-16 lg:px-8 '>
                        {items.subtitle}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className='hidden lg:block md:flex-2'>
          <div className='relative h-full '>
            <div className=' p-4 pt-24 image-wrapper absolute w-full h-auto left-0 flex flex-col overflow-hidden gap-8 align-center items-center '>
              {info.slice(0, 2).map((img, index) => {
                return (
                  <div
                    key={index}
                    className='images relative w-[250px] h-[380px] xl:w-[500px] xl:h-[650px] overflow-hidden'>
                    <Image
                      src={img.image}
                      fill
                      alt='fotos de ejemplos de modulos'
                      className='object-cover'
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
