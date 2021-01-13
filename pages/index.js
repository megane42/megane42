import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from './index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>megane42</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.logo}>
          <img className={styles.logoImage} src="/portrait.jpg" />
          <h1 className={styles.logoText}>@megane42</h1>
        </div>
      </main>

      <Footer />
    </div>
  )
}
