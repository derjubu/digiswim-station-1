import React from 'react'
import { useRouter } from 'next/router'
import Button from '@/components/Button/Button'

import classes from '@/styles/Home.module.css'

export default function Alias(): JSX.Element {
  const router = useRouter()

  function nextPage() {
    router.push('/step1')
  }

  return (
    <div className={classes.main}>
      <Button onClick={nextPage}>Los geht&apos;s</Button>
    </div>
  )
}
