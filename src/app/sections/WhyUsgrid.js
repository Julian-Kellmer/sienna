'use client'
import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import info from '../mockdata/whyus'

const WhyUs = () => {
  gsap.registerPlugin(ScrollTrigger)

  // Agrupo en filas de 3
  const rows = []
  for (let i = 0; i < info.length; i += 3) {
    rows.push(info.slice(i, i + 3))
  }

  return (
    <section
      id='nosotros'
      className='whyUs relative overflow-hidden'>
      <div className='title flex flex-col border-y border-black/25 md:px-64 md:py-16 gap-4 py-8 px-4'>
        <h1 className='tracking-tighter leading-none text-mobile-title sm:text-tablet-title lg:text-web-title font-bold'>
          Porque elegirnos es la <br />
          <span className='text-primary/75'> mejor opción</span>
        </h1>
        <p className='font-Gotham-light text-mobile-body'>
          En Sienna nuestra prioridad siempre sos vos
        </p>
      </div>

      <div className='flex md:h-screen'>
        <div className='flex-1 hidden sm:block'></div>

        {/* div central */}
        <div className='flex-12 border-x border-black/25 flex flex-col items-center justify-center'>
          <div className='container relative'>
            {rows.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                <div className='flex relative'>
                  {row.map((item, i) => (
                    <React.Fragment key={i}>
                      <div className='flex-1 flex flex-col gap-4 px-2 md:px-6 py-8 text-center items-center justify-center transition-all hover:bg-secondary/25 duration-550 ease-in-out relative'>
                        <img
                          className='w-8 h-8 md:w-16 md:h-16 mx-auto'
                          src={item.icon}
                          alt=''
                        />
                        <p className=' text-mobile-body md:text-[18px] font-Primary font-bold'>
                          {item.title}
                        </p>
                        <p className='text-[14px] font-Gotham-light md:block hidden md:px-8'>
                          {item.subtitle}
                        </p>
                      </div>
                      {/* separador vertical (excepto al final de la fila) */}
                      {i < row.length - 1 && (
                        <div className='relative border-l border-dashed border-black/25'>
                          {/* SVG en la intersección vertical */}
                          {rowIndex < rows.length - 1 && (
                            <div className='absolute bottom-[-7px] left-1/2 -translate-x-1/2 '>
                              <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 20 20'
                        >
                        <path
                          fill='black'
                          d='M10 0c.423 0 .766.343.766.766v8.467h8.468a.766.766 0 1 1 0 1.533h-8.468v8.468a.766.766 0 1 1-1.532 0l-.001-8.468H.766a.766.766 0 0 1 0-1.532l8.467-.001V.766A.768.768 0 0 1 10 0Z'
                        />
                      </svg>
                            </div>
                          )}
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* separador horizontal (excepto en la última fila) */}
                {rowIndex < rows.length - 1 && (
                  <div className='relative border-b border-dashed border-black/25 w-full'>
                    {/* SVG en el medio del separador horizontal */}
                    
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className='flex-1 hidden sm:block'></div>
      </div>
    </section>
  )
}

export default WhyUs
