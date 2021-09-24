import { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Portfolio({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      Portfolio page
    </div>
  )
}
