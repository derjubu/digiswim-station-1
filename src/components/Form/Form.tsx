import type { ReactNode } from 'react'
import classes from './form.module.css'

type FormProps = {
  children: ReactNode
  onSubmit: React.FormEventHandler<Element>
}
export default function Form({ children, onSubmit }: FormProps): JSX.Element {
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      {children}
    </form>
  )
}
