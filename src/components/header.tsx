"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, GraduationCap, ChevronDown, Search, Minus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

const topNavLinks = [
  { href: '/about', label: 'About' },
  { href: '#', label: 'Alumni' },
  { href: '#', label: 'Quality Assurance' },
  { href: '#', label: 'Login' },
  { href: '#', label: 'Innovation' },
  { href: '#', label: 'International' },
  { href: '#', label: 'Resources' },
  { href: '#', label: 'Medical Center' },
  { href: '#', label: 'Library' },
];

const mainNavConfig = {
  links: [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/contact', label: 'Contact' },
  ],
  dropdowns: [
    {
      title: 'Departments',
      items: [
        { href: '#', label: 'Department of Pharmaceutical' },
        { href: '#', label: 'Department of English' },
        { href: '#', label: 'Department of ICT' },
      ],
    },
    {
      title: 'Students',
      items: [
        { href: '#', label: 'Student Life' },
        { href: '#', label: 'Academic Calendar' },
        { href: '#', label: 'Examinations' },
      ],
    },
  ],
  otherLinks: [],
};

const TopBar = () => (
  <div className="bg-primary text-primary-foreground print:hidden">
    <div className="container mx-auto flex h-10 items-center justify-end px-4 md:px-6">
      <nav className="hidden items-center gap-x-6 text-xs font-medium lg:flex">
        {topNavLinks.map((link) => (
          <Link key={link.label} href={link.href} className="transition-colors hover:text-primary-foreground/80">
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="ml-auto h-full">
         <Button asChild className="h-full rounded-none bg-[#FFC72C] px-6 text-xs font-bold text-black hover:bg-[#FFC72C]/90">
            <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  </div>
);

const DesktopNav = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);

  const handleMouseEnter = (title: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setOpenDropdown(title);
  };

  const handleMouseLeave = () => {
    timerRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };
  
  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
      const isActive = pathname === href;
      return (
          <Link href={href} className={cn(
              "relative flex h-full items-center text-sm font-medium transition-colors hover:text-primary",
              isActive ? "text-primary" : "text-foreground"
          )}>
              {children}
              {isActive && <span className="absolute bottom-0 left-0 w-full h-1 bg-primary" />}
          </Link>
      );
  };

  return (
    <nav className="hidden h-full items-center gap-x-6 md:flex">
      {mainNavConfig.links.map((link) => (
        <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
      ))}
      {mainNavConfig.dropdowns.map((dropdown) => (
        <DropdownMenu 
            key={dropdown.title} 
            open={openDropdown === dropdown.title} 
            onOpenChange={(isOpen) => setOpenDropdown(isOpen ? dropdown.title : null)}
        >
          <div onMouseEnter={() => handleMouseEnter(dropdown.title)} onMouseLeave={handleMouseLeave} className="h-full flex items-center">
            <DropdownMenuTrigger
              className="flex items-center gap-1 text-sm font-medium text-foreground outline-none transition-colors hover:text-primary data-[state=open]:text-primary"
            >
              {dropdown.title}
              <ChevronDown className="h-4 w-4 transition-transform duration-200" />
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent 
            align="start"
            onMouseEnter={() => handleMouseEnter(dropdown.title)}
            onMouseLeave={handleMouseLeave}
          >
            {dropdown.items.map((item) => (
              <DropdownMenuItem key={item.label} asChild className="gap-3 px-4 py-2.5">
                <Link href={item.href}>
                  <Minus />
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
      {mainNavConfig.otherLinks.map((link) => (
        <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
      ))}
    </nav>
  );
};

const MobileNav = ({ closeSheet }: { closeSheet: () => void }) => (
    <div className="flex flex-col h-full text-base">
      <div className="p-4 space-y-2 border-b">
        <h3 className="px-2 font-semibold text-muted-foreground text-sm">Main Menu</h3>
        {mainNavConfig.links.map((link) => (
            <Link key={link.label} href={link.href} onClick={closeSheet} className="block px-2 py-2 text-foreground transition-colors hover:text-primary rounded-md hover:bg-secondary">
                {link.label}
            </Link>
        ))}
        <Accordion type="multiple" className="w-full">
            {mainNavConfig.dropdowns.map((dropdown) => (
                <AccordionItem value={dropdown.title} key={dropdown.title} className="border-b-0">
                    <AccordionTrigger className="px-2 py-2 text-foreground no-underline hover:text-primary rounded-md hover:bg-secondary hover:no-underline">
                        {dropdown.title}
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col pl-6">
                            {dropdown.items.map((item) => (
                                <Link key={item.label} href={item.href} onClick={closeSheet} className="flex items-center gap-3 py-2.5 text-muted-foreground transition-colors hover:text-primary rounded-md hover:bg-secondary">
                                    <Minus className="h-4 w-4" />
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
        {mainNavConfig.otherLinks.map((link) => (
             <Link key={link.label} href={link.href} onClick={closeSheet} className="block px-2 py-2 text-foreground transition-colors hover:text-primary rounded-md hover:bg-secondary">
                {link.label}
            </Link>
        ))}
      </div>
      <div className="p-4 space-y-2">
         <h3 className="px-2 font-semibold text-muted-foreground text-sm">Quick Links</h3>
         {topNavLinks.map((link) => (
             <Link key={link.label} href={link.href} onClick={closeSheet} className="block px-2 py-2 text-muted-foreground transition-colors hover:text-primary rounded-md hover:bg-secondary">
                 {link.label}
             </Link>
         ))}
      </div>
    </div>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeSheet = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-md print:hidden">
      <TopBar />
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
            <div className="bg-primary/10 rounded-full p-1.5">
                <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <div>
                <p className="font-headline font-bold text-lg text-primary leading-tight">Ceylon Pharma College</p>
                <p className="text-xs text-muted-foreground font-body tracking-wider">GATEWAY TO KNOWLEDGE</p>
            </div>
        </Link>
        
        <DesktopNav />
        
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
            </Button>
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-sm p-0 flex flex-col">
                    <div className="p-4 border-b">
                        <Link href="/" onClick={closeSheet} className="flex items-center gap-2 font-headline text-lg font-semibold">
                            <GraduationCap className="h-6 w-6 text-primary" />
                            <span>Ceylon Pharma College</span>
                        </Link>
                    </div>
                    <div className="flex-grow overflow-y-auto">
                        <MobileNav closeSheet={closeSheet} />
                    </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
