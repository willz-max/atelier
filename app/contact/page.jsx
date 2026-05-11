"use client";
import HeroPageTitle from "@/component/HeroPageTitle";
import LastCta from "@/component/LastCta";
import ContactForm from "@/component/ContactForm";
import Image from "next/image";


export default function Portfolio() {
  return (
    <div>
      <HeroPageTitle
        title="Contact Us"
        description="Get in touch with Atelier Studio to discuss your interior design project or schedule a consultation."
        link="/contact"
        page="Contact"
      />
      <div className="flex-1 w-full max-w-9xl gap-5 mx-auto px-10 md:px-12 flex flex-col justify-center md:py-35 py-30  align-middle">
        <ContactForm />
      </div>
     <div className="w-full h-1 bg-gray-200 my-10" />
     <div className="flex flex-col flex-1 w-full max-w-9xl gap-5 mx-auto px-10 md:px-12 mb-4">
     <h1 className="text-2xl">Visit Our Studio</h1>
     <p className="text-lg ">
       Located in the heart of Miami's Design District, our studio is open for scheduled visits and consultations.
     </p>
     <div>
       <Image src="/contact.jpg" alt="Designer 1" className="w-full h-full object-cover rounded shadow-lg" width={300} height={300} />
     </div>
     </div>
     
    </div>
  );
}
