import classes from './TextArea.module.css';

type TextAreaProps = {
  id: string;
  value: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};
export default function TextArea({
  id,
  value,
  name,
  onChange,
}: TextAreaProps): JSX.Element {
  return (
    <textarea
      id={id}
      value={value}
      name={name}
      onChange={onChange}
      className={classes.textarea}
    ></textarea>
  );
}
