import 'animate.css/animate.min.css';
import { useState } from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import MidArticleWrapper from '../wrapper/article/mid';
import style from './News.module.css';

const data = [
  {
    id: '1',
    title: 'We want to share with you our mood after selection.',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
    date: '22.01.2019.',
    link: '/post',
    img: '/img/1.jpg',
  },
  {
    id: '2',
    title: 'Sleep, code, eat, travel. Repeat.',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
    date: '21.01.2019.',
    link: '/post',
    img: '/img/1.jpg',
  },
  {
    id: '3',
    title: 'Don’t get lost quoting your next projects.',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
    date: '19.01.2019.',
    link: '/post',
    img: '/img/1.jpg',
  },
  {
    id: '4',
    title: 'Don´t give up, keep on focus all the time.',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
    date: '17.01.2019.',
    link: '/post',
    img: '/img/1.jpg',
  },
  {
    id: '5',
    title: 'Moments from a life. Day of photography.',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
    date: '15.01.2019.',
    link: '/post',
    img: '/img/1.jpg',
  },
  {
    id: '6',
    title: 'The golden rule of modern webdesign.',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
    date: '14.01.2019.',
    link: '/post',
    img: '/img/1.jpg',
  },
  {
    id: '7',
    title: "Pretty much how you'll see it.",
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
    date: '11.01.2019.',
    link: '/post',
    img: '/img/1.jpg',
  },
  {
    id: '8',
    title: 'Form and content together.',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
    date: '09.01.2019.',
    link: '/post',
    img: '/img/1.jpg',
  },
  {
    id: '9',
    title: 'Don’t get lost quoting your next projects.',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
    date: '05.01.2019.',
    link: '/post',
    img: '/img/1.jpg',
  },
];

const News = () => {
  const [itemIndex] = useState(0);

  return (
    <MidArticleWrapper>
      <div style={{ width: '100%' }}>
        <ul className={style.itemList}>
          {data.map(({ id, title, link, description, date }, i) => (
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
        {data.map(({ id }, i) => (
          <li
            key={id}
            className={`${style.bgList} ${i === itemIndex ? style.show : ''}`}
          >
            <div className={style.bgImg}></div>
          </li>
        ))}
      </ul>
    </MidArticleWrapper>
  );
};

export default News;
