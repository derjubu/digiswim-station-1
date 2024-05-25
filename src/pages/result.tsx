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
import Fichte from '../images/fichte.png'
import Tropen from '../images/tropen.png'
import Task from '@/components/Task/Task'

const inter = Inter({ subsets: ['latin'] })

export default function Result(): JSX.Element {
  const router = useRouter()

  const [task1, setTask1] = useState<string>('')
  const [task2, setTask2] = useState<string>('')
  const [task3, setTask3] = useState<string>('')
  const [task4, setTask4] = useState<string>('')

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
              <div className={styles.glasTable}></div>
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
            </td>
          </tr>
          <tr>
            <td className={styles.tableData}>Wasserhöhe</td>
            <td className={styles.tableData}>6</td>
            <td className={styles.tableData}>8</td>
            <td className={styles.tableData}>8</td>
            <td className={styles.tableData}>8</td>
          </tr>
          <tr>
            <td className={styles.tableData}>Gewicht</td>
            <td className={styles.tableData}>-</td>
            <td className={styles.tableData}>28 g</td>
            <td className={styles.tableData}>142 g</td>
            <td className={styles.tableData}>55 g</td>
          </tr>
          <tr>
            <td className={styles.tableData}>
              <label htmlFor="swims">Schwimmt oder sinkt</label>
            </td>
            <td className={styles.tableData}>-</td>
            <td className={styles.tableData}>sinkt</td>
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
          Wie kommt es, dass bei allen drei Würfeln das Wasser gleich
          hochsteigt? <br />
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
          Wie kommt es, dass das Wasser bei dem leichten Würfel (Tropenholz)
          genauso hochsteigt, wie bei dem schweren Würfel (Stein)? <br />
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
      <Label htmlFor="task4">
        <Task>Was ist also wichtig? Das Gewicht oder die Größe?</Task>
        <input
          type="radio"
          id="weight"
          name="task4"
          value="weight"
          onClick={(event) => {
            const target = event.target as HTMLButtonElement
            if (target) setTask4(target.value)
          }}
        />
        <label htmlFor="weight" className={styles.radioLabel}>
          Das Gewicht
        </label>
        <input
          type="radio"
          id="size"
          name="task4"
          value="size"
          onClick={(event) => {
            const target = event.target as HTMLButtonElement
            if (target) setTask4(target.value)
          }}
        />
        <label htmlFor="size" className={styles.radioLabel}>
          Die Größe
        </label>
        {task4 === 'weight' && (
          <Task isHint={true}>
            Was ist also wichtig? Das Gewicht oder die Größe?
          </Task>
        )}
      </Label>
      <div className={styles.buttonContainer}>
        <Button onClick={previousPage}>Zurück</Button>
        {task1 !== '' && task2 !== '' && task3 !== '' && task4 === 'size' ? (
          <Button onClick={nextPage}>Beenden</Button>
        ) : (
          <Button isActive={false}>Beenden</Button>
        )}
      </div>
    </main>
  )
}
