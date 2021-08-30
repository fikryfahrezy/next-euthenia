import style from './Textarea.module.css';

type TextareaProps = {
  name: string;
  placeholder: string;
};

const Textarea = ({ name, placeholder }: TextareaProps) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className={`hover-target ${style.textArea}`}
    ></textarea>
  );
};

export default Textarea;
