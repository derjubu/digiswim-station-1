import React from 'react'
import { useRouter } from 'next/router'
import Button from '@/components/Button/Button'

import classes from '@/styles/Home.module.css'

export default function Alias(): JSX.Element {
  const router = useRouter()

  function nextPage() {
    router.push('/intro')
  }

  return (
    <div className={classes.main}>
      <Button>Los geht&apos;s</Button>
    </div>
  )
}
