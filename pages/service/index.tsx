import Header from '../../components/layouts/Header';
import Head from 'next/head';
import Feature from '../../components/home/Feature';
import Footer from '../../components/layouts/Footer';
import Newsletter from '../../components/layouts/Newsletter';
import Testimonial from '../../components/layouts/Testimonial';
import Service1 from '../../components/layouts/Service';

export default function Service() {
  return (
    <div>
      <Head>
        <title>Service</title>
      </Head>
      <Header />
      <Service1 />
      <Feature />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
}
