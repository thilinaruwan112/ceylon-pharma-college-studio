import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white">
      <Image
        src="https://placehold.co/1600x900.png"
        alt="A vibrant, modern university campus with students walking"
        priority
        fill
        className="object-cover absolute z-[-1]"
        data-ai-hint="university campus"
      />
      <div className="absolute inset-0 bg-black/50 z-[-1]"></div>
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
          Welcome to Ceylon Pharma College
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl font-body drop-shadow-md">
          Your journey to a rewarding career in pharmacy starts here. Discover our world-class programs and vibrant campus life.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="font-bold">
            <Link href="#courses">Explore Courses</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="font-bold">
            <Link href="#contact">Inquire Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
