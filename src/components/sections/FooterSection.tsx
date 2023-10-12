export const FooterSection = () => {
    const year: number = new Date().getFullYear();

    return (
        <footer aria-label="Site Footer">
            <p className="text-bold">&copy; {year}. Luis Parra. All rights reserved.</p>
        </footer>
    )
}
