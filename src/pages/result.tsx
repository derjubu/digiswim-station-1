import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'

import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Mikro from '../images/icons/mikrofon.png'
import Lupe from '../images/icons/lupe.png'
import Tastatur from '../images/icons/tastatur-schrift.png'

import Label from '@/components/Label/Label'
import Pikto from '@/components/Pikto/Pikto'
import TextArea from '@/components/TextArea/TextArea'
import Button from '@/components/Button/Button'

import Stein from '../images/stein.png'
import Glas from '../images/glas.png'
import Fichte from '../images/fichte.png'
import Tropen from '../images/tropen.png'
import Metall from '../images/metall.png'
import Schiff from '../images/schiff.png'
import Task from '@/components/Task/Task'

const inter = Inter({ subsets: ['latin'] })

export default function Result(): JSX.Element {
  const router = useRouter()

  const [task1, setTask1] = useState<string>('')
  const [task2, setTask2] = useState<string>('')
  const [task31, setTask31] = useState<string>('')
  const [task32, setTask32] = useState<string>('')
  const [task33, setTask33] = useState<string>('')
  const [task34, setTask34] = useState<string>('')

  const rightSolutionTask3 =
    task31 == 'true' &&
    task32 == 'true' &&
    task33 == 'false' &&
    task34 == 'true'

  function previousPage() {
    router.push('/step4')
  }

  function nextPage() {
    router.push('/end')
  }

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <h1>Deine Beobachtungen</h1>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.tableData}>Material</td>
            <td className={styles.tableData}>
              {' '}
              <Image src={Glas} alt="Ein Glas" />
            </td>
            <td className={styles.tableData}>
              {' '}
              <Image src={Stein} alt="Ein Stein" />
            </td>
            <td className={styles.tableData}>
              {' '}
              <Image src={Fichte} alt="Ein Block aus Fichte" />
            </td>
            <td className={styles.tableData}>
              {' '}
              <Image src={Tropen} alt="Ein Block aus Tropenholz" />
            </td>{' '}
            <td className={styles.tableData}>
              <Image src={Metall} alt="Ein Block aus Metall" />
            </td>
            <td className={styles.tableData}>
              <Image src={Schiff} alt="Ein Schiff aus Metall" />
            </td>
          </tr>
          <tr>
            <td className={styles.tableData}>Wasserhöhe</td>
            <td className={styles.tableData}>6</td>
            <td className={styles.tableData}>8</td>
            <td className={styles.tableData}>8</td>
            <td className={styles.tableData}>7</td>
            <td className={styles.tableData}>8</td>
            <td className={styles.tableData}>7</td>
          </tr>
          <tr>
            <td className={styles.tableData}>Gewicht</td>
            <td className={styles.tableData}>-</td>
            <td className={styles.tableData}>142 g</td>
            <td className={styles.tableData}>55 g</td>
            <td className={styles.tableData}>28 g</td>
            <td className={styles.tableData}>28 g</td>
            <td className={styles.tableData}>28 g</td>
          </tr>
          <tr>
            <td className={styles.tableData}>
              <label htmlFor="swims">schwimmt oder sinkt</label>
            </td>
            <td className={styles.tableData}>-</td>
            <td className={styles.tableData}>sinkt</td>
            <td className={styles.tableData}>sinkt</td>
            <td className={styles.tableData}>schwimmt</td>
            <td className={styles.tableData}>sinkt</td>
            <td className={styles.tableData}>schwimmt</td>
          </tr>
        </tbody>
      </table>
      <Label htmlFor="task1">
        <Task>
          <Pikto image={Lupe} />
          In der Tabelle siehst du die Ergebnisse des Experiments. Was kannst du
          beobachten? <br />
          <Pikto image={Tastatur} />
          <Pikto image={Mikro} />
        </Task>
        <TextArea
          id="task1"
          name="station1-aufgabe1"
          value={task1}
          onChange={(event) => setTask1(event.target.value)}
        />
      </Label>
      <Label htmlFor="task2">
        <Task>
          Wie kommt es, dass bei dem Würfel aus Stein und dem Würfel aus Fichte
          das Wasser gleich hoch steigt? Woran kann das liegen? <br />
          <Pikto image={Tastatur} />
          <Pikto image={Mikro} />
        </Task>
        <TextArea
          id="task2"
          name="station1-aufgabe1"
          value={task2}
          onChange={(event) => setTask2(event.target.value)}
        />
      </Label>
      <Label htmlFor="task3">
        <Task>Stimmt das?</Task>
        <ol>
          <li className={styles.listElem}>
            <p className={styles.paragraph}>
              Gegenstände gleicher Größe verdrängen alle gleich viel Wasser,
              egal wie schwer sie sind.
            </p>
            <input
              type="radio"
              id="size"
              name="task31"
              value="true"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask31(target.value)
              }}
            />
            <label htmlFor="true" className={styles.radioLabel}>
              Ja
            </label>
            <input
              type="radio"
              id="size"
              name="task31"
              value="false"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask31(target.value)
              }}
            />
            <label htmlFor="false" className={styles.radioLabel}>
              Nein
            </label>
          </li>
          <li className={styles.listElem}>
            <p className={styles.paragraph}>
              Gegenstände, die schwimmen verdrängen auch Wasser.
            </p>
            <input
              type="radio"
              id="size"
              name="task32"
              value="true"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask32(target.value)
              }}
            />
            <label htmlFor="true" className={styles.radioLabel}>
              Ja
            </label>
            <input
              type="radio"
              id="size"
              name="task32"
              value="false"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask32(target.value)
              }}
            />
            <label htmlFor="false" className={styles.radioLabel}>
              Nein
            </label>
          </li>
          <li className={styles.listElem}>
            <p className={styles.paragraph}>
              Wie viel Wasser verdrängt wird, hängt vom Gewicht ab.
            </p>
            <input
              type="radio"
              id="size"
              name="task33"
              value="true"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask33(target.value)
              }}
            />
            <label htmlFor="true" className={styles.radioLabel}>
              Ja
            </label>
            <input
              type="radio"
              id="size"
              name="task33"
              value="false"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask33(target.value)
              }}
            />
            <label htmlFor="false" className={styles.radioLabel}>
              Nein
            </label>
          </li>
          <li className={styles.listElem}>
            <p className={styles.paragraph}>
              Wie viel Wasser verdrängt wird, hängt vom Platz (Volumen) ab, den
              ein Gegenstand einnimmt.
            </p>
            <input
              type="radio"
              id="size"
              name="task34"
              value="true"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask34(target.value)
              }}
            />
            <label htmlFor="true" className={styles.radioLabel}>
              Ja
            </label>
            <input
              type="radio"
              id="size"
              name="task34"
              value="false"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask34(target.value)
              }}
            />
            <label htmlFor="false" className={styles.radioLabel}>
              Nein
            </label>
          </li>
        </ol>
      </Label>
      <div className={styles.buttonContainer}>
        <Button onClick={previousPage}>Zurück</Button>
        {task1 !== '' && task2 !== '' && rightSolutionTask3 ? (
          <Button onClick={nextPage}>Beenden</Button>
        ) : (
          <Button isActive={false}>Beenden</Button>
        )}
      </div>
    </main>
  )
}
