import type { ReactNode } from 'react';
import classes from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: any) => void;
};
function Button({ children, onClick }: ButtonProps): JSX.Element {
  return (
    <button onClick={onClick} className={classes.button}>
      {children}
    </button>
  );
}

export default Button;
