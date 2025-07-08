import Link from 'next/link';
import { GraduationCap, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/60 text-muted-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2 font-headline text-lg font-semibold text-foreground">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span>Ceylon Pharma College</span>
          </Link>
          <p className="text-sm font-body">
            Empowering the next generation of pharmaceutical professionals.
          </p>
        </div>
        <div className="grid gap-4">
          <h4 className="font-headline text-base font-semibold text-foreground">Quick Links</h4>
          <div className="grid grid-cols-2 gap-2 text-sm font-body">
            <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
            <Link href="#achievements" className="hover:text-primary transition-colors">Achievements</Link>
            <Link href="#testimonials" className="hover:text-primary transition-colors">Testimonials</Link>
            <Link href="#events" className="hover:text-primary transition-colors">Events</Link>
            <Link href="#gallery" className="hover:text-primary transition-colors">Gallery</Link>
            <Link href="#verify" className="hover:text-primary transition-colors">Verify Certificate</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        <div className="grid gap-4">
          <h4 className="font-headline text-base font-semibold text-foreground">Contact Us</h4>
          <div className="text-sm font-body space-y-1">
            <p>123 Pharma Street, Colombo, Sri Lanka</p>
            <p>Email: <a href="mailto:info@ceylonpharma.lk" className="hover:text-primary transition-colors">info@ceylonpharma.lk</a></p>
            <p>Phone: <a href="tel:+94112345678" className="hover:text-primary transition-colors">+94 11 234 5678</a></p>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 text-sm md:px-6">
          <p className="font-body">&copy; {new Date().getFullYear()} Ceylon Pharma College Hub.</p>
          <p className="font-body">
            Professionally Designed.
          </p>
        </div>
      </div>
    </footer>
  );
}
