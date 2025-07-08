
"use client";

import Image from "next/image";
import { useTranslation } from "@/context/language-context";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1727519457936-1b24c507d4b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxzdHVkZW50cyUyMGxhYm9yYXRvcnl8ZW58MHx8fHwxNzUxOTgwMDYwfDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Students in a modern science lab", hint: "students laboratory" },
  { src: "https://images.unsplash.com/photo-1674653760708-f521366e5cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5fGVufDB8fHx8MTc1MTk4MDA2MHww&ixlib=rb-4.1.0&q=80&w=1080", alt: "A bright and spacious college library", hint: "modern library" },
  { src: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnl8ZW58MHx8fHwxNzUxOTgwMDU5fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Students in caps and gowns at a graduation ceremony", hint: "graduation ceremony" },
  { src: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDB8fHx8MTc1MTk4MDA2MHww&ixlib=rb-4.1.0&q=80&w=1080", alt: "Lush green space on the university campus", hint: "university campus" },
  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzdHVkZW50cyUyMHN0dWR5aW5nfGVufDB8fHx8MTc1MTk4MDA1OXww&ixlib=rb-4.1.0&q=80&w=1080", alt: "A group of students collaborating on a project", hint: "students studying" },
  { src: "https://images.unsplash.com/photo-1586144131462-fa2a2b6d070c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxtb2Rlcm4lMjBjbGFzc3Jvb218ZW58MHx8fHwxNzUxOTgwMDYwfDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "A professor lecturing in a modern classroom", hint: "modern classroom" },
];

export default function MultimediaGallery() {
  const { t } = useTranslation();
  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">{t('galleryTitle')}</h2>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground font-body">
            {t('gallerySubtitle')}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-video rounded-lg overflow-hidden group shadow-md">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.hint}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
