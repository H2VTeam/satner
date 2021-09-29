import Image from 'next/image';
import Header from '../components/layouts/Header';
import Head from 'next/head';
import Banner from '../components/home/Banner';
import About from '../components/home/About';
import Brand from '../components/home/Brand';
import Feature from '../components/home/Feature';
import Footer from '../components/layouts/Footer';
import Newsletter from '../components/layouts/newsletter';

export default function Home() {
  return (
    <>
      <Head>
        <title>Satner Portfolio</title>
      </Head>
      <Header />
      <Banner />
      <About />
      <Brand />
      <Feature />
      <Newsletter />
      <Footer />
    </>
  );
}
