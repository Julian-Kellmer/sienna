'use client'
import React, { use, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import proyectos from '../mockdata/proyectos'

const categorias = ['Casas', 'Turismo']

const Proyects = () => {
  const [isSelected, setIsSelected] = useState('')
  return (
    <section
      id='proyectos'
      className='  bg-white '>
      <div className='flex flex-col  h-full '>
        <div className='flex w-full  lg:px-24 border-t border-b border-black/25'>
          <div className='flex w-full  '>
            <div
              id='titulos'
              className=' md:flex-12  flex  h-full  px-8 py-16 gap-4'>
              <h2 className='   title font-bold tracking-tight text-primary leading-none  text-mobile-title md:text-tablet-title md:max-w-3xl md:px-32 lg:text-web-title'>
                Nuestros ultimos{' '}
                <span className='text-primary/50'>Proyectos</span>
              </h2>
            </div>
            <div className=' flex-7'></div>
          </div>
        </div>

        <div className='flex flex-9 gap-2 lg:flex-row flex-col  '>
          <div className=' main-proyect border-r border-dashed border-black/25 flex-1 flex justify-center items-center p-6'>
            <div className='gap-8  w-full  h-full  flex-col flex justify-center items-start border border-black/25 border-dashed  p-6'>
              <div className='image-container relative w-full h-auto aspect-video'>
                <Image
                  src='/casas/45SenL/1.png'
                  alt='Foto del proyecto principal'
                  fill
                  className='object-cover'
                />
              </div>
              <div className=' flex flex-col gap-2'>
                <Link href={`/proyectos/${proyectos[0].id}`}>
                  Ver Proyecto {`->`}
                </Link>
                <h3 className='text-[1.8rem] text-black font-bold tracking-tight  leading-none'>
                  45 S en L
                </h3>
              </div>
            </div>
          </div>
          <div className='flex-1 grid md:grid-cols-2  gap-2 p-4'>
            {proyectos.slice(1, 5).map((proyecto) => (
              <div
                key={proyecto.id}
                className=' w-full border border-dashed border-black/25'>
                <div className=' gap-2 p-4 flex flex-col justify-center items-start   '>
                  <div className='image-container relative w-full aspect-video '>
                    <Image
                      src={proyecto.images[0]}
                      alt={`Foto del proyecto ${proyecto.nombre}`}
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Link href={`/proyectos/${proyecto.id}`}>
                      Ver Proyecto {`->`}
                    </Link>
                    <h3 className='text-[1.4rem] text-black font-bold tracking-tight leading-none'>
                      {proyecto.nombre}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex-1 mt-16'>
          {proyectos.length > 5 && (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  border-black/25 mt-4 px-4'>
              {proyectos.slice(5).map((proyecto) => (
                <div
                  key={proyecto.id}
                  className='w-full border border-dashed border-black/25'>
                  <div className='gap-2 p-4 flex flex-col justify-center items-start'>
                    <div className='image-container relative w-full aspect-video'>
                      <Image
                        src={proyecto.images[0]}
                        alt={`Foto del proyecto ${proyecto.nombre}`}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <Link href={`/proyectos/${proyecto.id}`}>
                        Ver Proyecto {`->`}
                      </Link>
                      <h3 className='text-[1.4rem] text-black font-bold tracking-tight leading-none'>
                        {proyecto.nombre}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* <div className='w-full h-[15vh]   mt-2  border-t border-dashed border-black/25'></div> */}
    </section>
  )
}

export default Proyects
