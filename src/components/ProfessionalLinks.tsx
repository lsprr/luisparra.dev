export const ProfessionalLinks = () => {
    return (
        <section id="ProfessionalLinks" aria-label="Professional Network">
            <div className="linkedin partner">
                <div className="tile-top">
                    <div className="partner-icon">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon-linkedin">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </div>
                    <a target="_blank" rel="nofollow noreferrer noopener" className="external text" aria-label="LinkedIn Let's Network on LinkedIn!" href="https://linkedin.com/in/lsprr">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="partner-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        <h2 className="partner-name">LinkedIn</h2>
                        <p className="partner-tagline">Let&apos;s Network on LinkedIn!</p>
                    </a>
                </div>
                {/* <div className="tile-bottom linkedin-bottom">
                    <p className="partner-sr linkedin-sr">My LinkedIn</p>
                </div> */}
            </div>
            <div className="github partner">
                <div className="tile-top">
                    <div className="partner-icon">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon-github">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </div>
                    <a target="_blank" rel="nofollow noreferrer noopener" className="external text" aria-label="GitHub Browse My GitHub Repos!" href="https://github.com/lsprr">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="partner-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        <h2 className="partner-name">GitHub</h2>
                        <p className="partner-tagline">Browse My GitHub Repos!</p>
                    </a>
                </div>
                {/* <div className="tile-bottom github-bottom">
                    <p className="partner-sr github-sr">My GitHub</p>
                </div> */}
            </div>
        </section>
    )
}