import { useEffect, useState, forwardRef } from 'react';
import { checkIsMobile } from '../../../utils';
import style from './Cursor.module.css';

const Cursor = forwardRef<HTMLDivElement | null, unknown>((_, cursorRef) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(checkIsMobile());
  }, []);

  return isMobile ? (
    <></>
  ) : (
    <div ref={cursorRef} className={style.cursor}>
      <div className={style.cursorOne}></div>
      <div className={`cursor-two ${style.cursorTwo}`}></div>
      <div className={`cursor-three ${style.cursorThree}`}></div>
    </div>
  );
});

Cursor.displayName = 'Cursor';

export default Cursor;
