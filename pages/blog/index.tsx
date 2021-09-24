import { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Blog({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      Blog page
    </div>
  )
}
