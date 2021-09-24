import { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Element({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Elements</title>
      </Head>
      Elements page
    </div>
  )
}
