interface Props {
    text: string;
}

const Underline = ({ text }: Props) => {
    return (
        <>
            <span className='leading-none tracking-normal uppercase text-sm'>{text}</span>
            <span className='relative top-7 right-auto bottom-auto inline-block w-16 h-px mr-5 ml-1 bg-black text-transparent dark:bg-white'>__</span>
        </>
    )
}

export default Underline;