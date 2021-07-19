import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>zack-cook.com</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <h1 className={styles.title}>
            Welcome
          </h1>
          <p className={styles.description}>
            Site is under construction.  Please check back later.
          </p>

          <Link href="/blogs">Blogs</Link>
    </div>
  )
}
