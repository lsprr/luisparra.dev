const experiences = [
    {
        "id": 1,
        "cite": "https://www.mower.com/",
        "company": "Mower",
        "position": "Frontend Developer",
        "start": "June 2021",
        "end": "May 2022",
        "summary": [
            "Enhanced CI/CD pipelines, bolstered web security, and improved mobile responsiveness, leading to increased user engagement and broadened accessibility compliance. Also leveraged analytics to uplift marketing strategies and led developer workshops to boost team productivity."
        ],
        "skills": [
            "TypeScript",
            "JavaScript",
            "React.js",
            "Node.js",
            "PHP",
            "MySQL",
            "jQuery",
            "Wordpress",
            "CI/CD",
            "Git",
            "Figma"
        ]
    },
    {
        "id": 2,
        "cite": "",
        "company": "Freelance",
        "position": "Frontend Developer",
        "start": "November 2020",
        "end": "June 2021",
        "summary": [
            "Improved website interactivity and SEO, ensuring WCAG AA compliance, and enhanced mobile responsiveness, resulting in better user engagement."
        ],
        "skills": [
            "JavaScript",
            "PHP",
            "MySQL",
            "Wordpress"
        ]
    },
    {
        "id": 3,
        "cite": "https://www.thecloroxcompany.com/",
        "company": "The Clorox Company",
        "position": "Frontend Developer",
        "start": "March 2019",
        "end": "November 2020",
        "summary": [
            "Contributed to a major e-commerce platform migration, streamlined payment integrations, boosted content engagement and sales, doubled mobile traffic, and maintained high standards of web accessibility."
        ],
        "skills": [
            "JavaScript",
            "PHP",
            "MySQL",
            "jQuery",
            "Jenkins",
            "Docker",
            "Wordpress",
            "Magento 1",
            "Magento 2",
            "CI/CD",
            "Git"
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
            "Overhauled documentation systems and standardized protocols, enhancing operational efficiency and regulatory compliance."
        ],
        "skills": [
            "Python",
            "SAP"
        ]
    }
]

export const ProfessionalExperiences = () => {
    return (
        <section id="ProfessionalExperiences" aria-label="Work Experience">
            {experiences.map((experience) => (
                <dl key={experience.id}>
                    <dt><sub>{experience.start} &mdash; {experience.end}</sub></dt>
                    <dt><b>{experience.position}</b> @ {experience.cite !== '' ? <a href={experience.cite} aria-label={`Link to ${experience.company} website`} target="_blank">{experience.company}</a> : experience.company}</dt>
                    <dd>
                        {experience.summary}
                    </dd>
                    <dd>
                        {experience.skills?.map((skill, index) => (
                            <kbd key={index}>{skill}</kbd>
                        ))}
                    </dd>
                </dl>
            ))}
        </section>
    )
}
