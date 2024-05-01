import type { ReactNode } from 'react'
import classes from './Task.module.css'
import clsx from 'clsx'

type ButtonProps = {
  isHint: boolean
  children: ReactNode
}
export default function Task({
  children,
  isHint = false,
}: ButtonProps): JSX.Element {
  return (
    <p className={clsx(classes.description, isHint && classes.isHint)}>
      {children}
    </p>
  )
}
