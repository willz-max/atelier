

import SectionHeader from '../SectionHeader';
import ContactForm from '../ContactForm';

export default function ContactSection() {
  return (
    <section className="py-32 bg-zinc-50 dark:bg-[#030712] transition-colors duration-500" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          subTitle="Get in Touch"
          title="Start Your Design Journey"
          para="Ready to transform your space? Reach out to schedule a consultation or ask us anything about our services."
          
        />

        <ContactForm />
      </div>
    </section>
  );
}
