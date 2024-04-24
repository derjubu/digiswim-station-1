import classes from '../styles/Home.module.css'

import { useState } from 'react'
import { useRouter } from 'next/router'

import Mikro from '../images/icons/mikrofon.png'
import Lupe from '../images/icons/lupe.png'
import Tastatur from '../images/icons/tastatur-schrift.png'
import Denken from '../images/icons/denken.png'

import Label from '@/components/Label/Label'
import Pikto from '@/components/Pikto/Pikto'
import TextArea from '@/components/TextArea/TextArea'
import Button from '@/components/Button/Button'

export default function Result(): JSX.Element {
  const router = useRouter()

  const [task1, setTask1] = useState<string>('')
  const [task2, setTask2] = useState<string>('')

  function nextPage() {
    router.push('/')
  }

  return (
    <div className={classes.main}>
      <h1>Deine Beobachtungen</h1>
      <Label htmlFor="task1">
        <Pikto image={Lupe} />
        Was kannst du beobachten? <Pikto image={Tastatur} />
        <Pikto image={Mikro} />
        <TextArea
          id="task1"
          name="station1-aufgabe1"
          value={task1}
          onChange={(event) => setTask1(event.target.value)}
        />
      </Label>
      <Label htmlFor="task1">
        <Pikto image={Denken} />
        Was denkst du, wie das kommt? <Pikto image={Tastatur} />
        <Pikto image={Mikro} />
        <TextArea
          id="task1"
          name="station1-aufgabe1"
          value={task2}
          onChange={(event) => setTask2(event.target.value)}
        />
      </Label>
      {task1 !== '' && task2 !== '' ? (
        <Button onClick={nextPage}>Beenden</Button>
      ) : (
        <Button isActive={false}>Beenden</Button>
      )}
    </div>
  )
}
