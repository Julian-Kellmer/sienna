'use client'
import React, { use, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import proyectos from '../mockdata/proyectos'

const categorias = ['viviendas', 'casas', 'oficinas']

const Proyects = () => {
  const [isSelected, setIsSelected] = useState('')
  return (
    <section className=' lg:px-24 bg-white '>
      <div className=' flex flex-col border-x-2 border-b-2 h-full border-black/25  '>
        <div className='flex flex-1 '>
          <div className='flex-6'></div>
          <div className='flex-3 border-l border-black/25'></div>
        </div>
        <div className='flex-2 border-y  border-black/25 flex'>
          <div className='justify-end flex flex-1 flex-col titulos h-full  px-8 py-8 gap-4'>
            <h2 className='  text-black title font-bold tracking-tight  leading-none text-mobile-title md:text-web-title  max-w-2xl'>
              Nuestros Proyectos
            </h2>
          </div>
          {/* <div className='flex-1 categorys flex justify-end items-end p-8 lg:gap-16 gap-2'>
            {categorias.map((cat, index) => {
              return (
                <div
                  key={index}
                  className={
                    isSelected === cat
                      ? 'capitalize border-b '
                      : 'capitalize border-none'
                  }
                  onClick={() => setIsSelected(cat)}>
                  {cat}
                </div>
              )
            })}
          </div> */}
        </div>
        <div className='flex flex-9 gap-2 lg:flex-row flex-col  '>
          <div className=' main-proyect border-r border-dashed border-black/25 flex-1 flex justify-center items-center '>
            <div className='gap-8 p-12 w-full  h-full  flex-col flex justify-center items-start '>
              <div className='image-container relative w-full h-auto aspect-video'>
                <Image
                  src='/images/background.jpg'
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
                  Modulo Bariloche
                </h3>
              </div>
            </div>
          </div>
          <div className='flex-1 grid grid-cols-2  gap-2 p-4'>
            {proyectos.slice(1, 5).map((proyecto) => (
              <div
                key={proyecto.id}
                className=' w-full border border-dashed border-black/25'>
                <div className='gap-2 p-4 flex flex-col justify-center items-start  '>
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
        </div>
        <div className='flex-1  border-t border-black/25'>
          {proyectos.length > 5 &&
            div(
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 border-t border-black/25 mt-4'>
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
    </section>
  )
}

export default Proyects
