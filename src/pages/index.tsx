import {Hero} from "@components/sections/Hero";
import {Meme} from "@components/sections/Meme";
import {ThematicBreak} from "@components/ThematicBreak";
import {DynamicDeveloper} from "@components/sections/DynamicDeveloper";
import {DeafDeveloperAdvocate} from "@components/sections/DeafDeveloperAdvocate";
import {FAQs} from "@components/sections/FAQs";
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
