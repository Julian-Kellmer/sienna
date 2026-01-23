'use client'
import React from 'react'

const ContactButton = ({ text = 'Descargar Brochure', light }) => {
  // When light=true: secondary colors (for dark backgrounds)
  // When light=false: primary colors (for light backgrounds)
  const borderColor = light ? 'border-secondary' : 'border-primary'
  const borderColorDashed = light ? 'border-secondary/50' : 'border-primary/50'
  const textColor = light ? 'text-secondary' : 'text-primary'

  return (
    <button className={`relative px-8 py-3 group transition-all duration-300 `}>
      {/* Main Dashed Border */}
      <div
        className={`absolute inset-0 border border-dashed ${borderColorDashed} pointer-events-none`}
      />

      {/* Solid Corners */}
      {/* Top Left */}
      <div
        className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 ${borderColor} pointer-events-none`}
      />
      {/* Top Right */}
      <div
        className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 ${borderColor} pointer-events-none`}
      />
      {/* Bottom Left */}
      <div
        className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 ${borderColor} pointer-events-none`}
      />
      {/* Bottom Right */}
      <div
        className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 ${borderColor} pointer-events-none`}
      />

      {/* Button Text */}
      <a
        href='/SiennaBrochureCompleto.pdf'
        download
        className={`font-Gotham-medium text-sm ${textColor} capitalize tracking-wide`}>
        {text}
      </a>
    </button>
  )
}

export default ContactButton
