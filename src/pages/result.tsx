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
  const [task3, setTask3] = useState<string>('')

  function previousPage() {
    router.push('/step4')
  }

  function nextPage() {
    router.push('/result2')
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
            <td className={styles.tableData}>439 g</td>
            <td className={styles.tableData}>439 g</td>
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
          Warum steigt überall das Wasser?
          <br />
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
        <Task>
          Warum steigt das Wasser unterschiedlich hoch?
          <br />
          <Pikto image={Tastatur} />
          <Pikto image={Mikro} />
        </Task>
        <TextArea
          id="task3"
          name="station1-aufgabe1"
          value={task3}
          onChange={(event) => setTask3(event.target.value)}
        />
      </Label>

      <div className={styles.buttonContainer}>
        <Button onClick={previousPage}>Zurück</Button>
        {task1 !== '' && task2 !== '' && task2 !== '' ? (
          <Button onClick={nextPage}>Weiter</Button>
        ) : (
          <Button isActive={false}>Weiter</Button>
        )}
      </div>
    </main>
  )
}
