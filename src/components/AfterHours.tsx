const activities = [
    {
        "id": 1,
        "connection": "Family and Friends",
        "inspiration": "Away from the digital sphere, I immerse myself in moments of joy and connection with family and friends. These can range from spirited game nights to relaxed gatherings or just heartfelt conversations over coffee. These moments ground me, refueling my spirit and passion for both life and work.",
    },
    {
        "id": 2,
        "connection": "Travel Enthusiast",
        "inspiration": "Traveling broadens my horizons, offering me a palette of diverse experiences. This love for exploration not only enriches my personal life but also instills a broader perspective in my professional endeavors.",
    },
    {
        "id": 3,
        "connection": "Old School RuneScape Gamer",
        "inspiration": "I unwind with a good old session of Old School RuneScape, where I take a break from coding to indulge in the fun and camaraderie that the lands of Gielinor offer. It is not just a game; it is a joyous expedition where I can be both a strategist and a fellow adventurer, seeking fun and relaxation in a community of like-minded enthusiasts.",
    },
]

export const AfterHours = () => {
    return (
        <section id="AfterHours" aria-label="After Hours">
            <p>
                When the hum of electronics fades, I delve into the wonders of the world around me. From the intricate patterns of diverse cultures to the simple joys shared with loved ones, my passions extend beyond the confines of code.
            </p>
            {activities.map((activity) => (
                <dl key={activity.id}>
                    <dt><b>{activity.connection}</b></dt>
                    <dd>
                        {activity.inspiration}
                    </dd>
                </dl>
            ))}
        </section>
    )
}