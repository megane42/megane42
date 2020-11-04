import Head from 'next/head'
import Footer from '../components/footer'
import styles from './index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>megane42</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          @megane42
        </h1>
      </main>

      <Footer />
    </div>
  )
}
