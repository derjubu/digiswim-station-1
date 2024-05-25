import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Button from '@/components/Button/Button'

import classes from '@/styles/Home.module.css'
import Task from '@/components/Task/Task'

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
      <Button onClick={nextPage}>Zum Anfang</Button>
    </div>
  )
}
