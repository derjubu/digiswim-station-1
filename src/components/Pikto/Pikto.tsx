import { StaticImageData } from 'next/image'
import Image from 'next/image'
import classes from './Pikto.module.css'

type PiktoProps = {
  image: StaticImageData
}

export default function Pikto({ image }: PiktoProps): JSX.Element {
  return <Image className={classes.container} src={image} alt="" />
}
