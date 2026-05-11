import BrownBtn from "@/component/BrownBtn";

interface LastCtaProps {
    title: string;
    description: string;
    buttonText: string;
}

export default function LastCta({ title, description, buttonText }: LastCtaProps) {
  return (
    <div className="flex-1 w-full max-w-9xl text-white gap-5 mx-auto px-6 md:px-12 flex flex-col justify-center md:py-35 py-30  align-middle text-center bg-[#1c1917]">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        {title}
      </h1>
      <p className="md:text-xl text-base">
        {description}
      </p>
      <div className="flex justify-center">
        <BrownBtn title={buttonText} />
      </div>
    </div>
  );
}
