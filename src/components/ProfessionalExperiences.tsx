const experiences = [
    {
        "id": 1,
        "cite": "https://www.mower.com/",
        "company": "Mower",
        "position": "Full Stack Developer",
        "start": "June 2021",
        "end": "May 2022",
        "descriptions": [
            "Streamlined CI/CD build and deployment processes across 25+ client repositories using GIT and Bitbucket, reducing deployment errors by 25% and boosting development efficiency by 30%",
            "Introduced mobile-optimized coding practices, increasing mobile user engagement by 35%",
            "Improved website accessibility by adhering to WCAG AA standards, raising accessibility ratings by 40%",
            "Integrated Google Analytics, Google Tag Manager, and Marketo, enhancing targeted marketing efficiency by 15%",
            "Mentored junior developers, promoting a 15% improvement in team skill development and competence",
            "Collaborated with a cross-functional team to create customized digital solutions, enhancing website functionality and user experience"
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
        "descriptions": [
            "Developed and optimized websites using JavaScript, PHP, MySQL, HTML, and CSS, increasing user engagement by 20% and boosting local search rankings by 30%",
            "Improved website accessibility and user experience by ensuring WCAG AA compliance through WordPress",
            "Enhanced mobile user engagement by 15% through mobile-optimized coding techniques in JavaScript, HTML, and CSS",
            "Resolved technical issues, enhancing website performance by 25%"
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
        "descriptions": [
            "Collaborated with a team to transition websites from Magento 1 to Magento 2, increasing functionality by 35% and benefiting over 5,000 daily users",
            "Worked closely with the marketing team to create engaging web content, driving a 15% increase in user engagement and a 10% growth in sales",
            "Managed Jenkins pipelines for efficient Magento deployments",
            "Achieved WCAG AA compliance, promoting a more inclusive digital environment"
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
        "descriptions": [
            "Revamped document management procedures in a regulatory environment using SAP and Python, enhancing efficiency and compliance"
        ],
        "skills": [
            "Python",
            "SAP"
        ]
    }
]

export const ProfessionalExperiences = () => {
    return (
        <article id="ProfessionalExperiences" aria-label="Professional Experiences">
            <h2>
                Experiences
            </h2>
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
                                <code>Descriptions</code>
                                <ul className="descriptions">
                                    {experience.descriptions.map((description, index) => (
                                        <li key={index}>
                                            <small>{description}</small>
                                        </li>
                                    ))}
                                </ul>
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
        </article>
    )
}
