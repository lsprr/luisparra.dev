import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className='bg-white dark:bg-[#172136] dark:text-[#cbd9f4]'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
