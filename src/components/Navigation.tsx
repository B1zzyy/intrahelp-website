'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false) // Close menu after navigation
  }

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      {/* Modern Floating Pill Navigation */}
      <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.03] rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.1)] px-6 py-2 transition-all duration-300 hover:bg-white/5 hover:border-white/10 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] w-[600px] max-w-[90vw]">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="IntraHelp Logo" 
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Empty space in middle */}
          <div className="flex-1"></div>

          {/* Hamburger Menu */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
          >
            <div className="flex flex-col space-y-1">
              <div className={`w-4 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-4 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-4 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div className={`absolute top-full right-0 mt-2 transition-all duration-300 ease-out ${
        isMenuOpen 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}>
        <div className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-3 w-48">
          <div className="space-y-1">
            <Link 
              href="#features" 
              onClick={(e) => handleSmoothScroll(e, 'features')}
              className="block text-white/80 hover:text-white text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Features
            </Link>
            <Link 
              href="#how-it-works" 
              onClick={(e) => handleSmoothScroll(e, 'how-it-works')}
              className="block text-white/80 hover:text-white text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              How It Works
            </Link>
            <Link 
              href="#testimonials" 
              onClick={(e) => handleSmoothScroll(e, 'testimonials')}
              className="block text-white/80 hover:text-white text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Testimonials
            </Link>
            <Link 
              href="#pricing" 
              onClick={(e) => handleSmoothScroll(e, 'pricing')}
              className="block text-white/80 hover:text-white text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Pricing
            </Link>
          </div>
        </div>
      </div>

    </nav>
  )
}