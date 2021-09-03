import 'animate.css/animate.min.css';
import { useState } from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import CenterArticleWrapper from '../wrapper/article/center';
import style from './News.module.css';
import components from './components';

const News = () => {
  const [itemIndex] = useState(0);

  return (
    <CenterArticleWrapper title="Our Stories" highlight="full of stuff">
      <div style={{ width: '100%' }}>
        <ul className={style.itemList}>
          {components.map(({ id, title, link, description, date }, i) => (
            <ScrollAnimation
              key={id}
              animateIn="animate__fadeInUp"
              animateOnce={true}
            >
              <li
                className={`${style.list} ${
                  i === itemIndex ? style.activeList : ''
                }`}
              >
                <Link href={link}>
                  <a className={style.titleAnchor}>
                    <h4 className={`hover-target ${style.listTitle}`}>
                      {title}
                    </h4>
                  </a>
                </Link>
                <div className={style.listBodyContainer}>
                  <div className={style.listBody}>
                    <p className={style.listDescription}>{description}</p>
                    <p className={style.listDate}>
                      <em>{date}</em>
                    </p>
                    <Link href={link}>
                      <a className={style.arrowAnchor}>
                        <div
                          className={`hover-target ${style.listArrow}`}
                        ></div>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
            </ScrollAnimation>
          ))}
        </ul>
      </div>
      <ul className={style.bgPage}>
        {components.map(({ id }, i) => (
          <li
            key={id}
            className={`${style.bgList} ${i === itemIndex ? style.show : ''}`}
          >
            <div className={style.bgImg}></div>
          </li>
        ))}
      </ul>
    </CenterArticleWrapper>
  );
};

export default News;
