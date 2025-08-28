'use client'
import React, { useEffect, useState } from 'react'

const Hero2 = () => {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className='relative h-[120vh] w-full overflow-hidden'>
      <div
        className='absolute w-full h-[120vh] bg-bottom bg-cover'
        style={{
          backgroundImage: "url('/images/background.jpg')",
          transform: `translateY(${offsetY * 0.4}px)`, // mueve más lento
        }}
      />
      <div className='relative z-10 flex  bg-white text-center  h-[45vh]'>
        <div className='flex-1  '></div>
        <div className='flex-16 h-full  flex flex-col justify-center items-start px-8 border-x border-black/25 border-dashed '>
          <h1 className='text-primary tracking-tighter leading-none text-mobile-title sm:text-tablet-title lg:text-web-title font-bold md:max-w-[50%] text-start '>
            Incursiona con nosotros en el futuro de la construcción
          </h1>
          <p className='font-Gotham-light text-mobile-body mt-4 text-start'>
            Diseño a medida, calidad garantizada y entregas en tiempo récord.
          </p>
        </div>
        <div className='flex-1 '></div>
      </div>
    </section>
  )
}

export default Hero2
