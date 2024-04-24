import type { ReactNode } from 'react';
import classes from './Task.module.css';

type ButtonProps = {
  children: ReactNode;
};
export default function Task({ children }: ButtonProps): JSX.Element {
  return <li className={classes.description}>{children}</li>;
}
