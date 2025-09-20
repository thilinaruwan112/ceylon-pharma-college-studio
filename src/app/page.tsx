import Accreditations from '@/components/accreditations';
import CertificateVerifier from '@/components/certificate-verifier';
import CourseSlider from '@/components/course-slider';
import EventCalendar from '@/components/event-calendar';
import Testimonials from '@/components/testimonials';
import Hero from '@/components/hero';
import WhyChooseUs from '@/components/why-choose-us';
import Achievements from '@/components/achievements';
import SpecialBatchIntake from '@/components/special-batch-intake';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <SpecialBatchIntake />
      <CourseSlider />
      <CertificateVerifier />
      <WhyChooseUs />
      <Achievements />
      <Testimonials />
      <EventCalendar />
      <Accreditations />
    </main>
  );
}
