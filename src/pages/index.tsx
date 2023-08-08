import { ThematicBreak } from "@components/ThematicBreak";

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
            <ThematicBreak description={"Professional Network"} />
            <ProfessionalLinks />
            <ThematicBreak description={"About Me"} />
            <PersonalProfile />
            <ThematicBreak description={"Advocacy for Deaf Developers"} />
            <DeafTechAdvocate />
            <ThematicBreak description={"Wanderlust Adventures"} />
            <TravelDiaries />
            <ThematicBreak description={"FAQs"} />
            <FAQSection />
            <ThematicBreak description={"Footer"} />
            <FooterSection />
        </>
    );
}
