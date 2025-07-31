import Image from 'next/image'
import React from 'react'
import Background from '../../../public/images/background.jpg'
import Button from '../components/Button'
const Hero = () => {
  return (
    <section className='  h-screen bg-red-300'>
      <div
        className='relative w-full h-full flex  flex-col items-center  pt-38 sm:pt-10 md:justify-center bg-cover bg-[center_55%] md:bg-[center_45%]  '
        id='hero-container'
        style={{
          backgroundImage: `url(${Background.src})`,
          // backgroundSize: 'cover',
          // backgroundPosition: 'md:45% 55% md:45% 0% ',
        }}>
        <div className='md:block hidden flex-1'></div>
        <div
          id='hero-content'
          className='flex flex-4 flex-col  items-center gap-8 max-w-6xl   md:p-0'>
          <div
            className=' flex flex-col items-center gap-4  '
            id='text-content'>
            <h2 className=' font-special text-mobile-title sm:text-tablet-title lg:text-web-title text-[#222122] text-center font-bold tracking-tight  leading-none  '>
              Incursiona con nosotros en el futuro de la construcción
            </h2>
            <h4 className=' text-mobile-subtitle  lg:text-web-subtitle   sm:text-tablet-subtitle text-center  px-4'>
              Diseño a medida, calidad garantizada y entregas en tiempo récord.
            </h4>
          </div>
          <div className='flex gap-8'>
            <Button text={'Brochure'} />
            <Button text={'Agenda tu reunion'} />
          </div>
        </div>
        <div className='flex-1'></div>
      </div>
    </section>
  )
}

export default Hero
