import { useRef, forwardRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import style from './Header.module.css';

type HeaderProps = {
  toggleNav: () => void;
  setNav: (state: boolean) => void;
  isNavOpen: boolean;
};

const Header = forwardRef<HTMLElement | null, HeaderProps>(
  ({ toggleNav, isNavOpen, setNav }, ref) => {
    const router = useRouter();
    const setNavRef = useRef<typeof setNav>(() => {});
    setNavRef.current = setNav;

    const navButtonClick = function navButtonClick() {
      toggleNav();
    };

    useEffect(() => {
      setNavRef.current(false);
    }, [router]);

    return (
      <header className={style.cdHeader} ref={ref}>
        <div className={style.headerWrapper}>
          <div className={style.logoWrap}>
            <Link href="/">
              <a>
                <Image
                  src="/img/logo.png"
                  alt="Logo Image"
                  width="102"
                  height="12"
                  layout="fixed"
                  className="hover-target"
                />
              </a>
            </Link>
          </div>
          <div className={style.navButWrap} onClick={navButtonClick}>
            <div
              className={`hover-target ${style.menuIcon} ${
                isNavOpen ? style.navActive : ''
              }`}
            >
              <span
                className={`${style.menuIconLine} ${style.menuIconLineLeft}`}
              ></span>
              <span className={style.menuIconLine}></span>
              <span
                className={`${style.menuIconLine} ${style.menuIconLineRight}`}
              ></span>
            </div>
          </div>
        </div>
      </header>
    );
  },
);

Header.displayName = 'Header';

export default Header;
