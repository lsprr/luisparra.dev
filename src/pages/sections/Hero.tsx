export const Hero = () => {
    return (
        <main className="grid grid-cols-1 h-96 bg-white place-content-center">
            <div>
                <figure aria-labelledby="emoji-description" className="text-center fluid-xl">
                    <figcaption id="emoji-description" className="visually-hidden sr-only">List of emojis symbolizing various aspects</figcaption>
                    <ul className="space-x-2">
                        <li>
                            <span role="img" aria-label="love-hand">🤟</span>
                            <span role="img" aria-label="clapping-hands">👏</span>
                            <span role="img" aria-label="blue-heart">💙</span>
                            <span role="img" aria-label="computer">🖥️</span>
                            <span role="img" aria-label="notebook">📔</span>
                            <span role="img" aria-label="brain">🧠</span>
                            <span role="img" aria-label="light-bulb">💡</span>
                        </li>
                    </ul>
                </figure>
            </div>
            <div className="text-center w-full m-auto">
                <h1 className="flex items-center justify-center fluid-6xl">
                    Luis Parra <sup className="fluid-base" aria-hidden="true">©</sup>
                </h1>
                <p className="text-gray-900 uppercase fluid-base w-full md:w-3/4 lg:w-1/2 mx-auto">
                    An <span className="inline-block mt-1 px-2 border border-black rounded-full leading-normal">accolade-laden</span> front-end developer harmonizing the digital realm for diverse consumer brands across the <span role="img" aria-label="world">~</span>, making the web universally accessible one line of code at a time.
                </p>
            </div>
        </main>
    );
};
