import style from './Separator.module.css';

const Separator = () => {
  return (
    <span className={style.separator}>
      <span className={style.separatorDash}></span>
    </span>
  );
};

export default Separator;
