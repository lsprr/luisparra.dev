import Image from "next/image";
import profilePic from '../../../public/assets/image/me.jpg'

export const HeroSection = () => {
    return (
        <section>
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
