export const FAQs = () => {
    return (
        <section aria-labelledby="faqs-heading" className="items-center flex flex-col">
            <div className="relative grid xl:grid-cols-2 gap-x-80 gap-y-10 lg:gap-y-32 w-full items-baseline">
                <div className="col-span-1 row-span-1">
                    <h2 id="faqs-heading" className="fluid-3xl">
                        Frequently Asked
                    </h2>
                </div>
                <div className="col-span-1 row-span-1">
                    <section aria-labelledby="faq1-heading">
                        <div className="flex items-center focus:outline-none justify-between">
                            <h1 id="faq1-heading" className="fluid-xl">
                                How does your experience as a deaf developer positively impact your work?
                            </h1>
                            <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M20 12H4"></path>
                            </svg>
                        </div>

                        <div className="mt-10">
                            <p>
                                As a deaf developer, my unique perspective brings valuable insights to the table.
                                I have developed strong visual and problem-solving skills, allowing me to approach
                                challenges from different angles.
                                My experience fosters a deep understanding of accessibility and inclusivity, ensuring
                                that the projects I work on are designed with all users in mind.
                                By embracing diversity and leveraging my deafness as a strength, I contribute to
                                creating more inclusive and impactful digital experiences.
                            </p>
                        </div>
                        <hr className="mt-10 bg-black" />
                    </section>
                    <section aria-labelledby="faq2-heading" className="mt-10">
                        <div className="flex items-center focus:outline-none justify-between">
                            <h1 id="faq2-heading" className="fluid-xl">
                                How do you effectively communicate and collaborate with team members as a deaf
                                developer?
                            </h1>
                            <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M20 12H4"></path>
                            </svg>
                        </div>

                        <div className="mt-10">
                            <p>
                                Communication is a key aspect of successful collaboration, and as a deaf developer,
                                I have honed my skills in effective communication methods. I am skilled in written
                                communication,
                                utilizing tools such as email, project management platforms, and instant messaging.
                                Additionally,
                                I am proficient in sign language and can leverage video calls and in-person meetings
                                with the support of interpreters when needed.
                                By proactively discussing communication preferences and finding the right tools, I
                                ensure smooth collaboration and understanding within the team.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
