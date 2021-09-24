import { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function BlogDetail({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Blog Details</title>
      </Head>
      BlogDetails page
    </div>
  )
}
