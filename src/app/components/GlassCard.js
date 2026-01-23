import React from 'react'

const GlassCard = ({ numero, titulo, descripcion, foto, video }) => {
  return (
    <div className='relative w-full h-[500px] md:h-[550px] rounded-2xl overflow-hidden shadow-xl'>
      {/* Fondo: Video si existe, sino Imagen */}
      {video ? (
        <video
          className='absolute top-0 left-0 w-full h-full object-cover'
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <div
          className='absolute top-0 left-0 w-full h-full bg-cover bg-center'
          style={{ backgroundImage: `url(${foto})` }}
        />
      )}

      {/* Overlay con gradiente */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />

      {/* Contenido */}
      <div className='absolute inset-0 py-6 px-4 flex flex-col justify-between'>
        {/* Número arriba a la izquierda - pequeño */}
        <div>
          <span className='text-white/60 bg-primary/30 backdrop-blur-sm p-2 rounded-lg text-sm md:text-base font-Gotham-medium tracking-wider'>
            {numero}
          </span>
        </div>

        {/* Título y descripción abajo */}
        <div className='flex flex-col gap-3 md:gap-4'>
          <h3 className='text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight'>
            {titulo}
          </h3>
          <p className='text-white/90 text-sm md:text-base font-Gotham-light leading-relaxed'>
            {descripcion}
          </p>
        </div>
      </div>
    </div>
  )
}

export default GlassCard
