interface Props {
    text: string;
}

const TextInlineDecoration = ({ text }: Props) => {
    return (
        <>
            <span className='leading-none tracking-normal uppercase text-sm'>{text}</span>
            <span className='relative top-7 right-auto bottom-auto inline-block w-16 h-px mr-5 ml-1 bg-black text-transparent dark:bg-[#cbd9f4]'>__</span>
        </>
    )
}

export default TextInlineDecoration;