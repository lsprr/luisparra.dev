import '../styles/globals.css'
import { AppProps } from 'next/app';
import Head from 'next/head';
import Navbar from '../components/Navigation/Navbar';

/**
 * TODO: Need to move this array of menu items in a separate file.
*/
const menuItems = [
  { label: 'About', href: '/about' },
  { label: 'GitHub', href: 'https://github.com/lsprr', isExternal: true }
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Luis Parra</title>
        <meta property="og:title" content="Luis Parra" />
        <meta name="description" content="Luis Parra, a dedicated Software Engineer, takes pleasure in resolving challenges and streamlining digital products to ensure a user-friendly experience." key="desc" />
        <meta property="og:description"
          content="Luis Parra, a dedicated Software Engineer, takes pleasure in resolving challenges and streamlining digital products to ensure a user-friendly experience." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Navbar menuItems={menuItems} />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
