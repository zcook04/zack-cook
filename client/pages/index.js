import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>
            Welcome
          </h1>
          <p className={styles.heroDescription}>
            Site is under construction.  Please check back later.
          </p>
    </div>
  )
}
