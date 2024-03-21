import { getImageUrl } from "../helpers";

const Header = () => {
    return `
    <div class="logo-container">
        <img
            src=${getImageUrl('capybara.gif')}
            width="250"
            height="250"      
            alt="A brown capybara with an orange fruit precariously balanced on its head pops up from the water and then back into the water."      
        />
    </div>
    <h1>Luis Parra</h1>
    <p>Personal Website of Luis Parra</p>
    <nav>
        <a href="https://www.linkedin.com/in/lsprr" target="_blank" rel=”noopener noreferrer">Linkedin</a>
        <a href="https://github.com/lsprr" target="_blank" rel=”noopener noreferrer">Github</a>
    </nav>
    `
}

export default Header;