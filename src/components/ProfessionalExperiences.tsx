const experiences = [
    {
        "id": 1,
        "cite": "https://www.mower.com/",
        "company": "Mower",
        "position": "Full Stack Developer",
        "start": "June 2021",
        "end": "May 2022",
        "summary": [
            "Took the lead in implementing and fine-tuning CI/CD processes, setting a new standard for efficiency in the development cycle. Introduced mobile-friendly coding practices that significantly enhanced user engagement and website accessibility."
        ],
        "skills": [
            "JavaScript",
            "ReactJS",
            "NodeJS",
            "PHP",
            "MySQL",
            "jQuery",
            "HTML5",
            "CSS3 (SASS)",
            "Bootstrap",
            "WordPress",
            "GIT",
            "GitHub",
            "NPM",
            "Yarn",
            "Grunt",
            "Gulp",
            "BitBucket",
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
            "Focused on crafting and optimizing websites, utilizing a unique perspective as a deaf developer to further enhance user engagement and accessibility, making the digital world a bit friendlier for everyone."
        ],
        "skills": [
            "JavaScript",
            "PHP",
            "MySQL",
            "HTML5",
            "CSS3",
            "WordPress",
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
            "Played a pivotal role in transitioning websites to Magento 2 at The Clorox Company, promoting growth and inclusivity. Collaborated closely with the marketing team to create engaging and inclusive web content."
        ],
        "skills": [
            "JavaScript",
            "PHP",
            "MySQL (MariaDB)",
            "jQuery",
            "HTML5",
            "CSS3 (SASS & LESS)",
            "Bootstrap",
            "Jenkins",
            "Docker",
            "GIT",
            "GitHub",
            "NPM",
            "Webpack",
            "Magento 1 & 2"
        ]
    },
    {
        "id": 4,
        "cite": "https://www.thecloroxcompany.com/",
        "company": "The Clorox Company",
        "position": "Documentation Analyst",
        "start": "July 2016",
        "end": "March 2019",
        "summary": [
            "Revolutionized documentation procedures, significantly enhancing efficiency and compliance within a regulatory environment."
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
                <ul key={experience.id}>
                    <li>
                        <code>Company</code>
                        <br />
                        <small>
                            {experience.cite !== '' ? <a href={experience.cite} target="_blank">{experience.company}</a> : experience.company}
                        </small>
                        <ul>
                            <li>
                                <code>Position</code>
                                <br />
                                <small>{experience.position}</small>
                            </li>
                            <li>
                                <code>Start</code>
                                <br />
                                <small>{experience.start}</small>
                            </li>
                            <li>
                                <code>End</code>
                                <br />
                                <small>{experience.end}</small>
                            </li>
                            <li>
                                <code>Summary</code>
                                <br />
                                <div className="summary">
                                    <small>{experience.summary}</small>
                                </div>
                            </li>
                            <li>
                                <code>Skills</code>
                                <br />
                                <div className="skills">
                                    {experience.skills?.map((skill, index) => (
                                        <small key={index}>{skill}, </small>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            ))}
        </section>
    )
}
