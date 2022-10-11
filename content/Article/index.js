const Article = ({ children, className }) => {
    return (
        <article className={`max-w-screen-lg py-12 px-4 m-auto ${className ? className : ''}`}>
            {children}
        </article>
    )
}

export default Article;