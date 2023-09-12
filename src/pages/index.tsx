import { FAQSection } from "@components/sections/FAQSection";
import { FooterSection } from "@components/sections/FooterSection";

import { HeroSection } from "@/components/sections/HeroSection";
import { PersonalProfile } from "@components/PersonalProfile";
import { DeafTechAdvocate } from "@components/DeafTechAdvocate";
import { ProfessionalExperiences } from "@/components/ProfessionalExperiences";
import { TravelDiaries } from "@/components/TravelDiaries";
import { ProfessionalLinks } from "@/components/ProfessionalLinks";

export default function Home() {
    return (
        <>
            <HeroSection />
            <PersonalProfile />
            <DeafTechAdvocate />
            <ProfessionalExperiences />
            <TravelDiaries />
            <FAQSection />
            <ProfessionalLinks />
            <FooterSection />
        </>
    );
}
