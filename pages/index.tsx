import Image from 'next/image';
import Header from '../components/layouts/Header';
import Head from 'next/head';
import Banner from '../components/home/Banner';
import About from '../components/home/About';
import Brand from '../components/home/Brand';

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
    </>
  );
}
