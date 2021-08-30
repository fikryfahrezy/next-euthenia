import style from './Button.module.css';

type ButtonProps = {
  text: string;
  className?: string;
};

const Button = ({ text, className = '' }: ButtonProps) => {
  return (
    <button className={`hover-target ${style.submitBtn} ${className}`}>
      {text}
    </button>
  );
};

export default Button;
