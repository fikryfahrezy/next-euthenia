import style from './Input.module.css';

type InputProps = { type: string; name: string; placeholder: string };

const Input = ({ type, name, placeholder }: InputProps) => {
  return (
    <div className={style.inputContainer}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        className={`hover-target ${style.input}`}
      />
    </div>
  );
};

export default Input;
