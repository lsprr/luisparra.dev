import Image from 'next/image';
import TextInlineDecoration from '../components/TextInlineDecoration/index';
import oldSchoolRunescape from '../public/assets/image/runescape.png';

const css = { width: '100%', height: '100%' };

export default function Home() {

  return (
    <>
      <section className='max-w-screen-lg py-12 px-4 m-auto'>
        <header>
          <h1 className='container mx-auto text-4xl md:text-5xl'>
            Hello! I&apos;m Luis, a Software Engineer with a passion for problem-solving and enhancing the usability of digital products to create seamless user experiences.
          </h1>
          <h2 className='container mt-20 text-xl lg:w-8/12 mx-auto lg:ml-auto lg:mr-0'>
            <TextInlineDecoration text='Introduction 01' />
            Developing web applications has always been a passion of mine, and it is exciting to see this trend gaining popularity within the development community and across the internet.
            My journey into web development began in 2006 when I was an avid Runescape player, frequently utilizing various fan sites, such as Zybez for price checks, RuneHQ for quest guides,
            and wiki for quick references on items, NPCs, minigame details, and useful tips.
            <br className='mb-5' />
            Over the years, my hobby of editing web pages has provided me with invaluable insights into the nuances of utilizing HTML and CSS to effectively manage and present content.
            Fast-forward to the present, and I have had the privilege of working in both a digital agency and a prominent corporation. My current focus is on designing accessible, inclusive products and digital experiences that cater to a diverse audience.
            By sharing my personal journey, I hope to inspire others and make a meaningful impact in the world of web development.
          </h2>
        </header>
      </section>
      <article className='max-w-screen-lg py-12 px-4 m-auto'>
        <figure>
          <Image
            src={oldSchoolRunescape}
            alt="Old School Runescape"
            sizes="(max-width: 768px) 50vw,
                      (max-width: 1200px) 100vw,
                      100vw"
            style={css}
            className='container lg:w-8/12 mx-auto lg:ml-auto lg:mr-0'
          />
        </figure>
      </article>
    </>
  )
}
