import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className='bg-white dark:bg-[#0d1117] dark:text-[#c9d1d9]'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
