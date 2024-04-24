import type { ReactNode } from 'react'
import classes from './Button.module.css'
import clsx from 'clsx'

type ButtonProps = {
  children: ReactNode
  onClick?: (event: any) => void
  isActive?: Boolean
}
function Button({
  children,
  onClick,
  isActive = true,
}: ButtonProps): JSX.Element {
  console.log({ isActive })
  return (
    <button
      onClick={onClick}
      className={clsx(classes.button, isActive && classes.buttonActive)}
    >
      {children}
    </button>
  )
}

export default Button
