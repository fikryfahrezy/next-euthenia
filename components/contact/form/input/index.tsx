import InputComp from '../../../sharred/input';
import style from './Input.module.css';

type InputProps = { type: string; name: string; placeholder: string };

const Input = ({ type, name, placeholder }: InputProps) => {
  return (
    <div className={style.inputContainer}>
      <InputComp type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default Input;
