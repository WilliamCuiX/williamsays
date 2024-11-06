'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { useTheme } from "@/context/theme-context"
import { useEffect, useState } from "react"
import type { PostData } from "@/lib/posts"

export function HomeContent() {
  const { theme } = useTheme()
  const [posts, setPosts] = useState<PostData[]>([])

  useEffect(() => {
    async function loadPosts() {
      const response = await fetch('/api/posts')
      const data = await response.json()
      setPosts(data)
    }
    loadPosts()
  }, [])

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black' : 'bg-white'} ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
      {/* Hero Section */}
      <section className={`relative h-[500px] overflow-hidden rounded-lg mx-4 mt-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">William Speaks</h1>
          <p className="text-lg md:text-xl text-center mb-8 max-w-2xl">
            Technology, strategy, and leadership. Essays and books by William White
          </p>
          <div className="flex w-full max-w-md gap-4 px-4">
            <Input 
              placeholder="Search" 
              className={theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
            />
            <Button className="bg-[#1980e6] hover:bg-[#1980e6]/90 text-white">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Latest posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.id}>
              <a href={`/posts/${post.id}`} className="block">
                <Card className={`overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <div className="relative aspect-video">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${post.coverImage || '/post-cover-01.png'})` }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{post.title}</h3>
                    <p className="text-sm text-gray-500 mt-2">{post.description}</p>
                  </div>
                </Card>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Author Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">About the author</h2>
        <div className="flex items-start space-x-6">
          <img
            src="/avatar.jpg"
            alt="William White"
            className="w-[100px] h-[100px] rounded-full object-cover"
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
                  'bg-gray-700 text-gray-200'
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
            className="bg-gray-800 border-gray-700"
          />
          <Button className="w-full bg-[#1980e6] hover:bg-[#1980e6]/90 text-white">Subscribe</Button>
        </div>
      </section>
    </div>
  )
} 