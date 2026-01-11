'use client'
import Lenis from 'lenis'
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef, useState } from 'react'
import Hero2 from './sections/Hero2.js'
import gsap from 'gsap'
import Metrics from './sections/Metrics.js'
import FinalSteps from './sections/FinalSteps.js'
import Footer from './components/Footer.js'
import WhyUsgrid from './sections/WhyUsgrid.js'
import Proyect2 from './sections/Proyect2.js'

export default function Home() {
  const [options, setOptions] = useState(false)
  const lenisRef = useRef()

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1500)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <>
      <div className=' relative'>
        <ReactLenis
          root
          options={{ autoRaf: false }}
          ref={lenisRef}
        />
        <Hero2 />
        <WhyUsgrid />
        <Proyect2 />

        <Metrics />
        {/* <History /> */}
        <FinalSteps />
        <Footer />
      </div>
    </>
  )
}
