import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center px-4 md:px-6">
        <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://placehold.co/600x800.png"
            alt="A pharmacist mentoring a student in a lab setting"
            fill
            className="object-cover"
            data-ai-hint="pharmacist student"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Why Choose Us?</h2>
          <div className="w-24 h-1 bg-primary mt-2 mb-6" />
          <p className="text-muted-foreground font-body leading-relaxed">
            At Ceylon Pharma College, we believe in cultivating tomorrow's leaders today. Our commitment to excellence and innovation sets us apart. With a dedicated and talented academic staff, and a strong emphasis on practical learning, we provide a comprehensive education that prepares you for nothing but success in the real world.
          </p>
          <p className="mt-4 text-muted-foreground font-body leading-relaxed">
            Choosing Ceylon Pharma College means choosing a future where your ambitions are realized. We're not just an institution; we're a launchpad for your dreams. At Ceylon Pharma College, you'll gain the knowledge, skills, and confidence needed to excel in your chosen field. Join us, and embark on a journey of personal and professional growth, all within an inspiring and supportive academic community.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-headline font-bold text-primary">4729+</p>
              <p className="mt-1 text-muted-foreground font-body tracking-wide">Over 4729 students</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-headline font-bold text-primary">6+</p>
              <p className="mt-1 text-muted-foreground font-body tracking-wide uppercase">OVER 6 COURSES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
