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
    titulo: 'Seña inicial del 5%',
    descripcion:
      'Con una seña del 5%, comenzamos a trabajar en el proyecto con nuestro equipo de arquitectos. (Incluye diseño personalizado, asesoramiento técnico y definición de materiales) ⏳Duración estimada: 1 mes',
    foto: '/images/background.jpg',
    video: '/lastSteps/4.mp4',
  },
  {
    numero: '03',
    titulo: 'Entrega del proyecto de arquitectura',
    descripcion:
      'Te presentamos el proyecto completo: planos, distribución, visuales y elección de terminaciones. Listo para validar y avanzar.',
    foto: '/images/background.jpg',
    video: '/lastSteps/3.mp4',
  },
  {
    numero: '04',
    titulo: 'Firma del contrato y conexión con fábrica',
    descripcion:
      'Una vez aprobado el proyecto, firmamos el contrato y comenzamos la producción en planta. Se completa el anticipo hasta el 50% con un nuevo pago del 45%. ⏳Duración estimada: 1 mes',
    foto: '/lastSteps/2.jpg',
  },
  {
    numero: '05',
    titulo: 'Control de avance de obra',
    descripcion:
      'A los 45 días del inicio en fábrica, realizás el segundo pago del 40%. Podés seguir el avance con fotos, visitas o video.',
    foto: '/lastSteps/5.jpg',
  },
  {
    numero: '06',
    titulo: 'Finalización y entrega',
    descripcion:
      'Finalizamos la obra en planta y coordinamos la entrega. Se abona el 10% restante contra entrega. Tiempo total desde el inicio en fábrica: entre 60 y 90 días',
    foto: '/images/background.jpg',
    video: '/lastSteps/66.mp4',
  },
  {
    numero: '07',
    titulo: 'Transporte e instalación',
    descripcion:
      'Transportamos e instalamos en destino. Coordinamos transporte, grúa y conexión final.',
    foto: '/lastSteps/7png.png',
  },
]

const FinalSteps = () => {
  return (
    <section
      id='pasos'
      className='bg-secondary w-full flex flex-col gap-12 md:gap-16 px-4 lg:px-16 py-12 md:py-12'>
      {/* Título */}
      <div className='layout-wrap'>
        <div className='layout-grid'>
          <div className='col-span-4 md:col-span-10'>
            <h1 className='tracking-tighter leading-none text-mobile-title sm:text-tablet-title lg:text-[3em] font-bold text-primary'>
              Un proceso claro para <br />
              <span className='text-primary/75'>desarrollar tu proyecto</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Primera Fila: Items 1-4 */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {pasos.slice(0, 4).map((paso) => (
          <div
            key={paso.numero}
            className='w-full'>
            <GlassCard {...paso} />
          </div>
        ))}
      </div>

      {/* Segunda Fila: Items 5-7 + Texto */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {pasos.slice(4, 7).map((paso) => (
          <div
            key={paso.numero}
            className='w-full'>
            <GlassCard {...paso} />
          </div>
        ))}

        {/* Texto final donde estaría el item 8 */}
        <div className='w-full flex items-center justify-center p-8 md:p-12 '>
          <div className='text-center'>
            <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight'>
              Con entrega llave en mano, tu proyecto está listo para habitar
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalSteps
