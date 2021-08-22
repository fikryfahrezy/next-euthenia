import type { MouseEvent, ReactNode } from 'react';
import { useContext } from 'react';
import { CusrorContext } from '../../context/Cursor';
import Cursor from './cursor';
import cursorStyle from './cursor/Cursor.module.css';
import style from './Global.module.css';

type GlobalProps = {
  children: ReactNode;
};

const Global = ({ children }: GlobalProps) => {
  const cursorRef = useContext(CusrorContext);

  const mouseMove = function mouseMove(
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) {
    const target = e.target as HTMLElement;

    if (cursorRef?.ref.current) {
      cursorRef.ref.current.style.left = '0';
      cursorRef.ref.current.style.top = '0';
      cursorRef.ref.current.style.transform = `
        translate(${e.clientX + 100}px, ${e.clientY}px)
        `;

      const cursorTwo = cursorRef.ref.current.querySelector('.cursor-two');
      const cursorThree = cursorRef.ref.current.querySelector('.cursor-three');

      if (target.classList.contains('hover-target')) {
        cursorTwo?.classList.add(cursorStyle.cursorHover);
        cursorThree?.classList.add(cursorStyle.cursorHoverBg);
      } else {
        cursorTwo?.classList.remove(cursorStyle.cursorHover);
        cursorThree?.classList.remove(cursorStyle.cursorHoverBg);
      }
    }
  };

  return (
    <div className={style.overHide} onMouseMove={mouseMove}>
      <div className={style.animsition}>
        {children}
        <Cursor ref={cursorRef?.ref} />
      </div>
    </div>
  );
};

export default Global;