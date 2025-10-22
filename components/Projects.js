"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Projects() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    
    if (!section || !container) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const wrapperHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      // Calculate scroll progress through the entire wrapper
      if (rect.top <= 0 && rect.bottom >= viewportHeight) {
        // Calculate how far we've scrolled through the wrapper
        const scrollableHeight = wrapperHeight - viewportHeight;
        const scrollProgress = Math.min(Math.abs(rect.top) / scrollableHeight, 1);
        const horizontalScroll = scrollProgress * maxScroll;
        
        container.scrollLeft = horizontalScroll;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} style={{ height: `${300}vh` }}>
      <section 
        id="projects" 
        className="min-h-screen flex items-center justify-center pt-20 bg-dominante sticky top-0"
      >
        <div className="w-full mx-10">
          <h2 className="text-4xl md:text-5xl mb-16 text-center text-secondaire px-6">
            Mes projets
          </h2>

          <div 
            ref={containerRef}
            className="flex gap-8 overflow-x-hidden pb-8 px-6"
          >
            {projects.map((project) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.id}`} 
                className="relative overflow-hidden transition-all hover:scale-105 flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw]"
                style={{
                  backgroundImage: `url(${project.fond})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white min-h-[400px]">
                  <h4 className="mb-8 text-2xl text-dominante">{project.date}</h4>
                  <h3 className="mb-10 break-words text-dominante text-center text-6xl">
                    {project.title}
                  </h3>
                  <p className="text-dominante inline-flex items-center gap-2 transition-colors">
                    Voir le projet <ArrowRight size={16} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}