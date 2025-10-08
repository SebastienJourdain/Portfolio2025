'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'about', label: '[ About ]' },
    { id: 'projects', label: '[ Projects ]' },
    { id: 'contact', label: '[ Contact ]' }
  ]

  return (
    <nav
      className={`fixed border border-dominante p-2 top-10 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dominante border border-secondaire rounded-xl' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-center">
        
        <ul className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer text-xl md:text-2xl text-secondaire hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-slate-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-lg text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}