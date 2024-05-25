import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import classes from '@/styles/steps.module.css'

import { DndContext, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { Draggable } from '@/hooks/Draggable'
import { Droppable } from '@/hooks/Droppable'
import { useState } from 'react'

import Task from '@/components/Task/Task'
import Pikto from '@/components/Pikto/Pikto'

import Stein from '../images/stein.png'
import Fichte from '../images/fichte.png'
import Tropen from '../images/tropen.png'
import Finger from '../images/icons/finger.png'
import Schwimmt from '../images/icons/schwimmt.png'
import Button from '@/components/Button/Button'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export default function Step4() {
  const router = useRouter()

  function previousPage() {
    router.push('/step3')
  }

  function nextPage() {
    router.push('/result')
  }

  const [parent, setParent] = useState(null)
  const [swimsValue, setSwimsValue] = useState('none')
  const [waterValue, setWaterValue] = useState('6')
  const correctWaterValue = waterValue === '8'
  const bubblePosition =
    Number(waterValue) * 10 * 3 - Number(waterValue) * 2 - 150
  const touchSensor = useSensor(TouchSensor)

  const sensors = useSensors(touchSensor)

  const draggable = (
    <Draggable style={styles.draggable}>
      <Image src={Tropen} alt="Ein Block aus Tropenholz" />
    </Draggable>
  )

  function handleDragEnd({ over }: any) {
    console.log({ over })
    setParent(over ? over.id : null)
  }

  return (
    <>
      <Head>
        <title>DigiSwim Aufgabe 4</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.headline}>
          <h1>DigiSwim Aufgabe 4</h1>
        </div>
        <Task>
          <Pikto image={Finger} />
          Ziehe jetzt den Würfel aus Tropenholz in das Glas mit Wasser. Schiebe
          den Regler neben dem Glas dahin, wo das Wasser steht.
          <br />
          Welche Zahl siehst du in der Tabelle?
        </Task>
        <Task>
          <Pikto image={Schwimmt} />
          Trage in die Tabelle ein, ob der Würfel aus Tropenholz schwimmt oder
          sinkt.
        </Task>
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
              <td className={clsx(styles.tableData, styles.tableDataActive)}>
                {correctWaterValue ? waterValue : '?'}
              </td>
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
              <td className={styles.tableData}>Sinkt</td>
              <td className={styles.tableData}>Sinkt</td>
              <td className={clsx(styles.tableData, styles.tableDataActive)}>
                <select
                  id="swims"
                  name="swims"
                  value={swimsValue}
                  onChange={(e) => setSwimsValue(e.target.value)}
                >
                  <option value="none">---</option>
                  <option value="swims">Schwimmt</option>
                  <option value="sinks">Sinkt</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <DndContext onDragOver={handleDragEnd} sensors={sensors}>
          <div className={styles.experimentContainer}>
            <div className={styles.sliderContainer}>
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                id="height"
                name="height"
                value={waterValue}
                onChange={(e) => setWaterValue(e.target.value)}
                className={styles.slider}
              />
              <div className={styles.valueContainer}>
                <span
                  className={styles.value}
                  style={{ bottom: bubblePosition }}
                >
                  {waterValue}
                </span>
              </div>
            </div>
            <Droppable id="droppable">
              {parent === 'droppable' ? (
                <div className={`${styles.glass} ${classes.glassFull}`}>
                  <Image
                    className={classes.blockFloat}
                    src={Tropen}
                    alt="Ein Würfel aus Tropenholz"
                  />
                </div>
              ) : (
                <div className={styles.glass}></div>
              )}
            </Droppable>
            <div className={styles.draggableContainer}>
              <Image src={Stein} alt="Ein Stein" />
              <Image src={Fichte} alt="Ein Block aus Fichtenholz" />
              {!parent ? draggable : <div className={styles.emptyBlock}></div>}
            </div>
          </div>
        </DndContext>
        <div className={styles.buttonContainer}>
          <Button onClick={previousPage}>Zurück</Button>
          {correctWaterValue &&
          parent === 'droppable' &&
          swimsValue === 'swims' ? (
            <Button onClick={nextPage}>Weiter</Button>
          ) : (
            <Button isActive={false}>Weiter</Button>
          )}
        </div>
      </main>
    </>
  )
}
