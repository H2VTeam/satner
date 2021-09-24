import { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Contact({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      Contact page
    </div>
  )
}
