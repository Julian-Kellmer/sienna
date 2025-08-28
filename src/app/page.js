'use client'
import Image from 'next/image'
import Hero from './sections/Hero.js'

import Proyects from './sections/Proyects.js'
import Lenis from 'lenis'
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import Hero2 from './sections/Hero2.js'
import gsap from 'gsap'
import Metrics from './sections/Metrics.js'
import History from './sections/History.js'
import FinalSteps from './sections/FinalSteps.js'
import Footer from './components/Footer.js'
import LoadingPage from './sections/LoadingPage.js'
import WhyUsgrid from './sections/WhyUsgrid.js'

export default function Home() {
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
        <LoadingPage />
        <ReactLenis
          root
          options={{ autoRaf: false }}
          ref={lenisRef}
        />
        {/* <Hero /> */}
        <Hero2 />
        <WhyUsgrid /> 
        <Proyects />
        <Metrics />
        <History />
        <FinalSteps />
        <Footer /> 
      </div>
    </>
  )
}
