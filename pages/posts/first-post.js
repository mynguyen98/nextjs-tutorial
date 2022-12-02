import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'

import Layout from '../../components/layout'
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src='https://connect.facebook.net/en_US/sdk.js'
        strategy='lazyOnload'
        onLoad={() => console.log('finish loading')}
      />
      <h1>my first post</h1>
      <Link href='/'>back to home</Link>
    </Layout>
  )
}