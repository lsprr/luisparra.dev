import Image from "next/image";
import cruisePic from '../../public/assets/image/cruise.jpg'

export const TravelDiaries = () => {
    return (
        <section aria-label="Pixels and Passports">
            <header>
                <h2>Pixels and Passports</h2>
            </header>
            <p>
                Dive into my gallery where I showcase the vibrant cultures and breathtaking landscapes encountered on my global adventures.
                Each snapshot is a blend of passion for technology and love for exploring the wonders of our world, offering a glimpse into the inspirations that fuel my
                coding journey.
            </p>
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