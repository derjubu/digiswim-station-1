import type { ReactNode } from 'react'
import classes from './Task.module.css'

type ButtonProps = {
  children: ReactNode
}
export default function Task({ children }: ButtonProps): JSX.Element {
  return <p className={classes.description}>{children}</p>
}
