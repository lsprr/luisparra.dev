const faqs = [
    {
        'id': 1,
        'question': 'How has traveling shaped your approach to web development?',
        'answer': "Traveling has opened my mind. Every new place shows me different cultures and perspectives, helping me understand and connect with a variety of web users. It's taught me to think beyond my own experiences and to work on creating web experiences that everyone can connect with."
    },
    {
        'id': 2,
        'question': 'How does your experience as a deaf developer enhance your software engineering projects?',
        'answer': "Being a deaf developer has taught me the importance of inclusivity in the digital world. It has made me more aware of the barriers people can face when using non-inclusive designs. This awareness drives me to build software that is accessible to everyone, no matter their abilities or disabilities."
    },
    {
        'id': 3,
        'question': 'How do you effectively communicate and collaborate with team members given your unique experiences?',
        'answer': "Communication is key in any project, and I've found ways to do it well. I use visual aids and written methods to share my thoughts, and I fully utilize platforms with real-time captioning for virtual meetings. My experience has also helped me become better at picking up non-verbal cues, which helps create a workplace where understanding and respect are prioritized."
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
                <details key={faq.id} open>
                    <summary role="button" key={faq.id}>{faq.question}</summary>
                    <p>{faq.answer}</p>
                </details>
            ))}
        </section>
    )
}
