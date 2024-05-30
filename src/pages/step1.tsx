import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { useState } from 'react'

import Task from '@/components/Task/Task'
import Pikto from '@/components/Pikto/Pikto'

import Stein from '../images/stein.png'
import Glas from '../images/glas.png'
import Fichte from '../images/fichte.png'
import Tropen from '../images/tropen.png'
import Finger from '../images/icons/finger.png'
import Metall from '../images/metall.png'
import Schiff from '../images/schiff.png'
import Button from '@/components/Button/Button'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export default function Step1() {
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
        <title>DigiSwim Aufgabe 1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.headline}>
          <h1>DigiSwim Aufgabe 1</h1>
        </div>
        <Task>
          Unten siehst du ein Glas gefüllt mit Wasser und drei Würfel aus
          unterschiedlichem Material. Ein Würfel ist aus Stein, die anderen
          beiden aus Fichtenholz oder Tropenholz. Diese sind gleich groß, sind
          aber unterschiedlich schwer. Das Gewicht kannst du in der Tabelle
          ablesen.
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
              <td className={clsx(styles.tableData, styles.tableDataActive)}>
                {correctWaterValue ? waterValue : '?'}
              </td>
              <td className={styles.tableData}>?</td>
              <td className={styles.tableData}>?</td>
              <td className={styles.tableData}>?</td>
              <td className={styles.tableData}>?</td>
              <td className={styles.tableData}>?</td>
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
          </tbody>
        </table>
        <Task>
          <Pikto image={Finger} />
          Bevor du die Würfel in das Glas mit Wasser ziehst, schiebe den Regler
          neben dem Glas dahin, wo das Wasser steht. Es erscheint eine Zahl
          zwischen 1 und 10 in der Tabelle. Welche Zahl siehts du? So hoch steht
          das Wasser in dem Glas.
        </Task>

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
          <div className={styles.draggableContainer}>
            <Image src={Stein} alt="Ein Stein" />
            <Image src={Fichte} alt="Ein Blok aus Fichtenholz" />
            <Image src={Tropen} alt="Ein Blok aus Tropenholz" />
          </div>
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
