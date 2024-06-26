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
import Glas from '../images/glas.png'
import Fichte from '../images/fichte.png'
import Tropen from '../images/tropen.png'
import Metall from '../images/metall.png'
import Schiff from '../images/schiff.png'
import Finger from '../images/icons/finger.png'
import Schwimmt from '../images/icons/schwimmt.png'
import Button from '@/components/Button/Button'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export default function Step5() {
  const router = useRouter()

  function previousPage() {
    router.push('/step4')
  }

  function nextPage() {
    router.push('/step6')
  }

  const [parent, setParent] = useState(null)
  const [swimsValue, setSwimsValue] = useState('none')
  const [waterValue, setWaterValue] = useState('6')
  const correctWaterValue = waterValue === '7'
  const bubblePosition =
    Number(waterValue) * 10 * 3 - Number(waterValue) * 2 - 150
  const touchSensor = useSensor(TouchSensor)

  const sensors = useSensors(touchSensor)

  const draggable = (
    <Draggable style={styles.draggable}>
      <Image src={Metall} alt="Ein Block aus Metall" />
    </Draggable>
  )

  function handleDragEnd({ over }: any) {
    console.log({ over })
    setParent(over ? over.id : null)
  }

  return (
    <>
      <Head>
        <title>DigiSwim Aufgabe 5</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.headline}>
          <h1>DigiSwim Aufgabe 5</h1>
        </div>
        <Task>
          <Pikto image={Finger} />
          <span>
            Ziehe jetzt den <strong>Klotz aus Metall</strong> in das Glas mit
            Wasser. Schiebe den Regler neben dem Glas dahin, wo das Wasser
            steht.
            <br />
            Welche Zahl siehst du in der Tabelle?
          </span>
        </Task>
        <Task>
          <Pikto image={Schwimmt} />
          Trage in die Tabelle ein, ob der Klotz aus Metall schwimmt oder sinkt.
        </Task>
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
              </td>
              <td className={styles.tableData}>
                {' '}
                <Image src={Metall} alt="Ein Block aus Metall" />
              </td>
              <td className={styles.tableData}>
                {' '}
                <Image src={Schiff} alt="Ein Schiff aus Metall" />
              </td>
            </tr>
            <tr>
              <td className={styles.tableData}>Wasserhöhe</td>
              <td className={styles.tableData}>6</td>
              <td className={styles.tableData}>8</td>
              <td className={styles.tableData}>8</td>
              <td className={styles.tableData}>7</td>
              <td className={clsx(styles.tableData, styles.tableDataActive)}>
                {correctWaterValue ? waterValue : '?'}
              </td>

              <td className={styles.tableData}>?</td>
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
              <td className={clsx(styles.tableData, styles.tableDataActive)}>
                <select
                  id="swims"
                  name="swims"
                  value={swimsValue}
                  onChange={(e) => setSwimsValue(e.target.value)}
                >
                  <option value="none">---</option>
                  <option value="swims">schwimmt</option>
                  <option value="sinks">sinkt</option>
                </select>
              </td>
              <td className={styles.tableData}>?</td>
            </tr>
          </tbody>
        </table>
        <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
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
                <div className={`${styles.glass} ${classes.glassFullLower}`}>
                  <Image src={Metall} alt="Ein Block aus Metall" />
                </div>
              ) : (
                <div className={styles.glass}></div>
              )}
            </Droppable>
            <div className={styles.draggableContainer}>
              <Image src={Stein} alt="Ein Stein" />
              <Image src={Fichte} alt="Ein Block aus Fichtenholz" />
              <Image src={Tropen} alt="Ein Block aus Tropenholz" />
              {!parent ? draggable : <div className={styles.emptyBlock}></div>}
              <Image src={Schiff} alt="Ein Schiff aus Metall" />
            </div>
          </div>
        </DndContext>
        <div className={styles.buttonContainer}>
          <Button onClick={previousPage}>Zurück</Button>
          {correctWaterValue &&
          parent === 'droppable' &&
          swimsValue === 'sinks' ? (
            <Button onClick={nextPage}>Weiter</Button>
          ) : (
            <Button isActive={false}>Weiter</Button>
          )}
        </div>
      </main>
    </>
  )
}
