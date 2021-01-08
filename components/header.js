import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <img className={styles.logoImage} src="/portrait.jpg" alt="megane42" />
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
