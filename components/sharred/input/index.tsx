import style from './Input.module.css';

type InputProps = { type: string; name: string; placeholder: string };

const Input = ({ type, name, placeholder }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete="off"
      className={`hover-target ${style.input}`}
    />
  );
};

export default Input;
