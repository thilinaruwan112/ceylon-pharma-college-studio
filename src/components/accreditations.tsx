import Image from 'next/image';

const accreditations = [
  { src: 'https://www.pharmacollege.lk/assets/logo/skildevlopment.jpg', alt: 'Skill Development Council Canada' },
  { src: 'https://www.pharmacollege.lk/assets/logo/actd.png', alt: 'American Council of Training and Development' },
  { src: 'https://www.pharmacollege.lk/assets/logo/iaf.jpg', alt: 'International Accreditation Forum' },
  { src: 'https://www.pharmacollege.lk/assets/logo/scc.png', alt: 'SCC Accredited CB-MS' },
  { src: 'https://www.pharmacollege.lk/assets/logo/iqa.png', alt: 'International Qualifications & Assessments' },
  { src: 'https://www.pharmacollege.lk/assets/logo/wes.svg', alt: 'World Education Services' },
  { src: 'https://www.pharmacollege.lk/assets/logo/acuk.png', alt: 'Accreditation UK' },
  { src: 'https://www.pharmacollege.lk/assets/logo/gatehouse.png', alt: 'Gatehouse Awards' },
];

export default function Accreditations() {
  return (
    <section id="accreditations" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
            Ceylon Pharma College is accredited by,
          </h2>
          <p className="mt-4 max-w-4xl mx-auto text-muted-foreground font-body leading-relaxed">
            At Ceylon Pharma College, we take pride in our strong collaborations with top-tier institutions and industry leaders, which enrich our academic programs and expand opportunities for our students. Our unwavering commitment to excellence in education has earned us numerous prestigious recognitions and esteemed accreditations, reinforcing our position as a leading institution in pharmaceutical education.
          </p>
        </div>
        <div className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12 lg:gap-x-16">
            {accreditations.map((accreditation, index) => (
              <div key={index} className="relative h-16 w-32 grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={accreditation.src}
                  alt={accreditation.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
