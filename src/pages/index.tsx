import { FAQSection } from "@components/sections/FAQSection";
import { FooterSection } from "@components/sections/FooterSection";

import { HeroSection } from "@/components/sections/HeroSection";
import { PersonalProfile } from "@components/PersonalProfile";
import { ProfessionalLinks } from "@/components/ProfessionalLinks";
import { AfterHours } from "@/components/AfterHours";
import { DeafTechAdvocate } from "@components/DeafTechAdvocate";
import { ProfessionalExperiences } from "@/components/ProfessionalExperiences";
import { TravelDiaries } from "@/components/TravelDiaries";

export default function Home() {
    return (
        <>
            <HeroSection />
            <PersonalProfile />
            <ProfessionalLinks />
            <DeafTechAdvocate />
            <ProfessionalExperiences />
            <AfterHours />
            <TravelDiaries />
            <FAQSection />
            <FooterSection />
        </>
    );
}
