import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from './blog.module.css'

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>blog - megane42</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>blog</h1>
        あとで書く
      </main>

      <Footer />
    </div>
  )
}
