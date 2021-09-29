import Header from '../../components/layouts/Header';
import Head from 'next/head';
import Footer from '../../components/layouts/Footer';
import Newsletter from '../../components/layouts/Newsletter';
import Project from '../../components/home/Project';
import Portfolio1 from '../../components/layouts/Portfolio';

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header />
      <Portfolio1 />
      <Project />
      <Newsletter />
      <Footer />
    </div>
  );
}
