import Image from "next/image";

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Students in a modern science lab", hint: "students laboratory" },
  { src: "https://placehold.co/600x400.png", alt: "A bright and spacious college library", hint: "modern library" },
  { src: "https://placehold.co/600x400.png", alt: "Students in caps and gowns at a graduation ceremony", hint: "graduation ceremony" },
  { src: "https://placehold.co/600x400.png", alt: "Lush green space on the university campus", hint: "university campus" },
  { src: "https://placehold.co/600x400.png", alt: "A group of students collaborating on a project", hint: "students studying" },
  { src: "https://placehold.co/600x400.png", alt: "A professor lecturing in a modern classroom", hint: "modern classroom" },
];

export default function MultimediaGallery() {
  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Campus Life Gallery</h2>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground font-body">
            A glimpse into the vibrant life at Ceylon Pharma College.
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
