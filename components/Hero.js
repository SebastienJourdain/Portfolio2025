"use client";

import TypingText from "@/components/ui/shadcn-io/typing-text";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax effects - negative values make elements go UP when scrolling DOWN
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center bg-dominante"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col justify-between items-center text-center min-h-screen py-10">
        <div className="flex flex-col items-center justify-center flex-grow">
          <motion.h2 
            style={{ y: titleY }}
            className="text-5xl md:text-8xl mb-6 font-heading text-secondaire"
          >
            <TypingText
              text={["Sébastien Jourdain"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-5xl md:text-8xl font-heading text-secondaire"
              variableSpeed={{ min: 50, max: 120 }}
              hideCursorOnComplete={true}
            />
          </motion.h2>

          <motion.p 
            style={{ y: subtitleY }}
            className="text-xl md:text-2xl text-secondaire"
          >
            Étudiant en Master de cybersécurité à Epitech Strasbourg
          </motion.p>
        </div>

        <p className="text-xl md:text-2xl text-secondaire ">[ SCROLL ]</p>
      </div>
    </section>
  );
}