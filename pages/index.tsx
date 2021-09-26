import Image from 'next/image';
import Header from '../components/layouts/Header';
import Head from 'next/head';
import Banner from '../components/home/Banner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Satner Portfolio</title>
      </Head>
      <Header />
      <Banner />
    </>
  );
}
