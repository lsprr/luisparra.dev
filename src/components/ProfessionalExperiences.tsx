const experiences = [
    {
        "id": 1,
        "cite": "https://www.mower.com/",
        "company": "Mower",
        "position": "Frontend Developer",
        "start": "June 2021",
        "end": "May 2022",
        "summary": [
            "Enhanced development and deployment processes, significantly boosting efficiency akin to a major system upgrade. Fortified web application security, improved mobile user experience, and guided junior developers in skill advancement."
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
        "position": "Frontend Developer",
        "start": "November 2020",
        "end": "June 2021",
        "summary": [
            "Revitalized websites for the law and therapy sectors, dramatically improving performance and accessibility. Optimized mobile interfaces, significantly enhancing user engagement."
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
        "position": "Frontend Developer",
        "start": "March 2019",
        "end": "November 2020",
        "summary": [
            "Key player in the major transition of the company's web marketplace, streamlined payment processes for improved user experience, increased user engagement and sales, and promoted a more inclusive digital environment."
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
            "Overhauled document management processes for peak efficiency, ensuring accurate and timely record-keeping, vital for smooth operations."
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
