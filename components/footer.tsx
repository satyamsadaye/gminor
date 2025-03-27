import Link from "next/link"
import { Youtube, Instagram, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Jay G Minor. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="https://www.youtube.com/@JayGMinor" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary" />
            <span className="sr-only">YouTube</span>
          </Link>
          <Link href="https://www.instagram.com/call_me_j/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://x.com/jayguldekar" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="https://www.facebook.com/jguldekar" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
            <span className="sr-only">Facebook</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

