import SelectComp from '../../../sharred/select';
import style from './Select.module.css';

type SelectProps = {
  name: string;
  placeholder: string;
  options: { id: string; value: string; text: string }[];
};

const Select = ({ name, placeholder, options }: SelectProps) => {
  return (
    <div className={style.inputContainer}>
      <SelectComp name={name} placeholder={placeholder} options={options} />
    </div>
  );
};

export default Select;
