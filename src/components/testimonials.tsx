"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Nimali Fernando",
    role: "Alumni, Class of 2022",
    avatar: "NF",
    image: "https://placehold.co/100x100.png",
    quote: "The practical experience I gained at Ceylon Pharma College was invaluable. The faculty are not just teachers, but mentors who guided me every step of the way.",
  },
  {
    name: "Sanjay Kumar",
    role: "Current Student, Diploma Program",
    avatar: "SK",
    image: "https://placehold.co/100x100.png",
    quote: "The learning environment is so supportive. The labs are modern and well-equipped, which makes learning engaging and fun. I'm confident about my future.",
  },
  {
    name: "Dr. Aisha Rahman",
    role: "Industry Partner, CEO of Medico Labs",
    avatar: "AR",
    image: "https://placehold.co/100x100.png",
    quote: "Graduates from Ceylon Pharma College consistently demonstrate a high level of professionalism and knowledge. They are a great asset to our organization.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">What Our Community Says</h2>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground font-body">
            Hear from our students, alumni, and partners who have experienced the Ceylon Pharma College difference.
          </p>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full bg-card">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                      <p className="font-body text-base text-muted-foreground italic flex-grow">"{testimonial.quote}"</p>
                      <div className="mt-6 flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint="person portrait" />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold font-body">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground font-body">{testimonial.role}</p>
                        </div>
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
