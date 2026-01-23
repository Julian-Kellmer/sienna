import RollingNumber from './RollingNumber'

export const CardNumber = ({
  title,
  number,
  description,
  animationDelay = '0.6s',
  suffix = '',
}) => {
  return (
    <div
      className='relative border border-primary/20 flex flex-col gap-16 justify-start p-6 md:p-6 animate-[fadeInUp_0.8s_ease-out]'
      style={{ animationDelay: animationDelay, animationFillMode: 'both' }}>
      <p className='text-xs md:text-sm font-Gotham-light text-primary/50 uppercase tracking-wider mb-2'>
        {title}
      </p>
      <div className='mb-3'>
        <RollingNumber
          number={number}
          suffix={suffix}
          textClassName='font-[900] leading-none tracking-tight text-[4.5rem] md:text-[5rem] lg:text-[6rem]'
          itemHeightClassName='h-[4.5rem] md:h-[5rem] lg:h-[6rem]'
        />
      </div>
      <p className='font-Gotham-light text-sm md:text-base text-primary/70 leading-relaxed'>
        {description}
      </p>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='14'
        height='14'
        viewBox='0 0 20 20'
        className='absolute top-[-7px] left-[-7px] transition-transform duration-500 group-hover:rotate-[180deg]'>
        <path
          fill='secondary'
          d='M10 0c.423 0 .766.343.766.766v8.467h8.468a.766.766 0 1 1 0 1.533h-8.468v8.468a.766.766 0 1 1-1.532 0l-.001-8.468H.766a.766.766 0 0 1 0-1.532l8.467-.001V.766A.768.768 0 0 1 10 0Z'
        />
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='14'
        height='14'
        viewBox='0 0 20 20'
        className=' absolute top-[-7px] right-[-7px] transition-transform duration-500 group-hover:rotate-[180deg]'>
        <path
          fill='secondary'
          d='M10 0c.423 0 .766.343.766.766v8.467h8.468a.766.766 0 1 1 0 1.533h-8.468v8.468a.766.766 0 1 1-1.532 0l-.001-8.468H.766a.766.766 0 0 1 0-1.532l8.467-.001V.766A.768.768 0 0 1 10 0Z'
        />
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='14'
        height='14'
        viewBox='0 0 20 20'
        className='absolute bottom-[-7px] left-[-7px] transition-transform duration-500 group-hover:rotate-[180deg]'>
        <path
          fill='secondary'
          d='M10 0c.423 0 .766.343.766.766v8.467h8.468a.766.766 0 1 1 0 1.533h-8.468v8.468a.766.766 0 1 1-1.532 0l-.001-8.468H.766a.766.766 0 0 1 0-1.532l8.467-.001V.766A.768.768 0 0 1 10 0Z'
        />
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='14'
        height='14'
        viewBox='0 0 20 20'
        className='absolute bottom-[-7px] right-[-7px] transition-transform duration-500 group-hover:rotate-[180deg]'>
        <path
          fill='secondary'
          d='M10 0c.423 0 .766.343.766.766v8.467h8.468a.766.766 0 1 1 0 1.533h-8.468v8.468a.766.766 0 1 1-1.532 0l-.001-8.468H.766a.766.766 0 0 1 0-1.532l8.467-.001V.766A.768.768 0 0 1 10 0Z'
        />
      </svg>
    </div>
  )
}
