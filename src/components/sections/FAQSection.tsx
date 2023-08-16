const faqs = [
    {
        'id': 1,
        'question': 'How has traveling shaped your approach to web development?',
        'answer': "Traveling has immensely broadened my horizons. With each destination, I'm exposed to diverse cultures, perspectives, and ways of life. This has made me more empathetic towards the varied needs and preferences of global web users. I've learned that a design or feature popular in one region might not be well-received in another. Such insights guide my approach to creating universally engaging web experiences. Traveling has taught me to always design and develop with a global audience in mind."
    },
    {
        'id': 2,
        'question': 'How does your experience as a deaf developer enhance your software engineering projects?',
        'answer': "Being a deaf developer has given me a unique vantage point. It's heightened my sensitivity towards accessibility and inclusivity in digital products. I've firsthand knowledge of the barriers that can arise due to non-inclusive designs, and I actively work to prevent them. It’s not just about ensuring software is accessible to the deaf community; it's about making sure it caters to all abilities and disabilities. My personal experience amplifies my commitment to creating software that truly everyone can use."
    },
    {
        'id': 3,
        'question': 'How do you effectively communicate and collaborate with team members given your unique experiences?',
        'answer': "Communication is the cornerstone of any successful project. Over the years, I've honed an effective toolkit of strategies. I utilize visual tools, written communication, and often turn to platforms that offer real-time captioning for virtual meetings. I encourage open dialogue and always make sure my teammates feel comfortable asking questions or seeking clarifications. My experiences have also made me a keen observer, and I often pick up on non-verbal cues that others might overlook. It's all about creating an environment of mutual understanding and respect."
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
