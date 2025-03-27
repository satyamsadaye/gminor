import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Calendar, User } from "lucide-react"

export const metadata = {
  title: "Blog - Jay G Minor",
  description: "Music production tips, tutorials, and insights from Jay Guldekar (Jay G Minor).",
}

const blogPosts = [
  {
    id: "mastering-basics",
    title: "Mastering the Basics: Essential Tips for Beginner Music Producers",
    excerpt:
      "Starting your journey in music production can be overwhelming. Here are the essential tips every beginner should know to get started on the right foot.",
    date: "March 15, 2025",
    author: "Jay G Minor",
    category: "Beginners",
    image: "/bp1.jpg?height=300&width=600",
    readTime: "8 min read",
  },
  {
    id: "art-of-remixing",
    title: "The Art of Remixing: How to Transform a Track While Respecting the Original",
    excerpt:
      "Remixing is more than just adding beats to an existing song. Learn how to create remixes that honor the original while adding your unique touch.",
    date: "February 28, 2025",
    author: "Jay G Minor",
    category: "Remixing",
    image: "/bp2.jpg?height=300&width=600",
    readTime: "10 min read",
  },
  {
    id: "mixing-vocals",
    title: "Mixing Vocals: Professional Techniques for Crystal Clear Results",
    excerpt:
      "Discover the professional techniques for mixing vocals that cut through the mix while maintaining a natural sound.",
    date: "February 10, 2025",
    author: "Jay G Minor",
    category: "Mixing",
    image: "/bp3.jpg?height=300&width=600",
    readTime: "12 min read",
  },
  {
    id: "creative-sampling",
    title: "Creative Sampling: Finding Inspiration in Unexpected Places",
    excerpt:
      "Sampling doesn't have to be limited to other songs. Learn how to find and use samples from unexpected sources to create unique sounds.",
    date: "January 25, 2025",
    author: "Jay G Minor",
    category: "Sound Design",
    image: "/bp4.jpg?height=300&width=600",
    readTime: "9 min read",
  },
  {
    id: "home-studio-setup",
    title: "Building a Home Studio on a Budget: Essential Gear and Setup Tips",
    excerpt:
      "You don't need expensive equipment to create professional music. Here's how to set up an effective home studio without breaking the bank.",
    date: "January 12, 2025",
    author: "Jay G Minor",
    category: "Equipment",
    image: "/bp5.jpg?height=300&width=600",
    readTime: "11 min read",
  },
  {
    id: "music-theory",
    title: "Music Theory for Producers: The Practical Guide You Need",
    excerpt:
      "Music theory doesn't have to be intimidating. Learn the essential concepts that will directly improve your productions.",
    date: "December 30, 2024",
    author: "Jay G Minor",
    category: "Music Theory",
    image: "/bp6.jpg?height=300&width=600",
    readTime: "14 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0">
          <Image
            src="/blogimage.jpg"
            alt="Relaxing view with modern interior and lake view"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white drop-shadow-md">Music Production Blog</h1>
              <p className="max-w-[600px] md:text-xl text-white/90 drop-shadow">
                Tips, tutorials, and insights to help you improve your music production skills
              </p>
            </div>
            <div className="w-full max-w-md">
              <form className="flex w-full items-center space-x-2">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="flex-1 bg-white/10 border-white/20 placeholder:text-white/70 text-white"
                />
                <Button type="submit" size="icon" variant="ghost" className="text-white hover:bg-white/20">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group">
                <Card className="h-full overflow-hidden transition-all hover:shadow-lg border-2 border-transparent hover:border-primary">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-all group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="p-4 pb-0">
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div>{post.readTime}</div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-2">
                    <p className="line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <span className="text-sm font-medium text-primary">Read more</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-500 to-orange-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Updated</h2>
              <p className="max-w-[600px] md:text-xl">
                Subscribe to my newsletter for the latest articles, tips, and resources
              </p>
            </div>
            <div className="w-full max-w-md">
              <form className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border-white/20 placeholder:text-white/70 text-white"
                  required
                />
                <Button type="submit" variant="secondary" className="bg-white text-pink-600 hover:bg-white/90">
                  Subscribe
                </Button>
              </form>
              <p className="mt-2 text-xs text-white/80">
                By subscribing, you agree to receive emails from me. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

