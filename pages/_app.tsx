import { AppProps } from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import '../styles/header.scss';
import '../styles/home.scss';
import '../styles/footer.scss';
import '../styles/newsletter.scss';
import '../styles/testimonial.scss';
import '../styles/project.scss';
import '../styles/style.scss';

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <div>
      <Head>
        <link
          rel="icon"
          href="/icons/icon.webp"
          type="image/png"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
