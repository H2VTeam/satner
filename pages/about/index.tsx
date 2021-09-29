import Header from '../../components/layouts/Header';
import Head from 'next/head';
import About1 from '../../components/home/About';
import About2 from '../../components/layouts/About';
import Brand from '../../components/home/Brand';
import Feature from '../../components/home/Feature';
import Footer from '../../components/layouts/Footer';
import Newsletter from '../../components/layouts/Newsletter';
import Testimonial from '../../components/layouts/Testimonial';
import Project from '../../components/home/Project';

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <About2 />
      <About1 />
      <Brand />
      <Feature />
      <Project />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
}
