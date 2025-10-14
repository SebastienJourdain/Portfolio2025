"use client";

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-dominante flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
  
        <h1 className="text-9xl md:text-[200px] font-heading font-bold text-secondaire/20 leading-none">
          404
        </h1>
      
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-secondaire mb-4 -mt-8">
          Page Introuvable
        </h2>
        
        <p className="text-xl text-accent mb-12">
          Il semblerait que la page que vous recherchez n'existe pas
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-cards text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            <Home size={20} />
            Retourner à l'accueil
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="bg-accent cursor-pointer text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} />
            Page précédente
          </button>
        </div>
      </div>
    </main>
  )
}