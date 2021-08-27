import style from './Button.module.css';

const Button = () => {
  return (
    <div className={style.btnContainer}>
      <button className={`hover-target ${style.submitBtn}`}>submit</button>
    </div>
  );
};

export default Button;
