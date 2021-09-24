import { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/header.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/icons/icon.webp" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
