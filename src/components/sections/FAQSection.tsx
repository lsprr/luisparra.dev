const faqs = [
    {
        'id': 1,
        'question': 'How has traveling shaped your approach to web development?',
        'answer': "Traveling has truly opened my eyes. Every new place introduces me to different cultures and viewpoints, helping me to understand and connect with a diverse group of web users better. It's taught me to see beyond my immediate surroundings, adapting my work to appeal to people from all corners of the world. Traveling has turned me into a developer with a global mindset, always keen to create web experiences that resonate universally."
    },
    {
        'id': 2,
        'question': 'How does your experience as a deaf developer enhance your software engineering projects?',
        'answer': "My journey as a deaf developer has been a blessing in disguise. It has sharpened my focus on making the digital space more inclusive and accessible. I'm acutely aware of the obstacles that can emerge from non-inclusive designs, and I'm committed to avoiding them in my projects. It's not just about making the web accessible for the deaf community, but for everyone, regardless of their abilities or disabilities. My personal experiences fuel my passion to build software that truly welcomes all."
    },
    {
        'id': 3,
        'question': 'How do you effectively communicate and collaborate with team members given your unique experiences?',
        'answer': "Good communication forms the backbone of any project, and I have found ways to excel at it. I rely on visual aids and written methods to convey my ideas, and I make the most of platforms with real-time captioning for virtual meetings. I promote a culture of open conversation where everyone feels at ease to ask questions or seek clarification. Being a deaf developer has fine-tuned my ability to notice non-verbal signals, helping to foster an environment where understanding and respect flourish."
    }
]

export const FAQSection = () => {
    return (
        <section aria-label="Frequently Asked Questions">
            <header>
                <h2>
                    Frequently Asked Questions
                </h2>
            </header>
            {faqs.map((faq) => (
                <details key={faq.id}>
                    <summary role="button" key={faq.id}>{faq.question}</summary>
                    <p>{faq.answer}</p>
                </details>
            ))}
        </section>
    )
}
