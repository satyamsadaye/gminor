import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Award, Music, Youtube, Headphones, BookOpen } from "lucide-react"

export const metadata = {
  title: "About Jay G Minor - Music Producer & Educator",
  description:
    "Learn more about Jay Guldekar (Jay G Minor), his journey, achievements, and passion for music production and education.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">About Jay G Minor</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Music producer, remix artist, and passionate educator dedicated to helping others create amazing
                  music.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] xl:h-[500px]">
              <Image
                src="/about.jpg?height=500&width=500"
                alt="Jay G Minor"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">My Story</h2>
              <p className="text-muted-foreground">
                Hello, I'm Jay Guldekar, known professionally as Jay G Minor. My journey in music began over a decade
                ago when I first discovered my passion for creating and producing music. What started as a hobby quickly
                evolved into a lifelong pursuit of musical excellence.
              </p>
              <p className="text-muted-foreground">
                Born and raised in Mumbai, India, I was always surrounded by diverse musical influences - from
                traditional Indian classical music to Western pop and electronic genres. This rich tapestry of sounds
                shaped my unique approach to music production and remixing.
              </p>
              <p className="text-muted-foreground">
                After completing my formal education in audio engineering, I worked with several recording studios and
                independent artists, honing my skills and developing my signature style. My breakthrough came when my
                remixes started gaining traction on social media platforms, eventually leading to a dedicated following
                on YouTube.
              </p>
              <p className="text-muted-foreground">
                Today, I'm known for my innovative mashups and remixes that blend different genres and eras of music. My
                YouTube channel has become a hub for music enthusiasts looking for fresh takes on popular songs, and
                I've been fortunate enough to collaborate with talented artists from around the world.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">My Philosophy</h2>
              <p className="text-muted-foreground">
                I believe that music is a universal language that has the power to connect people across cultures and
                backgrounds. My goal is to create music that resonates with listeners on an emotional level, whether
                it's through a nostalgic remix or an original production.
              </p>
              <p className="text-muted-foreground">
                As an educator, I'm passionate about demystifying the music production process and making it accessible
                to everyone. I believe that with the right guidance and tools, anyone can learn to create
                professional-quality music, regardless of their background or resources.
              </p>
              <p className="text-muted-foreground">
                My teaching approach focuses on practical, hands-on learning that empowers students to express their
                unique musical vision. I emphasize both technical skills and creative development, helping students
                build a solid foundation while encouraging them to experiment and find their own sound.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills & Expertise</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Areas where I excel and can help you grow
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Music Production",
                description: "Proficient in various DAWs including Ableton Live, FL Studio, and Logic Pro X",
                icon: Music,
              },
              {
                title: "Remixing & Mashups",
                description:
                  "Expert in creating seamless mashups and remixes that honor the original while adding a unique twist",
                icon: Headphones,
              },
              {
                title: "Sound Design",
                description: "Creating unique sounds and textures for various musical genres",
                icon: Music,
              },
              {
                title: "Mixing & Mastering",
                description: "Professional-grade mixing and mastering for a polished, radio-ready sound",
                icon: Music,
              },
              {
                title: "Music Education",
                description:
                  "Experienced educator with a talent for breaking down complex concepts into digestible lessons",
                icon: BookOpen,
              },
              {
                title: "Content Creation",
                description: "Creating engaging music-related content for YouTube and other platforms",
                icon: Youtube,
              },
            ].map((item, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Achievements</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Milestones and recognition in my musical journey
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
            {[
              {
                year: "2023",
                title: "Surpassed 2K YouTube Subscribers",
                description:
                  "Reached a significant milestone on my YouTube channel with a growing community of music enthusiasts",
              },
              {
                year: "2022",
                title: "Featured on Music Production Podcast",
                description: "Invited as a guest expert to discuss remix techniques and music production tips",
              },
              {
                year: "2021",
                title: "Launched First Online Course",
                description: "Successfully created and launched my first comprehensive music production course",
              },
              {
                year: "2020",
                title: "Viral Remix Success",
                description:
                  "One of my remixes gained over 100,000 views, establishing my presence in the remix community",
              },
            ].map((item, index) => (
              <Card key={index} className="flex flex-col p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.year}</p>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Create Music Together</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Whether you're looking to learn music production or collaborate on a project, I'm here to help
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/courses">
                <Button size="lg" variant="secondary">
                  Explore Courses
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

