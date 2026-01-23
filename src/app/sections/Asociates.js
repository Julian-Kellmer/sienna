import BrandsMarquee from '../components/Reusables/BrandsMarquee'

const brands1 = [
  '/images/brands/quesealed.png',
  '/images/brands/robrera.png',
  '/images/brands/sanlorenzo.png',
  '/images/brands/silestone.png',
  '/images/brands/waterplac.png',
]
const brands2 = [
  '/images/brands/Dekton.png',
  '/images/brands/Jacuzzi.png',
  '/images/brands/Piazza.png',
  '/images/brands/Samsung.png',
  '/images/brands/alberturas.png',
]
export const Associates = () => {
  return (
    <section className='layout-wrap flex-col w-full min-h-screen relative py-12 md:pt-2 flex justify-center'>
      <div className='layout-grid h-full gap-y-12 md:gap-y-16 '>
        <div className='col-span-4 md:col-span-full  flex flex-col justify-end md:p-12 min-h-[20vh] md:min-h-[40vh] mt-24'>
          <h3 className=' text-mobile-title self-center text-[1.5em] font-bold tracking-tighter leading-none'>
            Asociados de confianza
          </h3>
          <div className='col-span-4 md:col-span-6 flex flex-col justify-center overflow-hidden min-h-[30vh] md:min-h-[40vh] py-8'>
            <div className='w-full '>
              <BrandsMarquee
                brands={brands1}
                direction='left'
              />
            </div>
            <div className='w-full'>
              <BrandsMarquee
                brands={brands2}
                direction='right'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
