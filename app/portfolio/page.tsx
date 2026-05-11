import HeroPageTitle from "@/component/HeroPageTitle";
import LastCta from "@/component/LastCta";
import FeaturedWork from "@/component/sections/FeaturedWork";


export default function Portfolio() {
    return(
        <div>
        <HeroPageTitle title="Our Portfolio" description="A curated collection of our most transformative design projects across residential, commercial, and hospitality spaces." link="/portfolio" page="Portfolio" />
        <FeaturedWork/>

          <LastCta 
            title="Have a Project in Mind?"
            description="Let us bring your vision to life. Schedule a consultation to discuss your project."
            buttonText="Start Your Project"
            />
        </div>
    )
}