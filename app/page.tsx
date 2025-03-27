import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Music, Headphones, Youtube, BookOpen, Calendar, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/jgwide.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </div>
        
        {/* Content */}
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white drop-shadow-lg">Jay G Minor</h1>
                <p className="max-w-[600px] text-white md:text-xl drop-shadow-lg">Music Producer, Remix Artist & Educator</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/courses">
                  <Button size="lg" className="bg-white/90 backdrop-blur-sm text-black hover:bg-white">
                    Explore Courses
                  </Button>
                </Link>
                <Link href="https://www.youtube.com/@JayGMinor" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black backdrop-blur-sm">
                    <Youtube className="mr-2 h-5 w-5" />
                    Watch on YouTube
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] xl:h-[500px]">
              <Image
                src="/ythome.jpg"
                alt="Jay G Minor"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Music */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Featured Music</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of my latest mashups and remixes
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Raanjhan X Ishq Hai Mashup 2025",
                videoId: "6hd0Xt0mzFo",
                link: "https://www.youtube.com/watch?v=6hd0Xt0mzFo",
              },
              {
                title: "Sahiba Mashup 2025",
                videoId: "zDo_mjq1Lwc",
                link: "https://www.youtube.com/watch?v=zDo_mjq1Lwc",
              },
              {
                title: "Vibes Of Love Mashup 2025",
                videoId: "dhgIoRwTTc8",
                link: "https://www.youtube.com/watch?v=dhgIoRwTTc8",
              },
            ].map((item, index) => (
              <Link key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                <Card className="overflow-hidden transition-all hover:shadow-lg border-2 border-transparent hover:border-primary">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                      alt={item.title}
                      fill
                      className="object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="https://www.youtube.com/@JayGMinor" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                View All Music
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Latest from the Blog</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest music production tips and tutorials
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: "mastering-basics",
                title: "Mastering the Basics: Essential Tips for Beginner Music Producers",
                excerpt:
                  "Starting your journey in music production can be overwhelming. Here are the essential tips every beginner should know to get started on the right foot.",
                date: "March 15, 2025",
                author: "Jay G Minor",
                category: "Beginners",
                image: "/bp1.jpg",
              },
              {
                id: "art-of-remixing",
                title: "The Art of Remixing: How to Transform a Track While Respecting the Original",
                excerpt:
                  "Remixing is more than just adding beats to an existing song. Learn how to create remixes that honor the original while adding your unique touch.",
                date: "February 28, 2025",
                author: "Jay G Minor",
                category: "Remixing",
                image: "/bp2.jpg",
              },
              {
                id: "mixing-vocals",
                title: "Mixing Vocals: Professional Techniques for Crystal Clear Results",
                excerpt:
                  "Discover the professional techniques for mixing vocals that cut through the mix while maintaining a natural sound.",
                date: "February 10, 2025",
                author: "Jay G Minor",
                category: "Mixing",
                image: "/bp3.jpg",
              },
            ].map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="overflow-hidden transition-all hover:shadow-lg border-2 border-transparent hover:border-primary h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-all hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/blog">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                View All Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-500 to-orange-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What I Offer</h2>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From music production to education, I provide a range of services
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Music Production",
                description: "Professional music production services for artists and labels",
                icon: Music,
              },
              {
                title: "Remixes & Mashups",
                description: "Creative remixes and mashups of popular songs",
                icon: Headphones,
              },
              {
                title: "Music Production Courses",
                description: "Learn music production from beginner to advanced levels",
                icon: BookOpen,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm border-white/20"
              >
                <div className="mb-4 rounded-full bg-white/20 p-3">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-white/80 mt-2">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-muted/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">What People Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from students and clients who have worked with me
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Jay's music production course completely transformed my approach to making music. His teaching style is clear and engaging.",
                name: "Rahul S.",
                role: "Music Producer",
              },
              {
                quote:
                  "The mashups created by Jay G Minor are absolutely incredible. His attention to detail and musical sensibility are top-notch.",
                name: "Priya M.",
                role: "Music Enthusiast",
              },
              {
                quote:
                  "Working with Jay on my album was a fantastic experience. His production skills elevated my music to a whole new level.",
                name: "Arjun K.",
                role: "Independent Artist",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-white/5 via-white/5 to-white/10 backdrop-blur-xl border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6">
                  <div className="mb-4">
                    <svg
                      className="h-8 w-8 text-primary/40"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                  </div>
                  <p className="text-base/relaxed text-muted-foreground mb-6 italic relative">"{item.quote}"</p>
                  <div className="flex items-center gap-3 relative">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/30 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 via-transparent to-purple-600/50 animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white drop-shadow-lg">
                Ready to Learn Music Production?
              </h2>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join my courses and start creating professional music today
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">
              <Card className="group bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Explore Courses</h3>
                    <p className="text-white/80">Browse through our comprehensive music production courses</p>
                  </div>
                  <Link href="/courses" className="w-full">
                    <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-white/90">
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="group bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                    <Music className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Contact Me</h3>
                    <p className="text-white/80">Have questions? Let's discuss your music production goals</p>
                  </div>
                  <Link href="/contact" className="w-full">
                  <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-white/90">
                      Get in Touch
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
