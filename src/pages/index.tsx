import styles from '../styles/index.module.css'
import classes from '../styles/Home.module.css'
import Image from 'next/image'
import Title from '../images/hero.jpg'
import Button from '../components/Button/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Intro(): JSX.Element {
  const router = useRouter()

  function onCLick(event: MouseEvent) {
    event.preventDefault()
    router.push('/alias')
  }

  return (
    <div className={classes.main}>
      <h1>Digitales Experiemt zum Thema</h1>
      <div className={styles.imageContainer}>
        <Image
          className={styles.titleImage}
          src={Title}
          alt="Willkommen bei Digiswim"
          fill
        />
      </div>
      <div className={styles.centered}>
        <Link href="/alias">
          <Button onClick={onCLick}>Lass uns loslegen</Button>
        </Link>
      </div>
    </div>
  )
}
