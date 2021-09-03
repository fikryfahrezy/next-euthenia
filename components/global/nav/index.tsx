import { useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';
import style from './Nav.module.css';
import Sublink from './sublink';
import components from './components';

type NavProps = {
  isActive: boolean;
};

type ACTIONTYPE = {
  type: 'SETLINK';
  payload: { title: string; parentLink: string; childLink: string };
};

const initialState = {
  title: '',
  parentLink: '/',
  childLink: '/',
};

const reducer: (
  state: typeof initialState,
  action: ACTIONTYPE,
) => typeof initialState = function reducer(state, action) {
  switch (action.type) {
    case 'SETLINK':
      return {
        ...state,
        title: action.payload.title,
        parentLink: action.payload.parentLink,
        childLink: action.payload.childLink,
      };
    default:
      return state;
  }
};

const Nav = ({ isActive }: NavProps) => {
  const router = useRouter();
  const [{ title, parentLink, childLink }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const getTheLink: (
    data: typeof components,
    keyword: string,
  ) => [{ title: string; parentLink: string }, string] = function getTheLink(
    data,
    keyword,
  ) {
    const parent = {
      title: '',
      parentLink: '/',
    };

    let childLink = '/';

    data.find(({ title, sublink, link: navLink }) => {
      parent.title = title;
      parent.parentLink = navLink;

      if (navLink === keyword) {
        return true;
      } else {
        return sublink.find(({ link: subLink }) => {
          if (subLink === keyword) {
            childLink = subLink;
            return true;
          }
        });
      }
    });

    return [parent, childLink];
  };

  useEffect(() => {
    const [{ title, parentLink }, childLink] = getTheLink(
      components,
      router.pathname,
    );

    dispatch({ type: 'SETLINK', payload: { title, parentLink, childLink } });
  }, [router]);

  return (
    <nav className={`${style.nav} ${isActive ? style.navActive : ''}`}>
      <nav className={style.navContent}>
        <div className={style.currentPageNameShadow}>{title}</div>
        <ul className={style.navList}>
          {components.map(({ id, isSubLink, link, title, sublink }, i) => (
            <li
              key={id}
              className={`${style.navListItem} ${
                link === parentLink ? style.activeList : ''
              }`}
            >
              <Sublink
                isSublink={isSubLink}
                link={link}
                title={title}
                sublink={sublink}
                childLink={childLink}
              />
            </li>
          ))}
        </ul>
      </nav>
    </nav>
  );
};

export default Nav;
