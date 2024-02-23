const imgUrl = new URL('../../public/assets/images/playful.webp', import.meta.url).href

const AfterHours = () => {
    return `
    <div class="u-fixed-width">
        <h2 class="p-muted-heading">After Hours</h2>
    </div>
    <section class="p-strip is-deep">
        <div class="row--25-75">
        <div class="col">
            <div class="decorative">
                <img
                    id="decorative__playful"
                    src=${imgUrl}
                    height={100}
                    width={100}
                    alt="A monochrome sketch of a young boy gripping a sword in his hand."
                    class="avatar"
                    loading="lazy"
                    aria-hidden="true"
                />
            </div>
        </div>
        <div class="col">
            <p>
                Outside of my professional world of software engineering, I cherish the time spent with family and friends, 
                and immersing myself in diverse experiences. 
            </p>
            <p>
                Family is my cornerstone. Whether it is enjoying a simple family dinner or engaging in fun activities, 
                these moments are invaluable. They bring laughter, warmth, and a sense of togetherness that is irreplaceable. 
            </p>
            <p>
                My friends are a vital part of my life too. Bonding over Old School Runescape sessions, we navigate through 
                this virtual world, which is as much about friendship as it is about the game. It is our way to connect, 
                relax, and make memories. 
            </p>
            <p>
                Travel holds a special place in my heart. Each journey, whether near or far, brings a new adventure and perspective. 
                The experiences gathered from traveling the world not only enrich my personal life but also inspire 
                fresh ideas in my professional endeavors. 
            </p>
            <p>
                Whether it is spending quality time with loved ones, gaming with friends, or exploring new destinations, 
                these pursuits outside of work keep me grounded, rejuvenated, and ready for life is next adventure. 
            </p>
        </div>
        </div>
    </section>
    `
}

export default AfterHours;