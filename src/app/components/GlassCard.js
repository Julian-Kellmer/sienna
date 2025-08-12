import React from 'react'

const GlassCard = ({ numero, titulo, descripcion, foto, video }) => {
  return (
    <div className='relative w-full h-120 rounded-xl overflow-hidden shadow-lg'>
      {/* Fondo: Video si existe, sino Imagen */}
      {video ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${foto})` }}
        />
      )}

      {/* Overlay Glass Effect */}
      <div className='absolute bottom-0 left-0 w-full h-full bg-linear-[360deg] from-black/50 to-transparent pb-8 px-4 flex flex-col justify-between'>
        <p className='text-white text-lg font-bold py-4'>
          <span className='text-web-title font-semibold mr-2'>{numero}</span>
          {titulo}
        </p>
        <p className='font-Gotham-light text-white text-[1.2rem] tracking-tighter font-light mt-2'>
          {descripcion}
        </p>
      </div>
    </div>
  )
}

export default GlassCard
