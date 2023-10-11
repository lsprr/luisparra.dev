export const TravelDiaries = () => {
    return (
        <section className="simple flex flex-col" id="TravelDiaries" aria-label="Pixels and Passports">
            <header>
                <h2 className="text-bold mb-1">Pixels and Passports</h2>
            </header>
            <p className="mb-1">
                Dive into my gallery where I showcase the vibrant cultures and breathtaking landscapes encountered on my global adventures.
                Each snapshot is a blend of passion for technology and love for exploring the wonders of our world, offering a glimpse into the inspirations that fuel my
                coding journey. 19 countries 8% of the whole world!
            </p>
            <div className="flex-col">
                <p className="text-bold mb-0">Europe:</p>
                <p>Portugal, Spain</p>
            </div>
            <div className="flex-col">
                <p className="text-bold mb-0">North America:</p>
                <p>
                    Bahamas, Barbados, Belize, Costa Rica, Curaçao, Dominican Republic, Honduras, Mexico, Puerto Rico, Saint-Martin (France), Sint Maarten (Dutch part), Trinidad and Tobago, Turks and Caicos Islands, United States, Virgin Islands (British), Virgin Islands (U.S.)
                </p>
            </div>
            <div className="flex-col">
                <p className="text-bold mb-0">South America:</p>
                <p>
                    Venezuela
                </p>
            </div>
        </section>
    )
}