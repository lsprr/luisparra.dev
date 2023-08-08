import Image from "next/image";
import profilePic from '../../../public/assets/image/me.jpg'

export const HeroSection = () => {
    return (
        <section>
            <header>
                <h1>
                    Blending Code, Inclusivity & Global Adventures
                </h1>
            </header>
            <figure>
                <Image
                    src={profilePic}
                    alt="My profile picture"
                    width={350}
                    height={350}
                    blurDataURL="data:image/jpeg;base64,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"
                    placeholder="blur"
                />
                <figcaption>Luis Parra</figcaption>
            </figure>
        </section>
    );
};
