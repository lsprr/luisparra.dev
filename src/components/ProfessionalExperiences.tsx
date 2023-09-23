const experiences = [
    {
        "id": 1,
        "cite": "https://www.mower.com/",
        "company": "Mower",
        "position": "Full Stack Developer",
        "start": "June 2021",
        "end": "May 2022",
        "summary": [
            "Boosted the efficiency of our development and deployment processes like upgrading from iron to rune gear, fortified our web application defenses against security threats, improved the mobile user experience considerably, and mentored new guild members (junior developers) to level up their skills."
        ],
        "skills": [
            "JavaScript",
            "React",
            "Node",
            "PHP",
            "MySQL",
            "jQuery",
            "HTML5",
            "CSS3",
            "Git",
            "Github",
            "NPM",
            "Yarn",
            "Grunt",
            "Gulp",
            "Bitbucket",
            "Figma",
            "Litmus",
            "Google Analytics",
            "Google Tag Manager",
            "Marketo"
        ]
    },
    {
        "id": 2,
        "cite": "",
        "company": "Freelance",
        "position": "Front End Developer",
        "start": "November 2020",
        "end": "June 2021",
        "summary": [
            "Spruced up websites for law and therapy sectors akin to giving them a stat boost potion, made sure the web platforms are as accessible as the Grand Exchange (RIP Falador Park), and enhanced mobile interfaces to keep users as engaged as a heated battle in the Wilderness."
        ],
        "skills": [
            "JavaScript",
            "PHP",
            "MySQL",
            "HTML5",
            "CSS3"
        ]
    },
    {
        "id": 3,
        "cite": "https://www.thecloroxcompany.com/",
        "company": "The Clorox Company",
        "position": "Front End Developer",
        "start": "March 2019",
        "end": "November 2020",
        "summary": [
            "Played a vital role in upgrading the company's web marketplace like transitioning from F2P to P2P, improved payment processes to provide a smoother trade experience, boosted user engagement and sales akin to a bustling day at Falador Park (RIP), and promoted a diverse and inclusive digital realm mirroring the harmonious community of Gielinor."
        ],
        "skills": [
            "JavaScript",
            "PHP",
            "MySQL",
            "jQuery",
            "HTML5",
            "CSS3",
            "Jenkins",
            "Docker",
            "GIT",
            "Github",
            "NPM",
            "Webpack",
            "Magento 1",
            "Magento 2"
        ]
    },
    {
        "id": 4,
        "cite": "https://www.thecloroxcompany.com/",
        "company": "The Clorox Company",
        "position": "Documentation Specialist",
        "start": "July 2016",
        "end": "March 2019",
        "summary": [
            "Revamped the document management process, making it as efficient as a well-planned raid, and ensured the precise and prompt completion of important records, keeping the operation running smoother than a successful Law Runecrafting trip."
        ],
        "skills": [
            "Python",
            "SAP"
        ]
    }
]

export const ProfessionalExperiences = () => {
    return (
        <section id="ProfessionalExperiences" aria-label="Professional Experiences">
            <h2>
                Experiences
            </h2>
            <p>In my journey, I have had the privilege to embark on several quests, each adding to my repository of knowledge and skills</p>
            {experiences.map((experience) => (
                <div key={experience.id}>

                </div>
            ))}
        </section>
    )
}
