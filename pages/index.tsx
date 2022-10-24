import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TTADS Next.js POC</title>
        <meta name="description" content="TTADS Next.js Proof of Concept" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>GO Checklists</h1>
      </div>
      <ul>
        <li><Link href={"/dex"}>Dex</Link></li>
        <li><Link href={"/shiny"}>ShinyDex</Link></li>
        <li><Link href={"/lucky"}>LuckyDex</Link></li>
        <li><Link href={"/unown"}>UnownDex</Link></li>
        <li><Link href={"/shadow"}>ShadowDex</Link></li>
      </ul>
    </div>
  )
}

export default Home
