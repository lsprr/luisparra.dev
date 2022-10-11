const Section = ({ children, className }) => {
    return (
        <section className={`max-w-screen-lg py-12 px-4 m-auto ${className ? className : ''}`}>
            {children}
        </section>
    )
}

export default Section;