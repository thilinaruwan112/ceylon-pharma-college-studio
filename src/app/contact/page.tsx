import InquiryForm from '@/components/inquiry-form';

export default function ContactPage() {
  return (
    <main className="py-16 md:py-24">
      <section id="contact" className="bg-secondary/20 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <InquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
