import type { ReactNode, RefObject } from 'react';
import { useRef, createContext } from 'react';

type CursorProps = {
  children: ReactNode;
};

export type CursorContext = {
  ref: RefObject<HTMLDivElement>;
};

export const CusrorContext = createContext<CursorContext | null>(null);

const CursorState = function CursorState({ children }: CursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);

  return (
    <CusrorContext.Provider value={{ ref: cursorRef }}>
      {children}
    </CusrorContext.Provider>
  );
};

export default CursorState;
