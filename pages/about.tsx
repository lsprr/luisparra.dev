import TextInlineDecoration from '../components/TextInlineDecoration/index';

export default function About() {
    return (
        <>
            <section className='max-w-screen-lg py-12 px-4 m-auto'>
                <header>
                    <h1 className='container mx-auto text-4xl md:text-5xl'>
                        Hi! I&apos;m Luis Parra!
                    </h1>
                    <h2 className='container mt-20 text-xl lg:w-8/12 mx-auto lg:mr-auto lg:ml-0'>
                        <TextInlineDecoration text='About Me 01' />
                        Throughout my career, I have had the privilege of practicing web accessibility as a Front End Developer for various companies, including The Clorox Company, Mower Agency, and numerous startups.
                        In the U.S. alone, over one in four people, or 61 million individuals, live with some form of disability. These individuals, like everyone else, navigate the web, shop online, stream movies, use apps, and access digital content.
                        Consequently, it is vital that they have <i>equal access</i> to the digital products we create.
                        <br className='mb-5' />
                        My skill set encompasses an array of software engineering aspects, such as teamwork, meticulous attention to detail, and effective multitasking.
                        I am truly passionate about problem-solving, whether it involves optimizing a specific component of an existing application or devising entirely new solutions to address particular needs.
                        <br className='mb-5' />
                        Aside from my professional pursuits, I also have a keen interest in traveling. To date, I have explored 18 countries, which equates to 7% of the entire world!                    </h2>
                </header>
            </section>
        </>
    )
}