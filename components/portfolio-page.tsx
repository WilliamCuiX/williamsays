'use client'

import { useTheme } from "@/context/theme-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function PortfolioPage() {
  const { theme } = useTheme()

  const books = [
    {
      title: "The Age of AI",
      description: "A deep dive into the advancements and ethics of artificial intelligence.",
      image: "/about_cover-01.png"
    },
    {
      title: "The Tech Executive's Handbook",
      description: "Insights on navigating the tech industry and managing innovation.",
      image: "/about_cover-02.png"
    },
    {
      title: "Leadership in the Digital Era",
      description: "Exploring the qualities and strategies of successful digital leaders.",
      image: "/about_cover-03.png"
    }
  ]

  return (
    <div className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
      {/* Hero Banner */}
      <div className="container mx-auto px-4">
        <div className="w-full h-[300px] relative mb-16 rounded-lg overflow-hidden mt-4">
          <div className="absolute inset-0 bg-[url('/about-hero.png')] bg-cover bg-center" />
        </div>
      </div>

      {/* About Section */}
      <section className="container mx-auto px-4 mb-24">
        <h1 className="text-4xl font-bold mb-4">About William</h1>
        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
          Learn more about William White, his vision, and his contributions to the field of technology and leadership.
        </p>
        <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
          William White is a respected technology executive, investor, and author. He is the founder of the aI6z tech fund and has been
          a formative CTO at Google. His insights into the future of AI and technology have been published in various essays and
          books, earning him a significant following among tech enthusiasts and industry professionals alike.
        </p>
      </section>

      {/* Books Grid */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[3/4] mb-4 overflow-hidden rounded-lg bg-gray-800">
                <div 
                  className="w-full h-full bg-[image:var(--image-url)] bg-cover bg-center transition-transform group-hover:scale-105"
                  style={{ '--image-url': `url(${book.image})` } as { [key: string]: string }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                {book.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 mb-24">
        <h2 className="text-3xl font-bold text-center mb-8">Join the Community</h2>
        <div className="max-w-md mx-auto flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            className={`${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'} flex-1`}
          />
          <Button className="bg-[#1980e6] hover:bg-[#1980e6]/90 text-white px-8">Subscribe</Button>
        </div>
      </section>
    </div>
  )
}