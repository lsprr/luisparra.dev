import { HeroSection } from "@components/sections/HeroSection";
import { FAQSection } from "@components/sections/FAQSection";
import { FooterSection } from "@components/sections/FooterSection";

import { ProfessionalLinks } from "@/components/ProfessionalLinks";
import { PersonalProfile } from "@components/PersonalProfile";
import { DeafTechAdvocate } from "@components/DeafTechAdvocate";
import { TravelDiaries } from "@/components/TravelDiaries";

export default function Home() {
    return (
        <>
            <HeroSection />
            <ProfessionalLinks />
            <PersonalProfile />
            <DeafTechAdvocate />
            <TravelDiaries />
            <FAQSection />
            <FooterSection />
        </>
    );
}
