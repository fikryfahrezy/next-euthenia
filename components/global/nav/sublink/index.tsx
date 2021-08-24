import Link from 'next/link';
import style from './Sublink.module.css';

type SublinkProps = {
  isSubAvailable: boolean;
};
const Sublink = ({ isSubAvailable }: SublinkProps) => {
  return (
    <>
      <Link href="/">
        <a className={`hover-target ${style.navAnchor}`}>work</a>
      </Link>
      {isSubAvailable && (
        <ul className={style.subLink}>
          <li className={`${style.subLinkList} ${style.activeSubList}`}>
            <Link href="/">
              <a className={`hover-target ${style.subLinkAnchor}`}>
                slider centerd title
              </a>
            </Link>
          </li>
          <li className={`${style.subLinkList}`}>
            <Link href="/">
              <a className={`hover-target ${style.subLinkAnchor}`}>
                slider centerd image
              </a>
            </Link>
          </li>
          <li className={`${style.subLinkList}`}>
            <Link href="/">
              <a className={`hover-target ${style.subLinkAnchor}`}>
                slider bottom title
              </a>
            </Link>
          </li>
          <li className={`${style.subLinkList}`}>
            <Link href="/">
              <a className={`hover-target ${style.subLinkAnchor}`}>
                slice revealer
              </a>
            </Link>
          </li>
          <li className={`${style.subLinkList}`}>
            <Link href="/work/masonry">
              <a className={`hover-target ${style.subLinkAnchor}`}>
                masonry version
              </a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Sublink;
