import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from './index.module.css'

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>megane42</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <img className={styles.logoImage} src="/portrait.jpg" />
          <h1 className={styles.logoText}>@megane42</h1>

          <nav>
            <ul className={styles.nav}>
              <li>
                <Link href="/about">
                  <a>about</a>
                </Link>
              </li>
              <li>
                /
              </li>
              <li>
                <Link href="/blog">
                  <a>blog</a>
                </Link>
              </li>
            </ul>
          </nav>

        </div>
      </main>

      <Footer />
    </div>
  )
}
