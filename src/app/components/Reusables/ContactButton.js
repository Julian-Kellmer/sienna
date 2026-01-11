'use client'
import React from 'react'

const ContactButton = ({ text = 'Contactanos', onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-8 py-3 group transition-all duration-300 ${className}`}>
      {/* Main Dashed Border */}
      <div className='absolute inset-0 border border-dashed border-primary/50 pointer-events-none' />

      {/* Solid Corners */}
      {/* Top Left */}
      <div className='absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary pointer-events-none' />
      {/* Top Right */}
      <div className='absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary pointer-events-none' />
      {/* Bottom Left */}
      <div className='absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary pointer-events-none' />
      {/* Bottom Right */}
      <div className='absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary pointer-events-none' />

      {/* Button Text */}
      <span className='font-Gotham-medium text-sm  text-primary capitalize tracking-wide'>
        {text}
      </span>
    </button>
  )
}

export default ContactButton
