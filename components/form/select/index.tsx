import { useState } from 'react';
import style from './Select.module.css';

type SelectProps = {
  name: string;
  placeholder: string;
  options: { id: string; value: string; text: string }[];
};

const Select = ({ name, placeholder, options }: SelectProps) => {
  const [isOpen, setOpen] = useState(false);

  const openToggle = function openToggle() {
    setOpen(!isOpen);
  };

  return (
    <div className={style.inputContainer}>
      <select
        name={name}
        style={{ display: 'none' }}
        className={style.selection}
      >
        {options.map(({ id, text, value }) => (
          <option key={id} value={value}>
            {text}
          </option>
        ))}
      </select>
      <div
        tabIndex={0}
        className={`hover-target ${style.selectView} ${
          isOpen ? style.open : ''
        }`}
        onClick={openToggle}
      >
        {placeholder}
        <ul className={style.selectList}>
          {options.map(({ id, text }, i) => (
            <li
              key={id}
              className={`hover-target ${style.selectOption} ${
                i === 0 ? `${style.currentSelect} ${style.currentFocus}` : ''
              }`}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
