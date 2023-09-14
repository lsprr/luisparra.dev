export const FooterSection = () => {
    const year: number = new Date().getFullYear();

    return (
        <footer aria-label="Site Footer">
            <h2>Luis Parra</h2>
            <p>
                &copy; {year}. Luis Parra. All rights reserved.
            </p>
        </footer>
    )
}
