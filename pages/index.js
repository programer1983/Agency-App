import Head from 'next/head'
import Intro from '../components/Intro'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next App Agency</title>
        <meta name="description" content="The best YT Channel!" />
      </Head>
      <Intro />
    </div>
  )
}
