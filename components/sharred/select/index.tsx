import type { MouseEvent } from 'react';
import { useReducer, useEffect, useRef } from 'react';
import style from './Select.module.css';

type SelectProps = {
  name: string;
  placeholder: string;
  options: { id: string; value: string; text: string }[];
};

type OptionProps = {
  value: string;
  text: string;
  isActive: boolean;
  onClick: (value: string, text: string) => void;
};

type ACTIONTYPE =
  | { type: 'TOGGLE'; payload: boolean }
  | {
      type: 'SELECT';
      payload: { open: boolean; selection: string; text: string };
    };

const Option = ({ isActive, value, text, onClick }: OptionProps) => {
  return (
    <li
      className={`hover-target ${style.selectOption} ${
        isActive ? `${style.currentSelect} ${style.currentFocus}` : ''
      }`}
      onClick={() => onClick(value, text)}
    >
      {text}
    </li>
  );
};

const initialState = {
  isOpen: false,
  currentSelection: '',
  currentText: '',
};

const reducer: (
  state: typeof initialState,
  action: ACTIONTYPE,
) => typeof initialState = function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, isOpen: action.payload };
    case 'SELECT':
      return {
        ...state,
        isOpen: action.payload.open,
        currentSelection: action.payload.selection,
        currentText: action.payload.text,
      };
    default:
      return state;
  }
};

const Select = ({ name, placeholder, options }: SelectProps) => {
  const [{ isOpen, currentSelection, currentText }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const listRef = useRef<HTMLDivElement>(null);

  const openToggle = function openToggle(
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) {
    const target = e.target as HTMLElement;

    if (target.tagName === 'DIV')
      dispatch({ type: 'TOGGLE', payload: !isOpen });
  };

  const optionClick = function optionClick(value: string, text: string) {
    dispatch({
      type: 'SELECT',
      payload: {
        open: !isOpen,
        selection: value,
        text: text,
      },
    });
  };

  useEffect(() => {
    /**
     * REF: Detect click outside React component
     * https://stackoverflow.com/a/42234988/12976234
     * @param event
     */
    const handleClickOutside = function handleClickOutside(event: Event) {
      if (
        listRef.current &&
        !listRef.current.contains(event.target as HTMLDivElement) &&
        isOpen
      )
        dispatch({ type: 'TOGGLE', payload: false });
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <select
        name={name}
        style={{ display: 'none' }}
        className={style.selection}
        value={currentSelection}
        onChange={() => {}}
      >
        {options.map(({ id, text, value }, i) => (
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
        ref={listRef}
      >
        {currentText || placeholder}
        <ul className={style.selectList}>
          {options.map(({ id, text, value }) => (
            <Option
              key={id}
              text={text}
              value={value}
              isActive={value === currentSelection}
              onClick={optionClick}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Select;
