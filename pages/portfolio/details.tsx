import { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function PortfolioDetail({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Portfolio Details</title>
      </Head>
      Portfolio Details page
    </div>
  )
}
