"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, GraduationCap, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define navigation structure
const navConfig = {
  dropdowns: [
    {
      title: 'Academics',
      items: [
        { href: '/courses', label: 'Course Catalog' },
        { href: '#verify', label: 'Verify Certificate' },
      ],
    },
    {
      title: 'Campus Life',
      items: [
        { href: '#achievements', label: 'Achievements' },
        { href: '#events', label: 'Events' },
        { href: '#gallery', label: 'Gallery' },
        { href: '#testimonials', label: 'Testimonials' },
      ],
    },
  ],
  links: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ],
};

// Component for a single navigation link (for mobile)
const MobileNavLink = ({ href, children, onNavigate }: { href: string; children: React.ReactNode; onNavigate: () => void }) => (
  <Link href={href} onClick={onNavigate} className="text-base text-muted-foreground transition-colors hover:text-primary py-2">
    {children}
  </Link>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSheet = () => setIsOpen(false);

  // Desktop navigation component
  const DesktopNav = () => (
    <>
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">Home</Link>
      {navConfig.dropdowns.map((dropdown) => (
        <DropdownMenu key={dropdown.title}>
          <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none data-[state=open]:text-primary">
            {dropdown.title}
            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {dropdown.items.map((item) => (
              <DropdownMenuItem key={item.label} asChild>
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
      {navConfig.links.map((link) => (
        <Link key={link.label} href={link.href} className="text-sm font-medium transition-colors hover:text-primary">
          {link.label}
        </Link>
      ))}
    </>
  );

  // Mobile navigation component
  const MobileNav = () => (
    <div className="flex flex-col h-full">
      <Link href="/" onClick={closeSheet} className="text-base font-medium transition-colors hover:text-primary py-2 border-b">
        Home
      </Link>
      <Accordion type="multiple" className="w-full">
        {navConfig.dropdowns.map((dropdown) => (
          <AccordionItem value={dropdown.title} key={dropdown.title}>
            <AccordionTrigger className="text-base font-medium no-underline hover:text-primary [&[data-state=open]>svg]:rotate-180">
              {dropdown.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col pl-4">
                {dropdown.items.map((item) => (
                  <MobileNavLink key={item.label} href={item.href} onNavigate={closeSheet}>{item.label}</MobileNavLink>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex flex-col border-t pt-2 mt-2">
        {navConfig.links.map((link) => (
          <MobileNavLink key={link.label} href={link.href} onNavigate={closeSheet}>{link.label}</MobileNavLink>
        ))}
      </div>
    </div>
  );

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'border-b bg-background/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-headline text-lg font-semibold">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span>Ceylon Pharma College</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <DesktopNav />
        </nav>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col p-0">
              <div className="p-6 border-b">
                <Link href="/" onClick={closeSheet} className="flex items-center gap-2 font-headline text-lg font-semibold">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span>Ceylon Pharma College</span>
                </Link>
              </div>
              <nav className="p-6 flex-grow">
                <MobileNav />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
