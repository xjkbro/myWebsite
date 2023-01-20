import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'


export default function Notes() {
  return (
    <div className="w-2/3 mx-auto bg-first">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <Head />
      </Head>
      <Navigation />
      
    </div>
  )
}