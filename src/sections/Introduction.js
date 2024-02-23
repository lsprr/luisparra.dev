const imgUrl = new URL('../../public/assets/images/man.webp', import.meta.url).href

const Introduction = () => {
  return `
  <div class="u-fixed-width">
    <h2 class="p-muted-heading">Introduction</h2>
  </div>
  <section class="p-strip is-deep">
    <div class="row--25-75">
      <div class="col">
        <div class="decorative">
          <img
            id="decorative__career"
            src=${imgUrl}
            height="700"
            width="700"
            alt="A monochrome sketch of a space man using a laptop."
            class="avatar"
            aria-hidden="true"
          />
        </div>
      </div>
      <div class="col">
        <h1 class="p-heading--3">
          Engineering the Web, One Solution at a Time 
        </h1>
        <h2 class="p-heading--4 mt-1">Hello there! I'm Luis.</h2>
        <p>
          I am a passionate software engineer who loves turning
          challenges into creative solutions. Being deaf has given me a unique
          perspective that enriches my approach to problem-solving.
        </p>
        <p>
          With experience at top-notch organizations like The Clorox Company and
          Mower, I've developed a love for crafting innovative software solutions.
          My focus is not just on efficiency, but also on creating inclusive and
          user-centric applications.
        </p>
        <p>
          Accessibility in technology is a core value of mine. I actively
          contribute to projects that aim to make technology usable for everyone.
          I also enjoy mentoring and sharing knowledge with aspiring developers,
          fostering a culture of continuous learning and growth.
        </p>
        <p>
          Traveling is my inspiration. Exploring new places fuels fresh insights
          and ideas that I integrate into my work, driving innovation in my
          software projects.
        </p>
        <p>
          I'm thrilled about the endless possibilities in software engineering and
          committed to lifelong learning and collaboration. Let's innovate
          together and make technology accessible and impactful for all!
        </p>
      </div>
    </div>
  </section>
  `
}

export default Introduction;