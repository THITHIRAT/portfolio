import type { NextPage } from 'next'
import Head from 'next/head'
import TopNavigation from '../components/TopNavigation'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Thithirat</title>
        <meta name="description" content="Thithirat's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNavigation />
    </div>
  )
}

export default Home
