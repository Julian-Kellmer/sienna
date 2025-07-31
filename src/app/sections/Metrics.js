import React from 'react'

const Metrics = () => {
  return (
    <section className='w-full md:h-[50svh] relative md:py-0 py-4'>
      {/* Imagen de fondo */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: `url('/images/background.jpg')`,
        }}
      />

      <div className='absolute inset-0 bg-black/50' />

      {/* Contenido (si quisieras algo encima) */}
      <div className=' relative z-10 md:flex-row  flex-col flex  items-center justify-center h-full text-white lg:px-8 lg:gap-8'>
        {/* Acá va cualquier contenido que quieras mostrar encima */}
        <div
          id='contenedor de informacion'
          className='flex flex-3 flex-col h-full '>
          <div className='flex flex-col justify-around items-between   h-full p-4 '>
            <div className=' max-w-5xl'>
              <h3 className='tracking-tighter leading-none lg:text-web-title text-mobile-subtitle sm:text-tablet-title font-bold '>
                Diseñamos espacios con propósito. Construimos confianza. Creamos
                futuro.
              </h3>
            </div>
            <div className='flex justify-around max-w-5xl gap-12 text-center '>
              <div className='flex flex-col'>
                <p className='lg:text-web-title text-mobile-subtitle sm:text-tablet-title '>
                  +900
                </p>
                <p className='text-mobile-body lg:text-web-body sm:text-tablet-body'>
                  {' '}
                  Metros cuadrados contruidos
                </p>
              </div>
              <div className='flex flex-col'>
                <p className='lg:text-web-title text-mobile-subtitle sm:text-tablet-title'>
                  60 dias
                </p>
                <p className='text-mobile-body lg:text-web-body sm:text-tablet-body'>
                  Promedios de entregas
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-2 flex justify-start lg:gap-10'>
          {/* Imagen circular */}
          <div>
            <div className=' lg:w-20 lg:h-20 hidden lg:block rounded-full overflow-hidden outline'>
              <img
                src='/images/background.jpg'
                alt='Foto de perfil de referencia'
                className='object-cover w-full h-full'
              />
            </div>
          </div>

          {/* Contenido del testimonio */}
          <div>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-2'>
                <div className=' w-12 h-12 lg:hidden rounded-full overflow-hidden outline'>
                  <img
                    src='/images/background.jpg'
                    alt='Foto de perfil de referencia'
                    className='object-cover w-full h-full'
                  />
                </div>
                <p className='text-web-subtitle font-Gotham-light capitalize'>
                  julian kellmer
                </p>
              </div>
              <p className='px-2 lg:text-web-subtitle text-mobile-subtitle sm:text-tablet-subtitle  font-bold capitalize'>
                "Me sorprendió la rapidez y la efectividad tanto de la
                instalación como de la entrega"
              </p>
              <p className='px-2 lg:text-web-body text-mobile-body sm:text-tablet-body font-Gotham-light mt-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Metrics
