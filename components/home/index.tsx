import 'swiper/swiper.min.css';
import type { MouseEvent } from 'react';
import { useContext, useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel, Scrollbar } from 'swiper/core';
import { CusrorContext } from '../../context/Cursor';
import Link from 'next/link';
import style from './Home.module.css';

// install Swiper modules
SwiperCore.use([Mousewheel, Scrollbar]);

const data = [
  {
    id: '1',
    link: '/blog',
    title: 'A',
  },
  {
    id: '2',
    link: '/blog',
    title: 'B',
  },
  {
    id: '3',
    link: '/blog',
    title: 'C',
  },
  {
    id: '4',
    link: '/blog',
    title: 'D',
  },
  {
    id: '5',
    link: '/blog',
    title: 'E',
  },
  {
    id: '6',
    link: '/blog',
    title: 'F',
  },
  {
    id: '7',
    link: '/blog',
    title: 'G',
  },
  {
    id: '8',
    link: '/blog',
    title: 'H',
  },
  {
    id: '9',
    link: '/blog',
    title: 'I',
  },
  {
    id: '10',
    link: '/blog',
    title: 'J',
  },
];

const Home = () => {
  const { cursorRef, isMobile } = useContext(CusrorContext);
  const [sliderIndex, setSliderIndex] = useState(-1);
  const sliderScrollbar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSliderIndex(0);
  }, []);

  const toggleCursor = function toggleCursor(
    isOn: boolean,
    target: HTMLElement,
  ) {
    if (cursorRef?.current) {
      if (isOn) {
        target.classList.add(style.cursorIcon);
        cursorRef.current.style.opacity = '0';
      } else {
        target.classList.remove(style.cursorIcon);
        cursorRef.current.style.opacity = '1';
      }
    }
  };

  const mouseDown = function mouseDown(
    e: MouseEvent<HTMLElement, globalThis.MouseEvent>,
  ) {
    toggleCursor(true, e.target as HTMLElement);
  };

  const mouseUpOut = function mouseUpOut(
    e: MouseEvent<HTMLElement, globalThis.MouseEvent>,
  ) {
    toggleCursor(false, e.target as HTMLElement);
  };

  const changeCurrSlider = function changeCurrSlider(index: number) {
    setSliderIndex(index);
  };

  return (
    <>
      <main
        className={style.sliderContainer}
        onMouseDown={mouseDown}
        onMouseUp={mouseUpOut}
        onMouseOut={mouseUpOut}
      >
        <Swiper
          autoplay={false}
          breakpoints={{
            1200: {
              freeMode: false,
            },
          }}
          freeMode={true}
          grabCursor={true}
          mousewheel={true}
          resistance={true}
          resistanceRatio={0}
          speed={800}
          scrollbar={{
            el: sliderScrollbar.current,
            hide: false,
            draggable: true,
            dragSize: 19,
          }}
          slidesPerView="auto"
          touchStartPreventDefault={false}
          className={`${style.sliderWrapper} ${style.sliderSlide} ${style.sliderFreeMode}`}
        >
          {data.map(({ id, link, title }, i) => (
            <SwiperSlide
              key={id}
              className={`${style.sliderList} ${
                i === sliderIndex ? style.sliderActive : ''
              }`}
              onMouseEnter={() => {
                !isMobile && changeCurrSlider(i);
              }}
              onTouchStart={() => changeCurrSlider(i)}
            >
              <Link href={link}>
                <a className={style.sliderAnchor}>
                  <h1
                    className={`hover-target ${style.sliderTitle} ${style.sliderNameTitle}`}
                  >
                    {title}
                  </h1>
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={sliderScrollbar} className={style.sliderScrollbar}>
          <button
            className={`swiper-scrollbar-drag ${style.sliderScrollbarBtn}`}
          ></button>
        </div>
      </main>
      <ul className={style.bgPage}>
        {data.map(({ id, title }, i) => (
          <li
            key={id}
            className={`${style.bgList} ${i === sliderIndex ? style.show : ''}`}
          >
            <div className={style.bgImg}></div>
            <h2 className={style.bgTitle}>{title}</h2>
            <div className={style.bgCurrNum}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className={style.bgMaxNum}>
              {String(data.length).padStart(2, '0')}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
