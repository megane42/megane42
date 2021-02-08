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
          <li>Tokyo, Japan</li>
          <li><a href="https://twitter.com/megane42" target="_blank" rel="noopener">twitter</a></li>
          <li><a href="https://github.com/megane42" target="_blank" rel="noopener">github</a></li>
          <li><a href="https://qiita.com/megane42" target="_blank" rel="noopener">qiita</a></li>
          <li><a href="https://speakerdeck.com/megane42/" target="_blank" rel="noopener">speakerdeck</a></li>
        </ul>
      </main>

      <Footer />
    </div>
  )
}
