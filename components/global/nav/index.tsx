import style from './Nav.module.css';
import Sublink from './sublink';

type NavProps = {
  isActive: boolean;
};

const Nav = ({ isActive }: NavProps) => {
  return (
    <nav className={`${style.nav} ${isActive ? style.navActive : ''}`}>
      <nav className={style.navContent}>
        <div className={style.currentPageNameShadow}>Hi</div>
        <ul className={style.navList}>
          <li className={`${style.navListItem} ${style.activeList}`}>
            <Sublink isSubAvailable={true} />
          </li>
          <li className={`${style.navListItem}`}>
            <Sublink isSubAvailable={false} />
          </li>
          <li className={`${style.navListItem}`}>
            <Sublink isSubAvailable={false} />
          </li>
          <li className={`${style.navListItem}`}>
            <Sublink isSubAvailable={false} />
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Nav;
