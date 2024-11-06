'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Menu, Moon, Sun } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export function BlogLayout() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-background text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <header className={`border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
              <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor" />
            </svg>
            <span className="font-semibold">William Speaks</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/books" className="text-gray-400 hover:text-white">
              Books
            </Link>
            <Link href="/essays" className="text-gray-400 hover:text-white">
              Essays
            </Link>
            <Link href="/consulting" className="text-gray-400 hover:text-white">
              Consulting
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
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
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative h-[500px] overflow-hidden rounded-lg mx-4 mt-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <Image
          src="/hero.png"
          alt="Hero background"
          width={1200}
          height={500}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">William Speaks</h1>
          <p className="text-lg md:text-xl text-center mb-8 max-w-2xl">
            Technology, strategy, and leadership. Essays and books by William White
          </p>
          <div className="flex w-full max-w-md gap-4 px-4">
            <Input 
              placeholder="Search" 
              className={`${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-700 text-white placeholder:text-gray-400' 
                  : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-500'
              }`} 
            />
            <Button className="bg-[#1980e6] hover:bg-[#1980e6]/90 text-white">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Latest posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className={`overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <div className="relative aspect-video">
                <Image
                  src={`/post-cover-0${i}.png`}
                  alt="Post thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">The 5th Age of Technology</h3>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Author Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">About the author</h2>
        <div className="flex items-start space-x-6">
          <Image
            src="/avatar.jpg"
            alt="Author avatar"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">William White</h3>
            <p className="text-gray-400 max-w-2xl">
              Technology executive, investor, and author. Founder of a16z tech fund. Formerly CTO at Google. Author of &apos;The Age
              of AI&apos;.
            </p>
            <p className="text-gray-400">1.7k followers</p>
            <div className="flex space-x-4">
              <Button variant="outline">Follow</Button>
              <Button className="bg-[#1980e6] hover:bg-[#1980e6]/90 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Popular topics</h2>
        <div className="flex flex-wrap gap-2">
          {['Technology', 'AI', 'Leadership', 'Product', 'Strategy', 'Venture capital', 'Entrepreneurship', 'Books'].map(
            (topic) => (
              <div 
                key={topic} 
                className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold text-sm ${
                  theme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {topic}
              </div>
            )
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Subscribe to William Speaks</h2>
        <div className="max-w-md space-y-4">
          <Input 
            placeholder="Enter your email address" 
            type="email" 
            className={`${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700 text-white placeholder:text-gray-400' 
                : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-500'
            }`} 
          />
          <Button className="w-full bg-[#1980e6] hover:bg-[#1980e6]/90 text-white">Subscribe</Button>
        </div>
      </section>
    </div>
  )
}