import Link from "next/link";
import Image from "next/image";

const images: ({ src: string, alt: string }[][]) = [
    [
        {
            src: "/assets/image/funny-5.jpg",
            alt: "a man holding a basket of apples in an apple orchard.",
        },
        {
            src: "/assets/image/funny-2.jpg",
            alt: "a man standing on top of a jet engine."
        },
        {
            src: "/assets/image/funny-11.jpg",
            alt: " a comic strip with a cartoon of a man giving another man a problem."
        }
    ],
    [
        {
            src: "/assets/image/funny-4.jpg",
            alt: "a comic strip with a cartoon of a man lifting a barbell.",
        },
        {
            src: "/assets/image/funny.png",
            alt: "a man standing on a stage with a microphone in his hand."
        },
        {
            src: "/assets/image/funny-6.jpg",
            alt: " a series of pictures showing different stages of a tree."
        }
    ],
    [
        {
            src: "/assets/image/funny-9.jpg",
            alt: "a picture of a man in a pirate costume with a caption that reads, But It does Run",
        },
        {
            src: "/assets/image/funny-8.jpg",
            alt: "a picture of a woman in a field with mountains in the background."
        },
        {
            src: "/assets/image/funny-10.jpg",
            alt: "a page from a wikipedia with an image of a bug."
        }
    ],
    [
        {
            src: "/assets/image/funny-3.png",
            alt: "a cartoon of two people standing next to each other",
        },
        {
            src: "/assets/image/funny-7.jpg",
            alt: "a comic strip with a man holding a piece of wood."
        },
        {
            src: "/assets/image/funny-12.jpg",
            alt: "a frog with a caption saying when you finish cooling so you can close your."
        }
    ],
];

export const Meme = () => {
    return (
        <section className="bg-white items-center flex flex-col mt-14 lg:mt-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {images.map((imageGroup, index) => (
                    <div key={index} className="grid gap-4">
                        {imageGroup.map((image, i) => (
                            <Image key={i} className="max-w-full rounded-lg lg:h-full" src={image.src} alt={image.alt} width={500} height={500} loading={"lazy"} />
                        ))}
                    </div>
                ))}
            </div>
            <div className="mx-auto text-center hover:bg-[#eee6cf] rounded-full px-5 py-3 my-6 mt-20">
                <Link href="https://github.com/lsprr" target={"_blank"} rel={"noopener noreferrer"}
                      className="flex items-center font-Inter rounded-full bg-transparent bg-no-repeat bg-right-4 bg-center transition-colors duration-300 ease-in-out text-black">
                    View All <span className="line-through mx-1">Unfinished</span> Projects
                    <span className="ml-2">
                        <svg width="20" height="20" viewBox="0 0 49 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 17.1H46.328" stroke="black" strokeWidth="2"/>
                        <path d="M31.0041 1.00002L47.1315 17.1274L31.0041 33.2549" stroke="black" strokeWidth="2"/>
                        </svg>
                    </span>
                </Link>
            </div>
        </section>
    );
};
