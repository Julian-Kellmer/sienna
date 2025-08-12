'use client'
import Image from 'next/image'
import Hero from './sections/Hero.js'
import WhyUs from './sections/WhyUs.js'
import WhyUsReplic from './sections/WhyUsReplic.js'
import Proyects from './sections/Proyects.js'
import Lenis from 'lenis'
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Metrics from './sections/Metrics.js'
import History from './sections/History.js'
import FinalSteps from './sections/FinalSteps.js'
import Footer from './components/Footer.js'
import LoadingPage from './sections/LoadingPage.js'

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
      <div className='h-[200vh] relative'>
        <LoadingPage/>
        <ReactLenis
          root
          options={{ autoRaf: false }}
          ref={lenisRef}
        />
        <Hero />
        <WhyUsReplic />
        <Proyects />
        <Metrics />
        <History />
        <FinalSteps />
        <Footer />
      </div>
    </>
  )
}
