import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>Nextjs Starter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../public/favicon.png" />
        <meta name="description" content="webapp that contains LeetCode problems" />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
