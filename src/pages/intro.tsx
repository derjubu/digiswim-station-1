import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Button from '@/components/Button/Button'

import classes from '@/styles/Home.module.css'
import styles from '@/styles/intro.module.css'

import Pikto from '@/components/Pikto/Pikto'
import Lupe from '../images/icons/lupe.png'
import Boot from '../images/boot_skaliert.png'
import Task from '@/components/Task/Task'

export default function Intro(): JSX.Element {
  const [aliasName, setAliasName] = useState('')

  useEffect(() => setAliasName(window!.localStorage!.getItem('alias')!))

  const router = useRouter()

  function nextPage() {
    router.push('/step1')
  }

  return (
    <div className={classes.main}>
      <h1>Hallo {aliasName}, lass uns starten!</h1>
      <Task>Bearbeite die folgenden Aufgaben.</Task>

      <Task>
        <Pikto image={Lupe} />
        Beobachte, was passiert. Am Ende sollst du überlegen, warum du zu deinem
        Ergebnis gekommen bist.
      </Task>
      <Image src={Boot} alt="Ein Boot" className={styles.image} />
      <Button onClick={nextPage}>Los geht&apos;s</Button>
    </div>
  )
}
