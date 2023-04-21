import './Button.css';

const Button = (props) => {
  return <button onClick={props.onClick} className={`${props.className} primary`}>{props.children}</button>;
};

export default Button;
