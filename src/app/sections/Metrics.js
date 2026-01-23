import React from 'react'
import RollingNumber from '../components/Reusables/RollingNumber'
import BrandsMarquee from '../components/Reusables/BrandsMarquee'
import { CardNumber } from '../components/Reusables/CardNumeber'
import { Associates } from './Asociates'

const Metrics = () => {
  return (
    <section className='layout-wrap flex-col w-full min-h-screen relative py-12 md:pt-24 flex justify-center'>
      <div className='layout-grid h-full gap-y-12 md:gap-y-16 '>
        {/* Top Left: Main Title - 5 columns */}
        <div
          className='col-span-full md:col-span-5 md:col-start-2 flex flex-col justify-start gap-4 animate-[fadeInUp_0.8s_ease-out]'
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <h2 className='text-mobile-title sm:text-tablet-text lg:text-[3.5em] font-bold tracking-tighter leading-none max-w-xl'>
            Producción propia para garantizar
            <span className='text-primary/50'> plazos y calidad</span>
          </h2>
        </div>

        {/* Top Right: Description - 7 columns */}
        <div
          className='md:h-[45vh] mb-16 col-span-full md:col-span-5 md:col-start-7  flex flex-col justify-between gap-4 animate-[fadeInUp_0.8s_ease-out]'
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <p className='font-Gotham-light  text-[1rem] max-w-2xl text-primary/80 leading-relaxed'>
            Trabajamos con proveedores líderes y producción propia para asegurar
            previsibilidad y resultados. Nuestro modelo integra diseño,
            fabricación y gestión bajo un mismo estándar de calidad, lo que nos
            permite controlar cada etapa del proceso con precisión. Desde la
            selección de materiales y la planificación productiva hasta la
            ejecución y la entrega final, garantizamos consistencia,
            cumplimiento de plazos y terminaciones acordes a lo proyectado.
          </p>
        </div>

        {/* Bottom: Associates Title */}
      </div>
      <div className='flex flex-col md:flex-row md:flex-wrap gap-6 justify-end md:px-16 px-6'>
        <CardNumber
          title='Producción'
          number={333}
          description='Metros cuadrados fabricados anualmente'
          animationDelay='0.6s'
          suffix='M²+'
        />

        <CardNumber
          title='Velocidad'
          number={83}
          description='Días promedio de entrega garantizados en cada proyecto'
          animationDelay='1.2s'
          suffix='días'
        />

        <CardNumber
          title='Impact'
          number={95}
          suffix='%'
          description='Tasa de eficiencia en fabricación y gestión de calidad'
          animationDelay='1.8s'
        />
      </div>
      <div className='col-span-full  flex flex-col '>
        <Associates />
      </div>
    </section>
  )
}

export default Metrics
