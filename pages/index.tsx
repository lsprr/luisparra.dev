import Image from 'next/image';
import TextInlineDecoration from '../components/TextInlineDecoration/index';
import Curse from '../public/assets/image/curse.jpg';

const css = { width: '100%', height: '100%' };

export default function Home() {

  return (
    <>
      <section className='max-w-screen-lg py-12 px-4 m-auto'>
        <header>
          <h1 className='container sm:mt-20 text-xl lg:w-8/12 mx-auto lg:ml-auto lg:mr-0'>
            <TextInlineDecoration text='Introduction 01' />
            Hey There! I&apos;m Luis, your friendly neighborhood Software Engineer with a big heart for problem-solving and refining digital products to deliver the smoothest user experiences.
            Web application development has always been close to my heart, and it thrills me to see it gaining traction within the dev community and all over the internet.
            My love for web development started back in 2006, when I was a die-hard RuneScape fan, always hopping onto sites like Zybez, RuneHQ, and wiki for all my gaming needs.
            <br className='mb-5' />
            Over time, tinkering with web pages turned from a hobby into an opportunity for me to learn the ins and outs of HTML and CSS, helping me master the art of crafting and presenting content.
            Today, I have had the honor of working with both a creative digital agency and a major corporation. My focus now is on building inclusive, accessible products and digital experiences that embrace the beauty of diversity.
            By sharing my personal story with you, I hope to spark inspiration and leave a lasting mark in the world of web development. So, come on in and feel right at home!
          </h1>
        </header>
      </section>
      <article className='max-w-screen-lg py-12 px-4 m-auto'>
        <header>
          <h2 className='container text-xl lg:w-8/12 mx-auto lg:mr-auto lg:ml-0'>
            <TextInlineDecoration text='Project 01' />
          </h2>
        </header>
        <figure className='mt-5 m-auto lg:max-w-screen-sm border-solid border border-[#94866d] dark:border-[#596e96]'>
          <Image
            src={Curse}
            alt="My curse"
            sizes="(max-width: 768px) 50vw,
                      (max-width: 1200px) 100vw,
                      100vw"
            style={css}
            className='container lg:w-8/12 mx-auto lg:ml-auto lg:mr-0'
          />
          <figcaption className='py-2 bg-[#f9f3eb] dark:bg-[#313e59]'>My curse</figcaption>
        </figure>
      </article>
      <section className='max-w-screen-lg py-12 px-4 m-auto'>
        <header>
          <h2 className='container mt-5 text-xl lg:w-8/12 mx-auto lg:ml-auto lg:mr-0'>
            <TextInlineDecoration text='About Me 01' />
            Throughout my journey as a Front End Developer, I have had the amazing opportunity to champion web accessibility at various organizations, including The Clorox Company, Mower Agency, and a bunch of exciting startups.
            Did you know that in the U.S., over one in four people (that is 61 million folks!) live with some form of disability? These people, just like you and me, surf the web, shop online, watch movies, use apps, and access digital content.
            <em> That is why it is so important that we create digital products that are accessible to everyone.</em>
            <br className='mb-5' />
            My expertise covers a wide spectrum of software engineering essentials, like teamwork, a keen eye for detail, and the ability to juggle multiple tasks.
            I absolutely love solving problems—whether it is tweaking a specific part of an existing app or crafting entirely new solutions to meet unique needs.
            <br className='mb-5' />
            But hey, there is more to life than just work! I am also an avid traveler, having ventured to 18 countries so far. That is 7% of the entire world! Can you believe it?
          </h2>
        </header>
      </section>
    </>
  )
}
