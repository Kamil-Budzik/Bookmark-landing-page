import type { NextPage } from 'next'
import Head from 'next/head'

import Navigation from '../components/Navigation'
import AboutMe from '../components/AboutMe'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Bookmark</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Navigation />
        <AboutMe />
      </main>
    </div>
  )
}

export default Home
