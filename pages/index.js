import Image from 'next/future/image';
import oldSchoolRunescape from '../public/assets/image/runescape.png';

import Section from '../content/Section/index';
import Article from '../content/Article/index';
import Br from '../helpers/Br/index';
import Underline from '../helpers/Underline/index';

const css = { width: '100%', height: '100%' };

export default function Home() {

  return (
    <>
      <main>
        <Section>
          <header>
            <h1 className='container mx-auto text-4xl md:text-5xl'>
              Hi, I&apos;m Luis, a Software Engineer who enjoys solving problems and making digital products easier to use.
            </h1>
            <h2 className='container mt-20 text-xl lg:w-8/12 mx-auto lg:ml-auto lg:mr-0'>
              <Underline text='Introduction 01' />
              I enjoy creating web apps, which is a trend in development circles that is becoming increasingly popular throughout the Internet!
              My interest in web development started back in 2006 when I played Runescape, and I had to use a lot of Runescape fan sites for
              many different things such as Zybez for prices, RuneHQ for quest guides, wiki for quick look ups of items
              & NPCs (Non Player Characters), minigame information, tips, etc.
              <Br />
              It turns out that my time spent editing web pages over the years as a hobby has taught me a lot about the nuances of using HTML
              & CSS to manipulate content found on a page. Fast-forward to today, and I have had the privilege of working at a digital agency, and a huge corporation.
              My main focus these days is building accessible, inclusive products and digital experiences.
            </h2>
          </header>
        </Section>
        <Article>
          <figure>
            <Image
              src={oldSchoolRunescape}
              alt="Old School Runescape"
              layout="fill"
              sizes="(max-width: 768px) 50vw,
                      (max-width: 1200px) 100vw,
                      100vw"
              style={css}
            />
          </figure>
        </Article>
      </main>
    </>
  )
}
