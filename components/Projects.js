import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 pt-50 bg-dominante">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl mb-30 text-center text-secondaire">Mes projets</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

          {projects.map((project) => (

            <Link 
              key={project.id} href={`/projects/${project.id}`} 
              className="relative overflow-hidden transition-all hover:scale-105 p-6"
              style={{
                backgroundImage: `url(${project.fond})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
              <h4 className="mb-8 text-2xl text-dominante">{project.date}</h4>
                <h3 className="mb-10 break-words text-dominante text-center text-6xl">{project.title}</h3>
                <p className="text-dominante inline-flex items-center gap-2 transition-colors">
                  Voir le projet <ArrowRight size={16} />
                </p>
              </div>



            </Link>

          ))}

        </div>
      </div>
    </section>
  );
}
