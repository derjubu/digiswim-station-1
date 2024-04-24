import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Button from '../components/Button/Button'
import styles from '@/styles/Home.module.css'
import Form from '../components/Form/Form'
import Label from '../components/Label/Label'
import classes from '../styles/alias.module.css'

export default function Alias(): JSX.Element {
  const router = useRouter()

  function submitAlias(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!alias || !age || !grade || !gender) {
      window.alert('Bitte fülle alle Felder aus')
    } else {
      router.push('/overview')
    }
  }

  const [alias, setAlias] = useState('')
  const [age, setAge] = useState('')
  const [grade, setGrade] = useState('')
  const [gender, setGender] = useState('')

  return (
    <div className={styles.app}>
      <Form onSubmit={submitAlias}>
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
            className={classes.transform}
            type="radio"
            id="3grade"
            name="grade"
            value="3"
            onClick={(event) => {
              const target = event.target as HTMLButtonElement
              if (target) setGrade(target.value as string)
            }}
          />
          <label htmlFor="3grade" className={classes.radioLabel}>
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
          <label htmlFor="4grade" className={classes.radioLabel}>
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
              if (target) setGender('AO02')
            }}
          />
          <label htmlFor="male" className={classes.radioLabel}>
            Junge
          </label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onClick={(event) => {
              const target = event.target as HTMLButtonElement
              if (target) setGender('AO01')
            }}
          />
          <label htmlFor="female" className={classes.radioLabel}>
            Mädchen
          </label>
          <div className={classes.answerBlock}>
            <input
              type="radio"
              id="none"
              name="gender"
              value="female"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setGender('AO03')
              }}
            />
            <label htmlFor="none" className={classes.radioLabel}>
              Möchte ich nicht sagen
            </label>
          </div>
        </Label>
        <Button>Los geht&apos;s</Button>
      </Form>
    </div>
  )
}
