import {Hero} from "@/pages/sections/Hero";
import {Meme} from "@/pages/sections/Meme";
import {ThematicBreak} from "@components/ThematicBreak";
import {DynamicDeveloper} from "@/pages/sections/DynamicDeveloper";
import {DeafDeveloperAdvocate} from "@/pages/sections/DeafDeveloperAdvocate";
import {FAQs} from "@/pages/sections/FAQs";
import {Footer} from "@components/Footer";

export default function Home() {
    return (
        <>
            <Hero/>
            <Meme/>
            <ThematicBreak description={"Start of The Developer You Have Been Looking For"}/>
            <DynamicDeveloper/>
            <ThematicBreak description={"Start of The Deaf Developer Advocate"}/>
            <DeafDeveloperAdvocate />
            <ThematicBreak description={"Start of FAQs"} />
            <FAQs />
            <Footer />
        </>
    );
}
