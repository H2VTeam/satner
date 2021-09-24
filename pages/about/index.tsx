import { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function About({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      About page
    </div>
  )
}
