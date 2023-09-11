import Image from "next/image";
import cruisePic from '../../public/assets/image/cruise.jpg'

export const TravelDiaries = () => {
    return (
        <section aria-label="Wanderlust Adventures">
            <header>
                <h2>Wanderlust Adventures</h2>
            </header>
            <figure>
                <Image
                    src={cruisePic}
                    alt="My favorite cruise ship"
                />
                <figcaption>Symphony of the Seas</figcaption>
            </figure>
        </section>
    )
}