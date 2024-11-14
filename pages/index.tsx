import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Mock data for trending movies
const trendingMovies = [
  { id: 1, title: "Inception", poster: "/placeholder.svg?height=400&width=300", releaseDate: "2010-07-16" },
  { id: 2, title: "The Shawshank Redemption", poster: "/placeholder.svg?height=400&width=300", releaseDate: "1994-09-23" },
  { id: 3, title: "The Godfather", poster: "/placeholder.svg?height=400&width=300", releaseDate: "1972-03-24" },
  { id: 4, title: "The Dark Knight", poster: "/placeholder.svg?height=400&width=300", releaseDate: "2008-07-18" },
]

export default function Home() {
  const [movies, setMovies] = useState(trendingMovies)

  // In a real application, you would fetch the trending movies from your API here
  useEffect(() => {
    // Simulating an API call
    setTimeout(() => {
      setMovies(trendingMovies)
    }, 1000)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700 dark:text-white">
              <Link href="/">JUSTWATCH</Link>
            </div>
            <div className="flex items-center">
              <Link href="/categories" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 mx-3">
                Categories
              </Link>
              <Link href="/about" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 mx-3">
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Welcome to JUSTWATCH</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Your go-to place for movie reviews and recommendations!</p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Trending Movies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <Card key={movie.id}>
              <CardHeader>
                <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle>{movie.title}</CardTitle>
                <CardDescription>Release Date: {movie.releaseDate}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/review/${movie.id}`}>Read Review</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow mt-8">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-gray-600 dark:text-gray-300">© 2024 JUSTWATCH. All rights reserved.</div>
            <div className="flex items-center">
              <Link href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white mx-3">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white mx-3">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
