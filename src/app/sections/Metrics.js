import React from 'react'

const Metrics = () => {
  return (
    <section className='flex-col w-full  h-[100svh] relative md:py-0 py-4 flex '>
      <div className='hidden md:flex h-full'>
        <div className='flex-4 border border-dashed border-black/25'></div>
        <div className='flex-2 border border-dashed border-black/25'></div>
        <div className='flex-2 border border-dashed border-black/25'></div>
      </div>
      <div className='flex h-full md:flex-row flex-col'>
        <div className=' flex-3 md:flex-4 border border-dashed border-black/25 flex flex-col align-center content-center items-center justify-center'>
          <div className='flex flex-col gap-4'>
            <h3 className=' text-web-title font-bold tracking-tighter leading-none'>
              Un mejor futuro arranca <br /> <span className='text-primary/50'>en nuestra fabrica</span>
            </h3>
            <p className='font-Gotham-light'>
              En Sienna nos aseguramos que tengas la mejor experiencia
            </p>
          </div>
        </div>
        <div className='flex align-center  flex-2 border border-dashed border-black/25 flex-col align-center content-center items-center justify-center'>
          <div className='flex flex-col  items-center  '>
            <h3 className='font-bold text-[10rem] leading-none'>60</h3>
            <p className='font-Gotham-light '>Dias promedio de entrega</p>
          </div>
        </div>
        <div className='flex align-center  flex-2 border border-dashed border-black/25 flex-col align-center content-center items-center justify-center'>
          <div className='flex flex-col  items-center  '>
            <h3 className='font-bold text-[10rem] leading-none'>90</h3>
            <p className='font-Gotham-light '>Proyectos realizados</p>
          </div>
        </div>
      </div>
      <div className=' hidden md:flex h-full'>
        <div className='flex-4 border border-dashed border-black/25'></div>
        <div className='flex-2 border border-dashed border-black/25'></div>
        <div className='flex-2 border border-dashed border-black/25'></div>
      </div>
    </section>
  )
}

export default Metrics
