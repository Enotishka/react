import style from './Message.module.css'

export function Message(props) {
  return (
    <p className={style.message}>{props.text}</p>
  );
}