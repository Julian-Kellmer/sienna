import React from 'react'

const Button = ({ text, action }) => {
  return (
    <a
      href='/'
      className='group relative px-4 py-2 md:px-8 md:py-3 text-mobile-body    '>
      <span className='absolute inset-0 border border-dashed border-black/50 '></span>
      {text}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='14'
        height='14'
        viewBox='0 0 20 20'
        className='absolute top-[-7px] left-[-7px] transition-transform duration-500 group-hover:rotate-[180deg]'>
        <path
          fill='gray'
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
          fill='gray'
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
          fill='gray'
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
          fill='gray'
          d='M10 0c.423 0 .766.343.766.766v8.467h8.468a.766.766 0 1 1 0 1.533h-8.468v8.468a.766.766 0 1 1-1.532 0l-.001-8.468H.766a.766.766 0 0 1 0-1.532l8.467-.001V.766A.768.768 0 0 1 10 0Z'
        />
      </svg>
    </a>
  )
}

export default Button
