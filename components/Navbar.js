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
      className={`fixed left-1/2 -translate-x-1/2 border border-dominante p-2 px-8 w-fit top-10 transition-all z-50 ${
        scrolled ? 'bg-dominante border border-secondaire rounded-xl' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-center">
        
        <ul className=" md:flex gap-8 items-center">
          {navItems.map((item) => (
            <li className=' text-center' key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer text-xl md:text-2xl text-secondaire hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}