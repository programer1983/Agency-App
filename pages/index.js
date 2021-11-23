import Head from 'next/head'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import { data } from '../data'
import styles from '../styles/Home.module.css'

export default function Home({services}) {
 
  return (
    <div>
      <Head>
        <title>Next App Agency</title>
        <meta name="description" content="The best YT Channel!" />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  )
}

export const getStaticProps = async () => {
  const services = data
  return {
    props: { services },
  }
}
