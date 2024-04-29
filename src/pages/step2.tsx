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
import Button from '@/components/Button/Button'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  function nextPage() {
    router.push('/step3')
  }

  const [parent, setParent] = useState(null)
  const [waterValue, setWaterValue] = useState('6')
  const bubblePosition =
    Number(waterValue) * 10 * 3 - Number(waterValue) * 2 - 150
  const touchSensor = useSensor(TouchSensor)

  const sensors = useSensors(touchSensor)

  const draggable = (
    <Draggable style={styles.draggable}>
      <Image src={Stein} alt="Ein Stein" />
    </Draggable>
  )

  function handleDragEnd({ over }: any) {
    console.log({ over })
    setParent(over ? over.id : null)
  }

  return (
    <>
      <Head>
        <title>Digiswim Aufgabe 2</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.headline}>
          <h1>Digiswim Aufgabe 2</h1>
        </div>
        <Task>
          <Pikto image={Finger} />
          Ziehe den Würfel aus Stein in das Wasser. Dann schiebe den Regler
          neben dem Glas dahin, bis wo das Wasser steigt.
        </Task>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.tableData}>Leer</td>
              <td className={styles.tableData}>Stein</td>
              <td className={styles.tableData}>Fichte</td>
              <td className={styles.tableData}>Tropenholz</td>
            </tr>
            <tr>
              <td className={styles.tableData}>6</td>
              <td className={styles.tableData}>?</td>
              <td className={styles.tableData}>?</td>
              <td className={styles.tableData}>?</td>
            </tr>
          </tbody>
        </table>
        <DndContext onDragOver={handleDragEnd} sensors={sensors}>
          <div className={styles.draggableContainer}>
            {!parent ? draggable : <div className={styles.emptyBlock}></div>}
            <Image src={Fichte} alt="Ein Blok aus Fichtenholz" />
            <Image src={Tropen} alt="Ein Blok aus Tropenholz" />
          </div>
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
                  <Image src={Stein} alt="Ein Stein" />
                </div>
              ) : (
                <div className={styles.glass}></div>
              )}
            </Droppable>
          </div>
        </DndContext>
        {waterValue === '8' && parent === 'droppable' ? (
          <Button onClick={nextPage}>Weiter</Button>
        ) : (
          <Button isActive={false}>Weiter</Button>
        )}
      </main>
    </>
  )
}
