import '../styles/globals.css'
import Head from 'next/head';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { Spin } from './components/Spin';
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [spin, setSpin] = useState(false)
  return (

    <>
    <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Quizipie - 2022</title>
      </Head>
    <div className='bg-gray-900 min-h-screen' >
      {spin && <Spin /> }
    <Nav setSpin={setSpin}/>
    <Component {...pageProps} setSpin={setSpin}/>
    <Footer />
    </div>
    </>
  )
}

export default MyApp
