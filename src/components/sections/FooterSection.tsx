export const FooterSection = () => {
    const year: number = new Date().getFullYear();

    return (
        <footer aria-label="Site Footer">
            <header>
                <h2>Luis Parra</h2>
            </header>
            <div>
                <p>
                    &copy; {year}. Luis Parra. All rights reserved.
                </p>
            </div>
        </footer>
    )
}