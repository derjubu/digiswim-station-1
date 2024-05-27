import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Button from '@/components/Button/Button'

import classes from '@/styles/Home.module.css'
import styles from '@/styles/intro.module.css'

import Task from '@/components/Task/Task'

import Boot from '../images/boot_skaliert.png'

export default function End(): JSX.Element {
  const router = useRouter()

  function nextPage() {
    router.push('/')
  }

  return (
    <div className={classes.main}>
      <h1>Super, du hast es geschafft!</h1>
      <Task>
        Danke, dass du die Experimente durchgeführt hast <br /> <br />
        Drücke auf den Knopf unten, um wieder zurück zum Anfang zu kommen.
      </Task>
      <Image src={Boot} alt="Ein Boot" className={styles.image} />
      <Button onClick={nextPage}>Zum Anfang</Button>
    </div>
  )
}
