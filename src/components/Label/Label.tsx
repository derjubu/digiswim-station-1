import clsx from 'clsx';
import type { ReactNode } from 'react';
import classes from './Label.module.css';

type LabelProps = {
  children: ReactNode;
  htmlFor: string;
  isRange?: boolean;
  hasMarginBottom?: boolean;
};
export default function Label({
  children,
  htmlFor,
  isRange,
  hasMarginBottom,
}: LabelProps): JSX.Element {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        classes.label,
        isRange && classes.isRange,
        hasMarginBottom && classes.hasMarginBottom
      )}
    >
      {children}
    </label>
  );
}
