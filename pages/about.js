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
        <div className={styles.row}>

          <div className={styles.block}>
            <h1>about</h1>
            <ul className={styles.list}>
              <li>@megane42</li>
              <li>Tokyo, Japan</li>
              <li><a href="https://twitter.com/megane42" target="_blank" rel="noopener">twitter</a></li>
              <li><a href="https://github.com/megane42" target="_blank" rel="noopener">github</a></li>
              <li><a href="https://qiita.com/megane42" target="_blank" rel="noopener">qiita</a></li>
              <li><a href="https://speakerdeck.com/megane42/" target="_blank" rel="noopener">speakerdeck</a></li>
            </ul>
          </div>

          <div className={styles.block}>
            <h1>product</h1>
            <ul className={styles.list}>
              <li><a href="https://starlight.tsudanuma-studio.net/" target="_blank" rel="noopener">starlight loading</a></li>
              <li><a href="https://dj-giftee.web.app/" target="_blank" rel="noopener">dj-giftee</a>
                <ul className={styles.list}>
                  <li><a href="https://speakerdeck.com/megane42/how-to-make-dj-giftee" target="_blank" rel="noopener">description</a></li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={styles.block}>
            <h1>weight</h1>
            <ul className={styles.list}>
              <li>TODO</li>
            </ul>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
