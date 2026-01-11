import React from 'react'
import GlassCard from '../components/GlassCard'

const pasos = [
  {
    numero: '01',
    titulo: 'Reunión inicial',
    descripcion:
      'Nos reunimos para conocer en profundidad tu idea de proyecto. Escuchamos tus necesidades, compartimos referencias y definimos juntos el alcance.',
    foto: '/lastSteps/1.jpg',
  },
  {
    numero: '02',
    titulo: 'Seña inicial del 15%',
    descripcion:
      'Concretamos tu compromiso y comenzamos con el desarrollo del proyecto técnico.',
    foto: '/lastSteps/2.jpg',
  },
  {
    numero: '03',
    titulo: 'Entrega del proyecto de arquitectura',
    descripcion:
      'Te presentamos propuestas conforme a tus requerimientos. Las revisás y validás antes de avanzar.',
    foto: '/images/background.jpg',
    video: '/lastSteps/3.mp4',
  },
  {
    numero: '04',
    titulo: 'Firma del contrato y conexión con fábrica',
    descripcion:
      'Una vez aprobado el proyecto, firmamos el contrato de obra y lo enviamos a fábrica con una seña del 60%.',
    foto: '/images/background.jpg',
    video: '/lastSteps/4.mp4',
  },
  {
    numero: '05',
    titulo: 'Control de avance de obra',
    descripcion:
      'A lo largo del proceso, te mostramos cómo avanza todo y validamos juntos cada hito.',
    foto: '/lastSteps/5.jpg',
  },
  {
    numero: '06',
    titulo: 'Finalización y entrega',
    descripcion:
      'Entregamos la obra al finalizar con checklist de calidad y entrega oficial.',
    foto: '/images/background.jpg',
    video: '/lastSteps/66.mp4',
  },
  {
    numero: '07',
    titulo: 'Transporte e instalación',
    descripcion:
      'Traslado al terreno y armado con nuestro equipo técnico. Todo coordinado contigo.',
    foto: '/lastSteps/7png.png',
  },
]

const FinalSteps = () => {
  return (
    <section
      id='pasos'
      className='bg-white w-full flex flex-col gap-10 px-4 lg:px-16 md:pb-16'>
      <h1 className='tracking-tighter leading-none text-mobile-title sm:text-tablet-title lg:text-[3em] font-bold text-primary'>
              Siempre cumplimos  <br />
              <span className='text-primary/75'> Con lo que te prometemos</span>
            </h1>

      <div className='w-full flex flex-col gap-24'>
        {/* Fila 1 */}
        <div className='w-full flex flex-col lg:flex-row'>
          <div className='lg:flex-1 p-4 hidden lg:block'>
            <h5 className='text-[3em] font-bold tracking-tight leading-14 max-w-2xl'>
              Primeros pasos,
              <br />
              tu proyecto comienza
            </h5>
            <span className='text-primary/50 text-[3em] font-bold tracking-tight leading-14 max-w-2xl'>
              Con una sola reunión <br /> y una seña del 5%.
            </span>
          </div>
          <div className='flex-1 flex flex-col sm:flex-row  gap-6'>
            {pasos.slice(0, 2).map((paso) => (
              <div
                className='w-full sm:w-[48%]'
                key={paso.numero}>
                <GlassCard {...paso} />
              </div>
            ))}
          </div>
        </div>

        {/* Fila 2 */}
        <div className='w-full flex flex-col lg:flex-row-reverse'>
          <div className=' lg:flex-1 p-4 hidden lg:flex flex-col align-end content-end items-end   '>
            <h5 className='text-[3em] font-bold tracking-tight leading-14 max-w-xl'>
              Diseñamos tu espacio y lo hacemos oficial
            </h5>
            <span className='text-primary/50 text-[3em] font-bold tracking-tight leading-14 min-w-xl'>
              Se firma y se Confirma
            </span>
          </div>
          <div className='flex-1 flex flex-col sm:flex-row  gap-6'>
            {pasos.slice(2, 4).map((paso) => (
              <div
                className='w-full sm:w-[48%]'
                key={paso.numero}>
                <GlassCard {...paso} />
              </div>
            ))}
          </div>
        </div>

        {/* Fila 3 */}
        <div className='w-full flex flex-col lg:flex-row'>
          <div className='lg:flex-1 p-4 hidden lg:block'>
            <h5 className='text-[3em] font-bold tracking-tight leading-14 max-w-2xl'>
              Supervisamos cada detalle
            </h5>
            <span className='text-primary/50 text-[3em] font-bold tracking-tight leading-14 max-w-2xl'>
              Desde el día uno <br /> hasta que tu proyecto esté terminado.
            </span>
          </div>
          <div className='md:flex-1 flex flex-col sm:flex-row  gap-6'>
            {pasos.slice(4, 6).map((paso) => (
              <div
                className='w-full sm:w-[48%]'
                key={paso.numero}>
                <GlassCard {...paso} />
              </div>
            ))}
          </div>
        </div>

        {/* Fila 4 */}
        <div className='w-full flex flex-col lg:flex-row'>
          <div className='flex-1 w-full'>
            <GlassCard {...pasos[6]} />
          </div>
          <div className='lg:flex-1 p-4 hidden lg:block'>
            <h5 className='text-[3em] font-bold tracking-tight leading-14 max-w-2xl'>
              Transporte e instalación
            </h5>
            <span className='text-primary/50 text-[3em] font-bold tracking-tight leading-14 max-w-2xl'>
              Tu proyecto listo para habitar.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalSteps
