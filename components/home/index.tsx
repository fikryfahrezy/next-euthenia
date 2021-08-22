import type { MouseEvent } from 'react';
import { useContext } from 'react';
import { CusrorContext } from '../../context/Cursor';
import Link from 'next/link';
import style from './Home.module.css';

const Home = () => {
  const cursorRef = useContext(CusrorContext);

  const toggleCursor = function toggleCursor(
    isOn: boolean,
    target: HTMLElement,
  ) {
    if (cursorRef?.ref.current) {
      if (isOn) {
        target.classList.add(style.cursorIcon);
        cursorRef.ref.current.style.opacity = '0';
      } else {
        target.classList.remove(style.cursorIcon);
        cursorRef.ref.current.style.opacity = '1';
      }
    }
  };

  const mouseDown = function mouseDown(
    e: MouseEvent<HTMLUListElement, globalThis.MouseEvent>,
  ) {
    toggleCursor(true, e.target as HTMLElement);
  };

  const mouseUpOut = function mouseUpOut(
    e: MouseEvent<HTMLUListElement, globalThis.MouseEvent>,
  ) {
    toggleCursor(false, e.target as HTMLElement);
  };

  return (
    <div className={style.sliderContainer}>
      <ul
        onMouseDown={mouseDown}
        onMouseUp={mouseUpOut}
        onMouseOut={mouseUpOut}
        className={`${style.sliderWrapper} ${style.sliderSlide} ${style.sliderFreeMode}`}
      >
        <li className={style.sliderList}>
          <Link href="/">
            <a className={style.sliderAnchor}>
              <h1 className={`${style.sliderTitle} ${style.sliderNameTitle}`}>
                The Battle
              </h1>
            </a>
          </Link>
        </li>
        <li className={style.sliderList}>
          <Link href="/">
            <a className={style.sliderAnchor}>
              <h1
                className={`hover-target ${style.sliderTitle} ${style.sliderNameTitle}`}
              >
                The Battle
              </h1>
            </a>
          </Link>
        </li>
        <li className={style.sliderList}>
          <Link href="/">
            <a className={style.sliderAnchor}>
              <h1
                className={`hover-target ${style.sliderTitle} ${style.sliderNameTitle}`}
              >
                The Battle
              </h1>
            </a>
          </Link>
        </li>
        <li className={style.sliderList}>
          <Link href="/">
            <a className={style.sliderAnchor}>
              <h1
                className={`hover-target ${style.sliderTitle} ${style.sliderNameTitle}`}
              >
                The Battle
              </h1>
            </a>
          </Link>
        </li>
        <li className={style.sliderList}>
          <Link href="/">
            <a className={style.sliderAnchor}>
              <h1
                className={`hover-target ${style.sliderTitle} ${style.sliderNameTitle}`}
              >
                The Battle
              </h1>
            </a>
          </Link>
        </li>
        <li className={style.sliderList}>
          <Link href="/">
            <a className={style.sliderAnchor}>
              <h1
                className={`hover-target ${style.sliderTitle} ${style.sliderNameTitle}`}
              >
                The Battle
              </h1>
            </a>
          </Link>
        </li>
        <li className={style.sliderList}>
          <Link href="/">
            <a className={style.sliderAnchor}>
              <h1
                className={`hover-target ${style.sliderTitle} ${style.sliderNameTitle}`}
              >
                The Battle
              </h1>
            </a>
          </Link>
        </li>
        <li className={style.sliderList}>
          <Link href="/">
            <a className={style.sliderAnchor}>
              <h1
                className={`hover-target ${style.sliderTitle} ${style.sliderNameTitle}`}
              >
                The Battle
              </h1>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
