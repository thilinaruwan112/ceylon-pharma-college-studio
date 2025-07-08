"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const videos = [
  {
    id: "1-R5b3QhSso",
    title: "Understanding Pharmacy in Sri Lanka",
  },
  {
    id: "PGLCoH8b2w0",
    title: "Convocation Ceremony Highlights",
  },
  {
    id: "bN5-iJm0Ljg",
    title: "Nugasewana Program Feature",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
            Our Achievements
          </h2>
           <div className="w-24 h-1 bg-primary mx-auto mt-2" />
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {videos.map((video) => (
              <CarouselItem key={video.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                    <Card className="overflow-hidden rounded-lg shadow-md">
                        <CardContent className="p-0">
                            <div className="aspect-video">
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </CardContent>
                    </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
