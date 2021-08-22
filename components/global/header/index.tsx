import style from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

type HeaderProps = {
  toggleNav: () => void;
  isActive: boolean;
};

const Header = ({ toggleNav, isActive }: HeaderProps) => {
  const navButtonClick = function navButtonClick() {
    toggleNav();
  };

  return (
    <header className={style.cdHeader}>
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
              isActive ? style.navActive : ''
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
};

export default Header;
