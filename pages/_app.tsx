import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import Global from '../components/global';
import Header from '../components/global/header';
import Nav from '../components/global/nav';
import CursorState from '../context/Cursor';

function MyApp({ Component, pageProps }: AppProps) {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = function toggleNav() {
    setNavOpen(!isNavOpen);
  };

  return (
    <CursorState>
      <Global>
        <Header toggleNav={toggleNav} isActive={isNavOpen} />
        <Nav isActive={isNavOpen} />
        <Component {...pageProps} />
      </Global>
    </CursorState>
  );
}
export default MyApp;
