import '../styles/globals.css'
import Head from 'next/head';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';


function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </Head>
    <div className='bg-gray-900 min-h-screen' >

    <Nav />
    <Component {...pageProps} />
    <Footer />
    </div>
    </>
  )
}

export default MyApp
