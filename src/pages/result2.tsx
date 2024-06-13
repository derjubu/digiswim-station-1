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

  const [task31, setTask31] = useState<string>('')
  const [task32, setTask32] = useState<string>('')
  const [task33, setTask33] = useState<string>('')
  const [task34, setTask34] = useState<string>('')
  const [task35, setTask35] = useState<string>('')
  const [task36, setTask36] = useState<string>('')

  const rightSolutionTask3 =
    task31 == 'true' &&
    task32 == 'true' &&
    task33 == 'false' &&
    task34 == 'true' &&
    task35 == 'false' &&
    task36 == 'true'

  function previousPage() {
    router.push('/result')
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
      <Label htmlFor="task30">
        <Task>Stimmt das?</Task>
        <ol>
          <li className={styles.listElem}>
            <p className={styles.paragraph}>
              Gegenstände gleicher Größe verdrängen alle gleich viel Wasser,
              egal wie schwer sie sind.
            </p>
            <input
              type="radio"
              id="sizeTrue"
              name="task31"
              value="true"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask31(target.value)
              }}
            />
            <label htmlFor="sizeTrue" className={styles.radioLabel}>
              Ja
            </label>
            <input
              type="radio"
              id="sizeFalse"
              name="task31"
              value="false"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask31(target.value)
              }}
            />
            <label htmlFor="sizeFalse" className={styles.radioLabel}>
              Nein
            </label>
          </li>
          <li className={styles.listElem}>
            <p className={styles.paragraph}>
              Gegenstände, die schwimmen verdrängen auch Wasser.
            </p>
            <input
              type="radio"
              id="floatingTrue"
              name="task32"
              value="true"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask32(target.value)
              }}
            />
            <label htmlFor="floatingTrue" className={styles.radioLabel}>
              Ja
            </label>
            <input
              type="radio"
              id="floatingFalse"
              name="task32"
              value="false"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask32(target.value)
              }}
            />
            <label htmlFor="floatingFalse" className={styles.radioLabel}>
              Nein
            </label>
          </li>
          <li className={styles.listElem}>
            <p className={styles.paragraph}>
              Wie viel Wasser verdrängt wird, hängt vom Gewicht ab.
            </p>
            <input
              type="radio"
              id="displacementTrue"
              name="task33"
              value="true"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask33(target.value)
              }}
            />
            <label htmlFor="displacementTrue" className={styles.radioLabel}>
              Ja
            </label>
            <input
              type="radio"
              id="displacementFalse"
              name="task33"
              value="false"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask33(target.value)
              }}
            />
            <label htmlFor="displacementFalse" className={styles.radioLabel}>
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
              id="volumeTrue"
              name="task34"
              value="true"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask34(target.value)
              }}
            />
            <label htmlFor="volumeTrue" className={styles.radioLabel}>
              Ja
            </label>
            <input
              type="radio"
              id="volumeFalse"
              name="task34"
              value="false"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask34(target.value)
              }}
            />
            <label htmlFor="volumeFalse" className={styles.radioLabel}>
              Nein
            </label>
          </li>

          <li className={styles.listElem}>
            <p className={styles.paragraph}>
              Gegenstände, die gleich schwer, aber unterschiedlich groß sind,
              verdrängen gleich viel Wasser.
            </p>
            <input
              type="radio"
              id="waterTrue"
              name="task35"
              value="true"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask35(target.value)
              }}
            />
            <label htmlFor="waterTrue" className={styles.radioLabel}>
              Ja
            </label>
            <input
              type="radio"
              id="waterFalse"
              name="task35"
              value="false"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask35(target.value)
              }}
            />
            <label htmlFor="waterFalse" className={styles.radioLabel}>
              Nein
            </label>
          </li>

          <li className={styles.listElem}>
            <p className={styles.paragraph}>
              Wie viel Wasser verdrängt wird, hängt von der Größe ab.
            </p>
            <input
              type="radio"
              id="size"
              name="task36"
              value="true"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask36(target.value)
              }}
            />
            <label htmlFor="true" className={styles.radioLabel}>
              Ja
            </label>
            <input
              type="radio"
              id="size"
              name="task36"
              value="false"
              onClick={(event) => {
                const target = event.target as HTMLButtonElement
                if (target) setTask36(target.value)
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
        {rightSolutionTask3 ? (
          <Button onClick={nextPage}>Beenden</Button>
        ) : (
          <Button isActive={false}>Beenden</Button>
        )}
      </div>
    </main>
  )
}
