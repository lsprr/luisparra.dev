export const ThematicBreak = ({description}: { description: string }) => {
    return (
        <>
            <div className="sr-only">{description}</div>
            <hr className="mx-auto container relative top-negative-80 w-full h-0.5 px-4 bg-black mt-40 mb-24"/>
        </>
    )
}