import Image from "next/image";
import profilePic from '../../../public/assets/image/me.jpg'

export const HeroSection = () => {
    return (
        <section>
            <header>
                <h1>
                    Exploring the World and Coding, Hand in Hand
                </h1>
            </header>
            <figure>
                <Image
                    src={profilePic}
                    alt="My profile picture"
                    width={350}
                    height={350}
                    priority
                />
                <figcaption>Luis Parra</figcaption>
            </figure>
        </section>
    );
};
