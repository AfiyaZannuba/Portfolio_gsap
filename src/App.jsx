import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import AboutSection from "./components/AboutSection"
import CustomCursor from "./components/CustomCursor"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import ProgressBar from "./components/ProgressBar"

export default function App() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill)
    }
  }, [])

  return (
    <>
      <Header />
      <HeroSection />
      <CustomCursor />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ProgressBar />
    </>
  )
}