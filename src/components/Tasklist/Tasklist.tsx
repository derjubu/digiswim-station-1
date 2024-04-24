import type { ReactNode } from 'react';
import classes from './Tasklist.module.css';

type ButtonProps = {
  children: ReactNode;
};
export default function Task({ children }: ButtonProps): JSX.Element {
  return <ol className={classes.liststyle}>{children}</ol>;
}
