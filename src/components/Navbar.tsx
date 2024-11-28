"use client";
import { useState } from 'react'
import Link from 'next/link'
import { Leaf, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Leaf className="h-6 w-6 text-green-600 mr-2" />
            <span className="text-2xl font-bold text-green-600">EcoBite</span>
          </Link>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-green-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-green-600">Home</Link>
            <span>|</span>
            <Link href="/get-recipe" className="text-gray-600 hover:text-green-600">Get Recipe</Link>
            <span>|</span>
            <Link href="/green-score" className="text-gray-600 hover:text-green-600">Green Score</Link>
          </div>

          {/* Desktop authentication links */}
          <div className="hidden lg:flex space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-green-600">Login</Link>
            <Link href="/signup" className="text-gray-600 hover:text-green-600">Sign Up</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 mt-2 space-y-2">
            <Link onClick={()=>setIsMenuOpen(false)} href="/" className="block text-gray-600 hover:text-green-600 px-4 py-2">Home</Link>
            <Link onClick={()=>setIsMenuOpen(false)} href="/get-recipe" className="block text-gray-600 hover:text-green-600 px-4 py-2">Get Recipe</Link>
            <Link onClick={()=>setIsMenuOpen(false)} href="/green-score" className="block text-gray-600 hover:text-green-600 px-4 py-2">Green Score</Link>
            <Link onClick={()=>setIsMenuOpen(false)} href="/login" className="block text-gray-600 hover:text-green-600 px-4 py-2">Login</Link>
            <Link onClick={()=>setIsMenuOpen(false)} href="/signup" className="block text-gray-600 hover:text-green-600 px-4 py-2">Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
