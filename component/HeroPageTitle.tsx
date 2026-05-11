import Link from 'next/link';

interface HeroPageTitleProps {
    title: string;
    description: string;
    link: string;
    page: string;
}

export default function HeroPageTitle({ title, description, link,page }: HeroPageTitleProps) {
    return (
        <div className="flex-1 w-full max-w-9xl text-white gap-5 mx-auto px-6 md:px-12 flex flex-col justify-center md:py-35 py-30  align-middle text-center bg-[#1c1917]">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className='md:text-xl text-base'>{description}</p>
            <div>
                <span>
                    <Link className="hover:text-shadow-white" href="/">Home </Link>
                    /
                    <Link className=" capitalize" href={link}> {page}</Link>
                </span>
            </div>

        </div>
    )
}