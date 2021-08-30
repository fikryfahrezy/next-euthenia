import TextareaComp from '../../../sharred/textarea';
import style from './Textarea.module.css';

type TextareaProps = {
  name: string;
  placeholder: string;
};

const Textarea = ({ name, placeholder }: TextareaProps) => {
  return (
    <div className={style.msgContainer}>
      <TextareaComp name={name} placeholder={placeholder} />
    </div>
  );
};

export default Textarea;
