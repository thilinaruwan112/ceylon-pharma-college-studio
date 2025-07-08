import AboutUs from '@/components/about-us';
import CertificateVerifier from '@/components/certificate-verifier';
import CourseSlider from '@/components/course-slider';
import EventCalendar from '@/components/event-calendar';
import InquiryForm from '@/components/inquiry-form';
import MultimediaGallery from '@/components/multimedia-gallery';
import Testimonials from '@/components/testimonials';
import Hero from '@/components/hero';
import WhyChooseUs from '@/components/why-choose-us';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <CourseSlider />
      <CertificateVerifier />
      <WhyChooseUs />
      <AboutUs />
      <Testimonials />
      <EventCalendar />
      <MultimediaGallery />
      <section id="contact" className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <InquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
