'use client'
import React from 'react'

const ContactButton = ({ text, className = '', light = true, calendly }) => {
  // When light=true: secondary colors (for dark backgrounds)
  // When light=false: primary colors (for light backgrounds)
  const borderColor = light ? 'border-secondary' : 'border-primary'
  const borderColorDashed = light ? 'border-secondary/50' : 'border-primary/50'
  const borderColorDashedHover = light
    ? 'group-hover:border-secondary/80'
    : 'group-hover:border-primary/80'
  const textColor = light ? 'text-secondary' : 'text-primary'
  const bgHover = light
    ? 'group-hover:bg-secondary/10'
    : 'group-hover:bg-primary/10'
  // Inject Calendly assets if needed
  React.useEffect(() => {
    if (calendly) {
      const head = document.head
      const link = document.createElement('link')
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      link.rel = 'stylesheet'

      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true

      if (
        !document.querySelector(
          'link[href="https://assets.calendly.com/assets/external/widget.css"]',
        )
      ) {
        head.appendChild(link)
      }
      if (
        !document.querySelector(
          'script[src="https://assets.calendly.com/assets/external/widget.js"]',
        )
      ) {
        document.body.appendChild(script)
      }
    }
  }, [calendly])

  const handleClick = (e) => {
    if (calendly) {
      e.preventDefault()
      if (typeof window !== 'undefined' && window.Calendly) {
        window.Calendly.initPopupWidget({
          url: 'https://calendly.com/siennamodular/30min',
        })
      }
    } else {
      const phone = '+5491161182622'
      const message = encodeURIComponent(
        'Hola, Me gusataria recibir mas informarcion de SIENNA MODULAR.',
      )
      window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`relative px-8 py-3 group transition-all duration-300 hover:scale-105 ${className}`}>
      {/* Main Dashed Border */}
      <div
        className={`absolute inset-0 border border-dashed ${borderColorDashed} ${borderColorDashedHover} ${bgHover} pointer-events-none transition-all duration-300`}
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
      <span
        className={`font-Gotham-medium text-sm ${textColor} capitalize tracking-wide`}>
        {text}
      </span>
    </button>
  )
}

export default ContactButton
