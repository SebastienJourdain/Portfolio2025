import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="h-fit md:min-h-screen flex flex-col justify-between px-6 bg-dominante">
      <div className="w-full md:mt-75 my-[10vh] text-center">
        <h2 className="text-4xl md:text-7xl mb-8 break-words">contact@sebastienjourdain.com</h2>
        <p className="text-2xl">
          DISPONIBLE <strong className='text-accent'>MAINTENANT</strong>
        </p>
      </div>

      {/* Footer */}
      <div className="py-8 flex flex-col-reverse md:flex-row items-center md:justify-between">

        <div>
          <p className='text-center md:inline-block'>&copy; Sébastien Jourdain 2025 Tous droits réservés | Développé avec Next.js, React & Lenis scroll</p>
        </div>
        
        <div className="flex mb-10 md:mb-0 gap-6 justify-start">
          <a
            href="https://github.com/SebastienJourdain/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/s%C3%A9bastien-jourdain-729a85196/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:contact@sebastienjourdain.com"
            className="hover:text-accent transition-all hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
