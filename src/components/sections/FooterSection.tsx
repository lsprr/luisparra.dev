export const FooterSection = () => {
    const year: number = new Date().getFullYear();

    return (
        <footer className="simple flex flex-col" aria-label="Site Footer">
            <p className="text-bold mb-0">&copy; {year}. Luis Parra. All rights reserved.</p>
        </footer>
    )
}
