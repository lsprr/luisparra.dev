import { getImageUrl } from "../helpers";

const Header = () => {
    return `
    <header>
        <div class="logo-container">
            <img
                src=${getImageUrl('bear.png')}
                width="250"
                height="250"      
                alt="A white bear wearing a hat and shorts, standing on a field."      
            />
        </div>
        <h1>Luis Parra</h1>
        <p>Personal Website of Luis Parra</p>
        <nav>
            <a href="https://www.linkedin.com/in/lsprr" target="_blank" rel=”noopener noreferrer">Linkedin</a>
            <a href="https://github.com/lsprr" target="_blank" rel=”noopener noreferrer">Github</a>
        </nav>
    </header> 
    `
}

export default Header;