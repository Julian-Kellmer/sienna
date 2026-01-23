'use client'
import React, { useEffect, useRef } from 'react'
import info from '../mockdata/whyus'
import ContactButton from '../components/Reusables/ContactButton'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const WhyUs = () => {
  const containerRef = useRef(null)
  const leftColRef = useRef(null)
  const rightColRef = useRef(null)
  const infoblockref = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Only apply animation on desktop
    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom 40%',
        pin: leftColRef.current,
        pinSpacing: false,
      })
    })

    // Animate info blocks on scroll
    infoblockref.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%', // Starts when top of element hits 85% of viewport height
            toggleActions: 'play none none reverse',
          },
        },
      )
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      id='nosotros'
      ref={containerRef}
      className='whyUs layout-wrap relative py-12 md:pt-24 '>
      <div className='layout-grid h-full items-start'>
        {/* Left Column - Pinned */}
        <div
          ref={leftColRef}
          className='col-span-4 md:col-start-2 md:col-span-5 flex flex-col justify-center relative'>
          <div className='flex flex-col gap-6 md:gap-8 pr-4 md:pr-12'>
            <h1 className='tracking-tighter leading-none text-mobile-title sm:text-tablet-title lg:text-[3em] font-bold text-primary'>
              Porque elegirnos es la <br />
              <span className='text-primary/75'> mejor opción</span>
            </h1>
            <p className='font-Gotham-light text-mobile-body text-primary/80'>
              En SIENNA nuestra prioridad siempre sos vos.
            </p>
            <div className='flex'>
              <ContactButton
                light={false}
                calendly={true}
                text='Agenda tu reunión'
              />
            </div>
          </div>
        </div>

        {/* Right Column - Scrollable List */}
        <div
          ref={rightColRef}
          className='col-span-4 md:col-start-7 md:col-span-5 flex flex-col  gap-8 '>
          {info.map((item, index) => (
            <div
              ref={(el) => (infoblockref.current[index] = el)}
              key={index}
              className='flex flex-col gap-4 border-b border-black/10 last:border-b-0 justify-start py-4'>
              <img
                className='w-8 h-8 md:w-12 md:h-12'
                src={item.icon}
                alt=''
              />
              <h3 className='text-2xl md:text-2xl font-bold font-Primary text-primary'>
                {item.title}
              </h3>
              <p className='text-sm md:text-base font-Gotham-light text-primary/80 leading-relaxed'>
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
