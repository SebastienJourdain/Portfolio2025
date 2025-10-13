import { getProjectById } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function ProjectPage({ params }) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-dominante py-20">
      <div className="max-w-6xl mx-auto px-6 mb-8 mt-15">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-secondaire hover:text-accent transition-colors"
        >
          <ArrowLeft size={20} />
          RETOUR
        </Link>
      </div>
      <div className="max-w-6xl  mt-15 mx-auto px-6">
        <div className="flex justify-between">
          <h1 className="text-4xl md:text-6xl font-heading uppercase text-secondaire mb-4">
            {project.title}
          </h1>

          {project.demoLink && (
            <div className="flex ">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondaire hover:text-accent inline-flex text-lg text-bold text-secondaire items-center gap-2 w-fit transition-all"
              >
                SITE EN LIGNE
                <img
                  src="/img/icones/siteligne.svg"
                  alt="download icon"
                  className="w-20 h-20"
                />
              </a>
            </div>
          )}
        </div>

        <p className="text-xl text-secondaire mb-8">
          {project.shortDescription} |{" "}
          <strong className="text-accent font-normal">{project.date}</strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
          <div className="flex flex-col col-span-2">
            <h2 className="text-4xl mb-10 md:text-3xl font-heading text-accent">
              Description
            </h2>
            <p>{project.fullDescription}</p>
          </div>

          <div>
            <h2 className="text-4xl mb-10 md:text-3xl font-heading text-accent">
              Technologies utilisées
            </h2>

            <div className="flex flex-wrap gap-5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-cards uppercase text-white px-4 py-2 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <h2 className="text-4xl md:text-3xl font-heading text-accent">
        Galerie photos
      </h2>
        </div>
      </div>
      
      <div className="w-7xl md:w-6xl grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
        {project.images.map((src, i) => (
          <div key={i} className="relative w-full h-64 overflow-hidden">
            <Image
              src={src}
              alt={`${project.title} image ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
