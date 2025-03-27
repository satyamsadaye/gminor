import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, BookOpen, Users, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Music Production Courses by Jay G Minor",
  description:
    "Learn music production from Jay Guldekar (Jay G Minor). Courses for all levels from beginner to advanced.",
}

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Music Production Courses</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Learn how to produce professional music from an experienced producer and educator
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#featured-courses">
                <Button size="lg">Explore Courses</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact for Private Lessons
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn With Me */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Learn With Me</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                What makes my courses different from others
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Industry Experience",
                description:
                  "Learn from someone who actively works in the music industry, creating remixes and producing music",
                icon: Star,
              },
              {
                title: "Practical Approach",
                description: "Focus on hands-on learning with real-world projects and examples, not just theory",
                icon: CheckCircle,
              },
              {
                title: "Personalized Feedback",
                description: "Get detailed feedback on your music to help you improve and grow as a producer",
                icon: Users,
              },
              {
                title: "Comprehensive Curriculum",
                description: "Courses cover everything from basic concepts to advanced techniques",
                icon: BookOpen,
              },
              {
                title: "Flexible Learning",
                description: "Learn at your own pace with lifetime access to course materials",
                icon: Clock,
              },
              {
                title: "Community Support",
                description: "Join a community of like-minded producers to share ideas and get inspired",
                icon: Users,
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

      {/* Featured Courses */}
      <section id="featured-courses" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Courses</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive courses for all skill levels
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Music Production Fundamentals",
                description: "A comprehensive introduction to music production for complete beginners",
                image: "/mp1.jpg?height=200&width=350",
                level: "Beginner",
                duration: "8 weeks",
                price: "₹12,000",
                features: [
                  "DAW basics and setup",
                  "Music theory for producers",
                  "Recording and editing audio",
                  "Working with MIDI",
                  "Basic mixing techniques",
                  "10+ hands-on projects",
                ],
              },
              {
                title: "The Art of Remixing",
                description: "Learn how to create professional remixes and mashups that stand out",
                image: "/mp2.jpg?height=200&width=350",
                level: "Intermediate",
                duration: "6 weeks",
                price: "₹35,000",
                features: [
                  "Finding and preparing stems",
                  "Creative sampling techniques",
                  "Tempo and key matching",
                  "Adding your signature sound",
                  "Arrangement strategies",
                  "8+ remix projects",
                ],
              },
              {
                title: "Advanced Music Production",
                description: "Take your production skills to the professional level with advanced techniques",
                image: "/mp3.jpg?height=200&width=350",
                level: "Advanced",
                duration: "10 weeks",
                price: "₹60,000",
                features: [
                  "Advanced sound design",
                  "Complex arrangement techniques",
                  "Professional mixing workflows",
                  "Mastering essentials",
                  "Industry-standard practices",
                  "Create a professional EP",
                ],
              },
            ].map((course, index) => (
              <Card key={index} className="flex flex-col overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover transition-all hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {course.level}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">What you'll learn:</h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4 pt-0">
                  <div className="text-2xl font-bold">{course.price}</div>
                  <Button className="w-full">Enroll Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Student Success Stories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from students who have transformed their music production skills
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Jay's course completely transformed my approach to music production. I went from being a complete beginner to releasing my first EP in just 6 months!",
                name: "Aryan P.",
                course: "Music Production Fundamentals",
              },
              {
                quote:
                  "The Art of Remixing course taught me techniques I couldn't find anywhere else. My remixes now sound professional and I've even had one picked up by a label.",
                name: "Priya S.",
                course: "The Art of Remixing",
              },
              {
                quote:
                  "As someone who had been producing for years, I was skeptical about what more I could learn. The Advanced course proved me wrong - it took my skills to a whole new level.",
                name: "Vikram M.",
                course: "Advanced Music Production",
              },
            ].map((item, index) => (
              <Card key={index} className="flex flex-col p-6">
                <div className="flex-1">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{item.quote}"</p>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">Student, {item.course}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Common questions about my courses
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
            {[
              {
                question: "Do I need any prior experience to take your courses?",
                answer:
                  "It depends on the course. The Fundamentals course is designed for complete beginners, while other courses may require some basic knowledge of music production.",
              },
              {
                question: "What software do you use in your courses?",
                answer:
                  "I primarily teach using Ableton Live and FL Studio, but the concepts can be applied to any DAW. I provide guidance for users of other software as well.",
              },
              {
                question: "How long do I have access to the course materials?",
                answer:
                  "You get lifetime access to all course materials, including any future updates to the curriculum.",
              },
              {
                question: "Is there any support available if I get stuck?",
                answer:
                  "Yes, all courses include access to a community forum where you can ask questions. Premium courses also include direct feedback on your projects.",
              },
              {
                question: "Can I get a refund if I'm not satisfied?",
                answer:
                  "Yes, I offer a 30-day money-back guarantee if you're not completely satisfied with your purchase.",
              },
              {
                question: "Do you offer any payment plans?",
                answer: "Yes, for courses above $200, I offer the option to pay in 3 monthly installments.",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Transform Your Music Production Skills?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of students who have elevated their music with my courses
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#featured-courses">
                <Button size="lg" variant="secondary">
                  Browse All Courses
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Ask a Question
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

