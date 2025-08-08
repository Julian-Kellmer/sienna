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
      end: `+=${window.innerHeight * 5}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress
        const textContainer = document.querySelector('.text-wrapper')
        const textContainerPositionHeight =
          textContainer.getBoundingClientRect().height
        const startPosition = textContainerPositionHeight
        const targetPosition = -textContainerPositionHeight
        const totalDistance = startPosition - targetPosition / 2
        const currentY = startPosition - progress * totalDistance

        gsap.set('.text-wrapper', {
          y: currentY,
        })

        gsap.set('.image-wrapper', {
          y: -progress * 600,
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
      className='whyUs h-screen relative bg-white '>
      <div className=' md:mx-24 mx-4 grid  border border-black/25  p-2 h-full grid-cols-6 grid-rows-8   '>
        <div className='  titles col-span-4 row-span-2 border border-dashed flex justify-start items-end  '>
          <div className='title-container px-16 py-8'>
            <h2 className='text-black title font-bold tracking-tight  leading-none text-mobile-body md:text-web-section p-4  max-w-xl'>
              Porque elegirnos es la mejor opción
            </h2>
            <p>En Sienna nos aseguramos de que tengas la mejor experiencia </p>
          </div>
        </div>
        <div className='relative col-span-2 row-span-8 col-start-5 '>
          <div className=' p-4 image-wrapper absolute w-full h-auto left-0 flex flex-col overflow-hidden gap-8 align-center items-center  '>
            {info.slice(0, 4).map((img, index) => {
              return (
                <div
                  key={index}
                  className='images relative w-[500px] h-[650px]   rounded-2xl overflow-hidden'>
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
        <div className='mx-24  col-span-4 row-span-6 row-start-3  relative outline outline-dashed overflow-hidden'>
          <div className='text-wrapper absolute top-0 left-1/8 w-6/8  h-full flex flex-col justify-around -translate-y-[-100%]   '>
            {info.slice(0, 5).map((items, index) => {
              return (
                <div
                  key={index}
                  className='titlesElements transition-all duration-150 ease-out flex items-center justify-between '>
                  <div className=' flex flex-1 self-start '>
                    <div className='mt-[10px] rounded-full bg-primary/60 p-2 '>
                      <img
                        src={items.icon}
                        alt='icono del titulo'
                      />
                    </div>
                  </div>
                  <div className='text-black flex-6 text-center flex flex-col justify-center align-center items-center gap-2 '>
                    <h1 className=' md:text-web-subtitle text-mobile-subtitle'>
                      {items.title}
                    </h1>
                    <h2 className='text-primary'>{items.subtitle}</h2>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
