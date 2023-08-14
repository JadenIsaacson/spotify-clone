import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <Link href='/spotify'>Spotify Clone</Link>
      </div>
    </main>
  )
}



