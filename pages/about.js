import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from './about.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>about - megane42</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>about</h1>
        <ul className={styles.profileList}>
          <li>@megane42</li>
          <li>Tokyo</li>
          <li>好きなパン: クロワッサン</li>
        </ul>
      </main>

      <Footer />
    </div>
  )
}
