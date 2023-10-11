import { FAQSection } from "@components/sections/FAQSection";
import { FooterSection } from "@components/sections/FooterSection";

import { HeroSection } from "@/components/sections/HeroSection";
import { PersonalProfile } from "@components/PersonalProfile";
import { ProfessionalLinks } from "@/components/ProfessionalLinks";
import { PersonalProjects } from "@/components/PersonalProjects";
import { AfterHours } from "@/components/AfterHours";
import { DeafTechAdvocate } from "@components/DeafTechAdvocate";
import { ProfessionalExperiences } from "@/components/ProfessionalExperiences";
import { TravelDiaries } from "@/components/TravelDiaries";

export default function Home() {
    return (
        <>
            <HeroSection />
            <div className="grid">
                <aside>
                    <PersonalProfile />
                    <DeafTechAdvocate />
                    <ProfessionalExperiences />
                </aside>
                <aside>
                    <ProfessionalLinks />
                    <PersonalProjects />
                    <AfterHours />
                    <TravelDiaries />
                    <FAQSection />
                    <FooterSection />
                </aside>
            </div>
        </>
    );
}
