import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { DndContext, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { Draggable } from '@/hooks/Draggable'
import { Droppable } from '@/hooks/Droppable'
import { useState } from 'react'

import Tasklist from '@/components/Tasklist/Tasklist'
import Task from '@/components/Task/Task'
import Pikto from '@/components/Pikto/Pikto'

import Stein from '../images/stein.png'
import Fichte from '../images/fichte.png'
import Tropen from '../images/tropen.png'
import Finger from '../images/icons/finger.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [parent, setParent] = useState(null)
  const [waterValue, setWaterValue] = useState('0')
  const bubblePosition =
    Number(waterValue) * 10 * 4 - Number(waterValue) * 2 - 200
  const touchSensor = useSensor(TouchSensor)

  const sensors = useSensors(touchSensor)

  const draggable = (
    <Draggable style={styles.draggable}>
      <Image src={Stein} alt="Ein Stein" />
    </Draggable>
  )

  function handleDragEnd({ over }: any) {
    setParent(over ? over.id : null)
  }

  return (
    <>
      <Head>
        <title>Digiswim Station 1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.headline}>
          <h1>Digiswim Station 1</h1>
        </div>
        <Tasklist>
          <Task>
            <Pikto image={Finger} />
            Schiebe den den Stein ins Wasser. Danach schiebe Regler neben dem
            Glas auf die Höhe vom Wasser.
          </Task>
        </Tasklist>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.tableData}>Leer</td>
              <td className={styles.tableData}>Stein</td>
              <td className={styles.tableData}>Fichte</td>
              <td className={styles.tableData}>Tropenholz</td>
            </tr>
            <tr>
              <td className={styles.tableData}>0</td>
              <td className={styles.tableData}>?</td>
              <td className={styles.tableData}>?</td>
              <td className={styles.tableData}>?</td>
            </tr>
          </tbody>
        </table>
        <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
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
            <Droppable>
              {parent === 'droppable' ? (
                <div className={`${styles.glass} ${styles.glassFull}`}>
                  <Image
                    className={styles.objectInWater}
                    src={Stein}
                    alt="Ein Stein"
                  />
                </div>
              ) : (
                <div className={styles.glass}></div>
              )}
            </Droppable>
          </div>
        </DndContext>
      </main>
    </>
  )
}
