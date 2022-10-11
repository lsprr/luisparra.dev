import '../styles/globals.css'
import Head from 'next/head';
import Navbar from '../components/Navbar/index';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Luis Parra</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
