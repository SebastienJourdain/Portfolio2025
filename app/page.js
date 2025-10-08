import Image from "next/image";
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'



export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </SmoothScroll>
  )
}