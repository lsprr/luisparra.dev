import Underline from '../components/Underline/index';

export default function About() {
    return (
        <>
            <section className='max-w-screen-lg py-12 px-4 m-auto'>
                <header>
                    <h1 className='container mx-auto text-4xl md:text-5xl'>
                        Hi! I&apos;m Luis Parra!
                    </h1>
                    <h2 className='container mt-20 text-xl lg:w-8/12 mx-auto lg:mr-auto lg:ml-0'>
                        <Underline text='About Me 01' />
                        I had the opportunity to practice web-accessibility as Front End Developer for multiple companies, such as The Clorox Company, Mower Agency, and multiple startups.
                        <br className='mb-5' />
                        In the U.S. alone, 61 million people (over 1 in 4) live with some type of disability. Like everyone else, they search the web, shop online, stream movies, use apps, and access digital content. It should come as no surprise that they want, expect, and deserve <i>equal access</i> to our products.
                        <br className='mb-5' />
                        My skill set covers a variety of areas related to software engineering such as teamwork, attention to detail, and multitasking. I get excited about anything that involves solving problems, whether it be figuring out how to optimize a certain part of an existing application or entirely coming up with new applications to solve certain needs.
                        <br className='mb-5' />
                        My interest also lies in traveling... I have visited 18 countries (7% of the whole world)!
                    </h2>
                </header>
            </section>
            <article className='max-w-screen-lg py-12 px-4 m-auto'>
                <iframe title="Interactive Visited Countries Map" className='container mx-auto w-full outline-none h-[26rem] md:h-[41rem]' src="//www.fla-shop.com/visited-countries/embed/?st=AW%2CBB%2CBS%2CBZ%2CCR%2CCW%2CDO%2CES%2CHN%2CMX%2CPR%2CPT%2CSX%2CTC%2CTT%2CVE%2CVG%2CVI&vc=1ca032&uc=b3c3ca&hc=00ff00&bc=000000&ss=on" frameBorder="0" scrolling="no"></iframe>
            </article>
        </>
    )
}