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
    // console.log(info[0].icon)
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
        const startPosition = textContainerPositionHeight/2
        const targetPosition = -textContainerPositionHeight
        const totalDistance = startPosition*3.5 - targetPosition
        const currentY = startPosition - progress * totalDistance

        gsap.set('.text-wrapper', {
          y: currentY * 1.8,
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
      <div className=' md:mx-24  flex  border-x border-t border-black/25 h-full   justify-center  '>
        {/* aca va a estar el titulo y el carrusel con los contenidos */}
        <div className='flex flex-col w-full md:flex-4 h-full   border-r border-black/25'>
          <div className='flex-1   h-full relative md:border-t border-dashed border-black/25 overflow-hidden '>
            <div className='  border-x md:border-y border-dashed border-black/25 absolute top-0 left-[3vw] md:left-1/8 md:w-6/8 w-[90vw] h-full '></div>
            <div className='  text-wrapper md:absolute top-0 md:left-1/8 w-full md:w-6/8 h-full gap-48  flex  flex-col  items-center justify-around -translate-y-[-100%]   '>
              {info.map((items, index) => {
                return (
                  <div
                    key={index}
                    className='titlesElements  md:gap-6 transition-all duration-150 ease-out flex max-w-xl  '>
                    <div className=' flex self-start  '></div>
                    <div className='  text-center  flex  flex-col justify-center items-center gap-4 '>
                      <div className='flex align-center flex-col gap-2  items-center content-center max-w-2xs md:max-w-full   '>
                        <div className='  '>
                          <img
                            src={items.icon}
                            alt={items.icon}
                          />
                        </div>
                        <h2 className='px-4 font-bold  leading-none sm:text-tablet-title lg:text-[2.5rem] text-[1.6rem] '>
                          {items.title}
                        </h2>
                      </div>
                      <p className='font-Gotham-light text-mobile-body sm:text-tablet-subtitle lg:text-web-subtitle px-12 sm:px-16 lg:px-8 max-w-sm md:max-w-full '>
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
