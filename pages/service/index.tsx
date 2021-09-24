import { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Service({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Service</title>
      </Head>
      Service page
    </div>
  )
}
