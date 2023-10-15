const activities = [
    {
        "id": 1,
        "connection": "Family and Friends",
        "inspiration": "When the screens are off and the code is at rest, you can find me soaking in quality time with family and friends. Whether it is a casual backyard barbecue, a lively game night, or simply sharing laughter over a cup of coffee, I cherish these moments. They recharge my spirit and keep me grounded. In this circle of camaraderie and love, I find the motivation and inspiration to embark on new quests, both in the digital realm and the real world.",
    },
    {
        "id": 2,
        "connection": "Travel Enthusiast",
        "inspiration": "I am passionate about gathering insights and experiences from around the world, promoting a rich perspective that translates into my web development practices.",
    },
    {
        "id": 3,
        "connection": "Old School RuneScape Gamer",
        "inspiration": "I unwind with a good old session of Old School RuneScape, where I take a break from coding to indulge in the fun and camaraderie that the lands of Gielinor offer. It is not just a game; it is a joyous expedition where I can be both a strategist and a fellow adventurer, seeking fun and relaxation in a community of like-minded enthusiasts.",
    },
]

export const AfterHours = () => {
    return (
        <section id="AfterHours">
            <header>
                <h2 className="text-bold mb-1">
                    After Hours
                </h2>
            </header>
            <p>
                When I am not immersed in coding, I am an avid traveler exploring the vibrant cultures of our world and embarking on thrilling adventures in the world of Old School RuneScape.
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