'use client'

import React from 'react'

const BrandsMarquee = ({ brands = [], direction = 'left' }) => {
  // Duplicate the list 4 times to ensure it covers enough width for the 50% shift
  // [A][A][A][A] -> shift by 50% (covers [A][A]) -> lands on start of 3rd [A] which is seamless.
  const loopedBrands = [...brands, ...brands, ...brands, ...brands]

  return (
    <div className='w-full overflow-hidden relative fade-mask-x'>
      {/* The scrolling container */}
      <div
        className='flex w-max animate-marquee'
        style={{
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}>
        {loopedBrands.map((src, index) => (
          <div
            key={index}
            className={`flex items-center justify-center mx-8 w-[250px] md:w-[200px] h-[150px] grayscale opacity-70 `}>
            <img
              src={src}
              alt={`Brand ${index}`}
              className='max-w-full max-h-full object-contain'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandsMarquee
