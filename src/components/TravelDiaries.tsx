import Image from "next/image";
import cruisePic from '../../public/assets/image/cruise.jpg'

export const TravelDiaries = () => {
    return (
        <section id="TravelDiaries" aria-label="Pixels and Passports">
            <header>
                <h2>Pixels and Passports</h2>
            </header>
            <p>
                Dive into my gallery where I showcase the vibrant cultures and breathtaking landscapes encountered on my global adventures.
                Each snapshot is a blend of passion for technology and love for exploring the wonders of our world, offering a glimpse into the inspirations that fuel my
                coding journey.
            </p>
            <ul>
                <li>
                    <kbd>Stats: 19 countries 8% of the whole world</kbd> <br />
                    <code>Europe</code>
                    <br />
                    <kbd className="tab">
                        Portugal, Spain
                    </kbd>
                </li>
                <li>
                    <code>North America</code>
                    <br />
                    <kbd className="tab">
                        Bahamas, Barbados, Belize, Costa Rica, Curaçao, Dominican Republic, Honduras, Mexico, Puerto Rico, Saint-Martin (France), Sint Maarten (Dutch part), Trinidad and Tobago, Turks and Caicos Islands, United States, Virgin Islands (British), Virgin Islands (U.S.)
                    </kbd>
                </li>
                <li>
                    <code>South America</code>
                    <br />
                    <kbd className="tab">
                        Venezuela
                    </kbd>
                </li>
            </ul>
        </section>
    )
}