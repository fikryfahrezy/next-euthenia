import BtnComp from '../../../sharred/button';
import style from './Button.module.css';

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <div className={style.btnContainer}>
      <BtnComp text={text} />
    </div>
  );
};

export default Button;
