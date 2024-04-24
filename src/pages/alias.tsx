import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Button from '../components/Button/Button'
import classes from '@/styles/Home.module.css'
import Form from '../components/Form/Form'
import Label from '../components/Label/Label'
import styles from '../styles/alias.module.css'

export default function Alias(): JSX.Element {
  const router = useRouter()

  function submitAlias(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!alias || !age || !grade || !gender) {
      console.log({ alias }, { age }, { grade }, { gender })
      window.alert('Bitte fülle alle Felder aus')
    } else {
      window.localStorage.setItem('alias', alias)
      router.push('/overview')
    }
  }

  const [alias, setAlias] = useState('')
  const [age, setAge] = useState('')
  const [grade, setGrade] = useState('')
  const [gender, setGender] = useState('')

  return (
    <div className={classes.main}>
      <Form onSubmit={submitAlias}>
        <h1>Erzähle uns etwas über dich</h1>
        Wie heißt du?
        <Label htmlFor="alias">
          <input
            id="alias"
            value={alias}
            type="text"
            onChange={(event) => setAlias(event.target.value)}
          />
        </Label>
        Wie alt bist du?
        <Label htmlFor="age">
          <input
            id="age"
            value={age}
            type="number"
            onChange={(event) => setAge(event.target.value)}
          />
        </Label>
        In welche Klasse gehst du?
        <Label htmlFor="grade">
          <input
            type="radio"
            id="3grade"
            name="grade"
            value="3"
            onClick={(event) => {
              const target = event.target as HTMLButtonElement
              if (target) setGrade(target.value as string)
            }}
          />
          <label htmlFor="3grade" className={styles.radioLabel}>
            3. Klasse
          </label>
          <input
            type="radio"
            id="4grade"
            name="grade"
            value="4"
            onClick={(event) => {
              const target = event.target as HTMLButtonElement
              if (target) setGrade(target.value as string)
            }}
          />
          <label htmlFor="4grade" className={styles.radioLabel}>
            4. Klasse
          </label>
        </Label>
        Bist du ein Mädchen oder ein Junge
        <Label htmlFor="Gender">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onClick={(event) => {
              const target = event.target as HTMLButtonElement
            }}
          />
          <label htmlFor="male" className={styles.radioLabel}>
            Junge
          </label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onClick={(event) => {
              const target = event.target as HTMLButtonElement
              if (target) setGender('male')
            }}
          />
          <label htmlFor="female" className={styles.radioLabel}>
            Mädchen
          </label>
          <div className={styles.answerBlock}>
            <input
              type="radio"
              id="none"
              name="gender"
              value="none"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setGender('none')
              }}
            />
            <label htmlFor="none" className={styles.radioLabel}>
              Möchte ich nicht sagen
            </label>
          </div>
        </Label>
        <Button>Los geht&apos;s</Button>
      </Form>
    </div>
  )
}
