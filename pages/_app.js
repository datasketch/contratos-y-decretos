import '../styles/global.css';
import Footer from '../components/footer';
import Head from 'next/head';

const config = require('../next.config');

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <base href={config.basePath + '/'} />
      </Head>
      <main className="antialiased font-lato">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default App;
