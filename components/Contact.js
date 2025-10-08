import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-between px-6 pb-0 py-20 bg-dominante">
      <div className="w-full mt-75 text-center">
        <h2 className="text-4xl md:text-7xl mb-8">contact@sebastienjourdain.com</h2>
        <p className="text-2xl">
          DISPONIBLE <strong className='text-accent'>MAINTENANT</strong>
        </p>
      </div>

      {/* Footer */}
      <div className="py-8 flex justify-between">

        <div>
          <p className='inline-block align-middle'>&copy; Sébastien Jourdain 2025 Tous droits réservés | Développé avec Next.js, React & Lenis scroll</p>
        </div>
        
        <div className="flex gap-6 justify-start">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:your@email.com"
            className="hover:text-accent transition-all hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
