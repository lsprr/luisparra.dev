import '@/sass/main.scss';

import { motion } from "framer-motion";

import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Luis Parra &mdash; Front-End Developer</title>
                <meta property="og:title" content="Luis Parra &mdash; Front-End Developer" />
                <meta name="description"
                    content="Experienced front-end developer harmonizing the digital realm for diverse consumer brands across the world. Making the web universally accessible one line of code at a time."
                    key="desc" />
                <meta property="og:description"
                    content="Experienced front-end developer harmonizing the digital realm for diverse consumer brands across the world. Making the web universally accessible one line of code at a time." />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest"></link>
            </Head>
            <motion.main
                className='container'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <Component {...pageProps} />
            </motion.main>
        </>
    )
}

export default MyApp
