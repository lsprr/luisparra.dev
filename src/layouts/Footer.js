const Footer = () => {
    const year = new Date().getFullYear();

    return `
    <div class="row">
        <div class="col-12">
            <p class="p-muted-heading">
                © ${year} luisparra.dev <br />
                made with ❤️ and vanilla vitejs
            </p>
            <ul class="p-inline-list">
                <li class="p-inline-list__item">
                    <a href="https://linkedin.com/in/lsprr" class="p-icon--linkedin">Luis Parra's LinkedIn Account</a>
                </li>
                <li class="p-inline-list__item">
                    <a href="https://github.com/lsprr" class="p-icon--github">Luis Parra's GitHub Account</a>
                </li>
            </ul>
        </div>
    </div>  
    `
}

export default Footer;