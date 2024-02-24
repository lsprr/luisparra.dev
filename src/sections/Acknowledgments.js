import { getImageUrl } from '../helpers/index.js';

const Acknowledgments = () => {
    return `
    <div class="u-fixed-width">
        <h2 class="p-muted-heading">Acknowledgments</h2>
    </div>
    <section class="p-strip is-deep">
        <div class="row--25-75">
            <div class="col">
                <div class="decorative">
                    <img
                        id="decorative__thumb"
                        src=${getImageUrl('thumb.webp')}
                        height="700"
                        width="700"
                        alt="A monochrome sketch of a thumbs up sign."
                        class="avatar"
                        loading="lazy"
                        aria-hidden="true"
                    />
                </div>
            </div>
            <div class="col">
                <p>
                    A big thanks goes out to my family, friends, and mentors for their invaluable support and diverse ideas that have been crucial to my journey. Together, we are making technology more empowering and connected. I would also like to express my gratitude to Humanities Studio for graciously allowing me to use their illustration on my website.          
                </p>
            </div>
        </div>
    </section>
    `
}

export default Acknowledgments;