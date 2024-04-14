import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { DndContext, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { Draggable } from '@/hooks/Draggable'
import { Droppable } from '@/hooks/Droppable'
import { useState } from 'react'

import Becher from '../images/becher.png'
import BecherVoll from '../images/becher-voll.png'
import Stein from '../images/stein.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [parent, setParent] = useState(null)
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
        <div className={styles.description}>
          <h1>Digiswim Station 1</h1>
        </div>
        <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
          {!parent ? draggable : null}
          <Droppable>
            {parent === 'droppable' ? (
              <Image src={BecherVoll} alt="Voller Becher" />
            ) : (
              <Image src={Becher} alt="Leerer Becher" />
            )}
          </Droppable>
        </DndContext>
      </main>
    </>
  )
}
