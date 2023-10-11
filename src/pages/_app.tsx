import '@/sass/main.scss';

import { motion } from "framer-motion";

import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Luis Parra</title>
                <meta property="og:title" content="Luis Parra" />
                <meta name="description"
                    content="Front-end developer with a passion for universal web accessibility and inclusivity. Discover how travel and advocacy for deaf developers shape his unique approach to coding and collaboration."
                    key="desc" />
                <meta property="og:description"
                    content="Front-end developer with a passion for universal web accessibility and inclusivity. Discover how travel and advocacy for deaf developers shape his unique approach to coding and collaboration." />
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
