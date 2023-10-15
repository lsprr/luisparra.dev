const passports = [
    {
        "id": 1,
        "continent": "Europe",
        "tour": [
            "Portugal",
            "Spain",
        ]
    },
    {
        "id": 2,
        "continent": "North America",
        "tour": "Bahamas, Barbados, Belize, Costa Rica, Curaçao, Dominican Republic, Honduras, Mexico, Puerto Rico, Saint-Martin (France), Sint Maarten (Dutch part), Trinidad and Tobago, Turks and Caicos Islands, United States, Virgin Islands (British), Virgin Islands (U.S.)",
        "tour": [
            "Bahamas",
            "Barbados",
            "Belize",
            "Costa Rica",
            "Curaçao",
            "Dominican Republic",
            "Honduras",
            "Mexico",
            "Puerto Rico",
            "Saint-Martin (France)",
            "Sint Maarten (Dutch part)",
            "Trinidad and Tobago",
            "Turks and Caicos Islands",
            "United States",
            "Virgin Islands (British)",
            "Virgin Islands (U.S.)"
        ]
    },
    {
        "id": 3,
        "continent": "South America",
        "tour": ["Venezuela"],
    }
]

export const TravelDiaries = () => {
    return (
        <section id="TravelDiaries">
            <header>
                <h2 className="text-bold mb-1">Pixels and Passports</h2>
            </header>
            <p>
                Dive into my gallery where I showcase the vibrant cultures and breathtaking landscapes encountered on my global adventures.
                Each snapshot is a blend of passion for technology and love for exploring the wonders of our world, offering a glimpse into the inspirations that fuel my
                coding journey. 19 countries 8% of the whole world!
            </p>
            {passports.map((passport) => (
                <dl key={passport.id}>
                    <dt><b>{passport.continent}</b></dt>
                    <dd>
                        {passport.tour?.map((tour, index) => (
                            <kbd key={index}>{tour}</kbd>
                        ))}
                    </dd>
                </dl>
            ))}
        </section>
    )
}