import Image from "next/image";

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
                    src="/assets/image/me.jpg"
                    width="350"
                    height="350"
                    alt="My profile picture"
                />
                <figcaption>Luis Parra</figcaption>
            </figure>
        </section>
    );
};
