import Image from "next/image";
import runesecureImg from '../../public/assets/image/runesecure.png'
import zanikQuestExplorerImg from '../../public/assets/image/zanik-quest-explorer.png'
import osrsQuestScraperImg from '../../public/assets/image/osrs-quest-scraper.png'

export const PersonalProjects = () => {
    return (
        <div className="grid">
            <aside className="mb-1">
                <div className="contents-project">
                    <div className="project-top project-image">
                        <Image alt="RuneSecure Cover Image" src={runesecureImg} width="500" height="500" />
                    </div>
                    <div className="project-bottom link-button">
                        <h2>
                            <span className="project-headline">
                                <a href="https://runesecure.vercel.app/" aria-label="Link to my OSRS RuneSecure demo website" target="_blank" rel="noopener noreferrer">OSRS RuneSecure</a>
                            </span>
                        </h2>
                    </div>
                </div>
            </aside>
            <aside className="mb-1">
                <div className="contents-project">
                    <div className="project-top project-image">
                        <Image alt="Zanik Quest Explorer Cover Image" src={zanikQuestExplorerImg} width="500" height="500" />
                    </div>
                    <div className="project-bottom link-button">
                        <h2>
                            <span className="project-headline">
                                <a href="https://zanik-quest-explorer.vercel.app/" aria-label="Link to my Zanik Quest Explorer demo website" target="_blank" rel="noopener noreferrer">Zanik Quest Explorer</a>
                            </span>
                        </h2>
                    </div>
                </div>
            </aside>
            <aside className="mb-1">
                <div className="contents-project">
                    <div className="project-top project-image">
                        <Image alt="OSRS Quest Scraper Cover Image" src={osrsQuestScraperImg} width="500" height="500" />
                    </div>
                    <div className="project-bottom link-button">
                        <h2>
                            <span className="project-headline">
                                <a href="https://osrs-quest-scraper.vercel.app/api/quests" aria-label="Link to my OSRS Quest Scraper demo website" target="_blank" rel="noopener noreferrer">OSRS Quest Scraper</a>
                            </span>
                        </h2>
                    </div>
                </div>
            </aside>
        </div>
    )
}