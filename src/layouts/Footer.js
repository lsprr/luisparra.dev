const Footer = () => {
    const year = new Date().getFullYear();

    return `
    <nav>
        <a href="https://www.linkedin.com/in/lsprr" target="_blank" rel=”noopener noreferrer">Linkedin</a>
        <a href="https://github.com/lsprr" target="_blank" rel=”noopener noreferrer">Github</a>
        <a href="https://github.com/lsprr/luisparra.dev" target="_blank" rel=”noopener noreferrer">Website Source Code</a>
    </nav>
    <p>Copyright ${year} Luis Parra</p>
    `
}

export default Footer;