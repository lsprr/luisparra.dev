export const FooterSection = () => {
    const year: number = new Date().getFullYear();

    return (
        <footer className="simple flex flex-col" aria-label="Site Footer">
            <h2 className="text-bold mb-1">Luis Parra</h2>
            <p>
                &copy; {year}. Luis Parra. All rights reserved.
            </p>
        </footer>
    )
}
