import { AppProps } from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.scss';
import '../styles/home.scss';

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
