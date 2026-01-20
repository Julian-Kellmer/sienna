import React from 'react'
import RollingNumber from '../components/Reusables/RollingNumber'
import BrandsMarquee from '../components/Reusables/BrandsMarquee'

const brands1 = [
  '/images/brands/quesealed.png',
  '/images/brands/robrera.png',
  '/images/brands/sanlorenzo.png',
  '/images/brands/silestone.png',
  '/images/brands/waterplac.png',
]
const brands2 = [
  '/images/brands/Dekton.png',
  '/images/brands/Jacuzzi.png',
  '/images/brands/Piazza.png',
  '/images/brands/Samsung.png',
  '/images/brands/alberturas.png',
]
const Metrics = () => {
  return (
    <section className='layout-wrap flex-col w-full min-h-screen relative py-12 md:py-0 flex justify-center'>
      <div className='layout-grid h-full'>
        {/* Top Left: Main Text */}
        <div className='col-span-4 md:col-span-6  flex flex-col justify-center  md:p-16 gap-4 md:min-h-[40vh] md:min-h-[50vh]'>
          <h3 className='text-mobile-title sm:text-tablet-text lg:text-[3em] font-bold tracking-tighter leading-none'>
            Un mejor futuro arranca <br />{' '}
            <span className='text-primary/50'>en nuestra fabrica</span>
          </h3>
          <p className='font-Gotham-light text-mobile-body max-w-sm'>
            En SIENNA nos aseguramos que tengas la mejor experiencia y eso tambien es gracias a que trabajamos con los mejores proveedores
          </p>
        </div>

        {/* Top Middle: Metric 60 */}
        <div className='col-span-2 md:col-span-3  flex flex-col items-center justify-center p-4 min-h-[25vh] md:min-h-[50vh]'>
          <RollingNumber
            number={60}
            textClassName='font-bold leading-none text-[5rem] md:text-[7rem]'
            itemHeightClassName='h-[5rem] md:h-[7rem]'
          />
          <p className='font-Gotham-light text-center text-sm md:text-base'>
            Dias promedio de entrega
          </p>
        </div>

        {/* Top Right: Metric 90 */}
        <div className='col-span-2 md:col-span-3  flex flex-col items-center justify-center p-4 min-h-[25vh] md:min-h-[50vh]'>
          <RollingNumber
            number={90}
            textClassName='font-bold leading-none text-[5rem] md:text-[7rem]'
            itemHeightClassName='h-[5rem] md:h-[7rem]'
          />
          <p className='font-Gotham-light text-center text-sm md:text-base'>
            Proyectos realizados
          </p>
        </div>

        {/* Bottom Left: Associates Title */}
        <div className='col-span-4 md:col-span-full  flex flex-col justify-end md:p-12 min-h-[20vh] md:min-h-[40vh]'>
          <h3 className='hidden  text-mobile-title sm:text-tablet-text lg:text-[3em] font-bold tracking-tighter leading-none'>
            Asociados de confianza
          </h3>
          <div className='col-span-4 md:col-span-6 flex flex-col justify-center overflow-hidden min-h-[30vh] md:min-h-[40vh] py-8'>
            <div className='w-full '>
              <BrandsMarquee
                brands={brands1}
                direction='left'
              />
            </div>
            <div className='w-full'>
              <BrandsMarquee
                brands={brands2}
                direction='right'
              />
            </div>
          </div>
        </div>

        {/* Bottom Right: Marquees */}
      </div>
    </section>
  )
}

export default Metrics
