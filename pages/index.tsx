import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Page2Index from './page2'

const Home: NextPage = () => {
  return (
    <body>
      <h1>Hello Next JS</h1>
      <br />
      <Link href="/page2">
        <a className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Navigate
        </a>
      </Link>
    </body>
  )
}

export default Home
