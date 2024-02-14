const FAQ = () => {
  return `
  <section>
  <div class="govuk-main-wrapper govuk-width-container">
    <div class="govuk-grid-row">
      <div class="govuk-grid-column-full">
        <h2 class="govuk-heading-l">Frequently Asked Questions</h2>
        <hr class="underline" />
        <div
          class="govuk-accordion"
          data-module="govuk-accordion"
          id="accordion-default"
        >
          <div class="govuk-accordion__section">
            <div class="govuk-accordion__section-header">
              <h2 class="govuk-accordion__section-heading">
                <span
                  class="govuk-accordion__section-button"
                  id="accordion-default-heading-1"
                >
                  How do you communicate with team members and clients in a work
                  setting?
                </span>
              </h2>
            </div>
            <div
              id="accordion-default-content-1"
              class="govuk-accordion__section-content"
              aria-labelledby="accordion-default-heading-1"
            >
              <p class="govuk-body">
                Communication is key in any work setting, and I use a variety of
                methods to ensure effective interaction. I am proficient in sign
                language and also use text-based communication like emails and
                instant messaging. For meetings, I often rely on captioning
                services or sign language interpreters. Technology has made
                communication much more accessible, and I am always open to
                using different tools to make sure we can collaborate
                effectively.
              </p>
            </div>
          </div>
          <div class="govuk-accordion__section">
            <div class="govuk-accordion__section-header">
              <h2 class="govuk-accordion__section-heading">
                <span
                  class="govuk-accordion__section-button"
                  id="accordion-default-heading-2"
                >
                  Does being deaf affect your ability to work on software
                  projects?
                </span>
              </h2>
            </div>
            <div
              id="accordion-default-content-2"
              class="govuk-accordion__section-content"
              aria-labelledby="accordion-default-heading-2"
            >
              <p class="govuk-body">
                My being deaf does not hinder my ability to work on software
                projects. In fact, it has honed my skills in attention to detail
                and problem-solving. I approach tasks with a unique perspective,
                ensuring inclusivity and accessibility in the software I
                develop. My focus is on creating solutions that are
                user-friendly for a diverse audience, which includes considering
                various accessibility needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    `
}

export default FAQ;