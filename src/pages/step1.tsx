import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { useState } from 'react'

import Task from '@/components/Task/Task'
import Pikto from '@/components/Pikto/Pikto'

import Stein from '../images/stein.png'
import Fichte from '../images/fichte.png'
import Tropen from '../images/tropen.png'
import Finger from '../images/icons/finger.png'
import Button from '@/components/Button/Button'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  function nextPage() {
    router.push('/step2')
  }

  const [waterValue, setWaterValue] = useState('0')
  const correctWaterValue = waterValue === '6'
  const bubblePosition =
    Number(waterValue) * 10 * 3 - Number(waterValue) * 2 - 150

  return (
    <>
      <Head>
        <title>Digiswim Aufgabe 1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.headline}>
          <h1>Digiswim Aufgabe 1</h1>
        </div>
        <Task>
          <Pikto image={Finger} />
          Schiebe den Regler neben dem Glas dahin, wo das Wasser steht.
        </Task>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.tableData}>Material</td>
              <td className={styles.tableData}>
                <div className={styles.glasTable}></div>
              </td>
            </tr>
            <tr>
              <td className={styles.tableData}>Wasserhöhe</td>
              <td className={clsx(styles.tableData, styles.tableDataActive)}>
                {correctWaterValue ? waterValue : '?'}
              </td>
            </tr>
          </tbody>
        </table>

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
              <span className={styles.value} style={{ bottom: bubblePosition }}>
                {waterValue}
              </span>
            </div>
          </div>
          <div className={styles.glass}></div>
        </div>
        {correctWaterValue ? (
          <Button onClick={nextPage}>Weiter</Button>
        ) : (
          <Button isActive={false}>Weiter</Button>
        )}
      </main>
    </>
  )
}
