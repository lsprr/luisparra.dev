import { motion, useScroll, useSpring } from "framer-motion";

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
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <motion.div className="progress-bar" style={{ scaleX }} />
            <HeroSection />
            <div className="grid">
                <div>
                    <PersonalProfile />
                    <DeafTechAdvocate />
                    <ProfessionalExperiences />
                </div>
                <div>
                    <ProfessionalLinks />
                    <AfterHours />
                    <TravelDiaries />
                    <FAQSection />
                </div>
            </div>
            <FooterSection />
        </>
    );
}
