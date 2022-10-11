import '../styles/globals.css'
import Head from 'next/head';
import Navbar from '../components/Navbar/index';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Luis Parra</title>
        <meta property="og:title" content="Luis Parra" />
        <meta name="description" content="Luis Parra is a Software Engineer who enjoys solving problems and making digital products easier to use." key="desc" />
        <meta property="og:description"
          content="Luis Parra is a Software Engineer who enjoys solving problems and making digital products easier to use." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
