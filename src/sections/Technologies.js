const Technologies = () => {
    return `
    <section>
        <h2>My Favorite Technologies</h2>
        <p>A non-exhaustive list of technologies that I enjoy using.</p>
        <div class="custom-table">
            <div class="table-row">
                <div class="table-cell">
                    <a href="https://www.typescriptlang.org/">TypeScript</a>
                </div>
                <div class="table-cell">
                    I have used TypeScript for years and enjoy its static typing and versatility in creating scalable web applications. It remains my go-to for a robust development experience.
                </div>
            </div>
            <div class="table-row">
                <div class="table-cell">
                    <a href="https://www.deque.com/axe/">Axe</a>
                </div>
                <div class="table-cell">
                    For years, I have used axe (accessibility testing tools) in my workflow, leveraging its tremendous capabilities to ensure web apps are accessible. It remains my preferred method for improving accessibility and providing inclusive user experiences.
                </div>
            </div>
            <div class="table-row">
                <div class="table-cell">
                    <a href="https://vitejs.dev/">Vite</a>
                </div>
                <div class="table-cell">
                    A fantastic JS bundler that can handle web applications of just about any scale.
                </div>
            </div>
            <div class="table-row">
                <div class="table-cell table-cell-b-bottom">
                    <a href="https://prettier.io/">Prettier</a>
                </div>
                <div class="table-cell table-cell-b-bottom">
                    Lets me focus on code and not the formatting. Very simple tool that makes me much more productive.
                </div>
            </div>
        </div>
    </section> 
    `
}

export default Technologies;