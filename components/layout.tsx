'use client'

import Link from "next/link"
import { Twitter, Linkedin, Menu, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/context/theme-context"

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <header className={`border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-8 w-8"
            />
            <span className="font-semibold">William Speaks</span>
          </Link>
          <nav className="flex items-center space-x-8">
            <Link href="/about" className={`hidden md:block hover:text-gray-${theme === 'dark' ? '300' : '600'}`}>
              About
            </Link>
            <Link href="/books" className={`hidden md:block hover:text-gray-${theme === 'dark' ? '300' : '600'}`}>
              Books
            </Link>
            <Link href="/essays" className={`hidden md:block hover:text-gray-${theme === 'dark' ? '300' : '600'}`}>
              Essays
            </Link>
            <Link href="/consulting" className={`hidden md:block hover:text-gray-${theme === 'dark' ? '300' : '600'}`}>
              Consulting
            </Link>
            <Button variant="ghost" size="icon">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                fill="currentColor" 
                viewBox="0 0 256 256"
                className="h-5 w-5"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <img
              src="/avatar.jpg"
              alt="William White"
              className="w-10 h-10 rounded-full object-cover"
            />
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </header>

      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className={`border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex space-x-8">
              <Link href="/privacy" className={`text-gray-400 hover:text-${theme === 'dark' ? 'white' : 'black'}`}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={`text-gray-400 hover:text-${theme === 'dark' ? 'white' : 'black'}`}>
                Terms of Service
              </Link>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className={`text-gray-400 hover:text-${theme === 'dark' ? 'white' : 'black'}`}>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className={`text-gray-400 hover:text-${theme === 'dark' ? 'white' : 'black'}`}>
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
            <div className="text-gray-400 text-sm">
              © 2023 William Speaks. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 