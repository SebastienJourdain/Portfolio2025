"use client";

import { Github, Linkedin, Mail } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const sectionRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const emailY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const availableY = useTransform(scrollYProgress, [0, 1], [150, -150])
  
  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="min-h-screen flex flex-col justify-between px-6 bg-dominante"
    >
      <div className="flex-1 flex items-center justify-center">
  <div className="w-full text-center flex flex-col gap-8">
    <motion.h2 
      style={{ y: emailY }}
      className="text-4xl md:text-7xl break-words"
    >
      contact@sebastienjourdain.com
    </motion.h2>
    <motion.p 
      style={{ y: availableY }}
      className="text-2xl"
    >
      DISPONIBLE POUR TOUT PROJET<strong className='text-violet'> EN FREELANCE</strong>
    </motion.p>
  </div>
</div>

      {/* Footer */}
      <div className="py-8 flex flex-col-reverse md:flex-row items-center md:justify-between">

        <div>
          <p className='text-center md:inline-block'>&copy; Sébastien Jourdain 2026 Tous droits réservés | Développé avec Next.js, React & Lenis scroll</p>
        </div>
        
        <div className="flex mb-10 md:mb-0 gap-6 justify-start">
          <a
            href="https://github.com/SebastienJourdain/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet transition-all hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/s%C3%A9bastien-jourdain-729a85196/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet transition-all hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:contact@sebastienjourdain.com"
            className="hover:text-violet transition-all hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}