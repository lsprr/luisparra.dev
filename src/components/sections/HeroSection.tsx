import Image from "next/image";
import profilePic from '../../../public/assets/image/me.jpg'

export const HeroSection = () => {
    return (
        <section>
            <header>
                <h1>Crafting Web Realms, One Quest at a Time</h1>
            </header>
            {/* <figure>
                <Image
                    src={profilePic}
                    alt="My profile picture"
                    width={350}
                    height={350}
                    priority
                />
                <figcaption>Luis Parra</figcaption>
            </figure> */}
        </section>
    );
};
