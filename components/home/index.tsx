import type { MouseEvent } from 'react';
import 'swiper/swiper.min.css';
import { useContext, useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel, Scrollbar } from 'swiper/core';
import { CusrorContext } from '../../context/Cursor';
import Link from 'next/link';
import style from './Home.module.css';

// install Swiper modules
SwiperCore.use([Mousewheel, Scrollbar]);

const Home = () => {
  const sliderScrollbar = useRef<HTMLDivElement>(null);
  const cursorRef = useContext(CusrorContext);
  const [isRendered, setRendered] = useState(false);

  useEffect(() => {
    if (!isRendered) {
      setRendered(true);
    }
  }, [isRendered]);

  const toggleCursor = function toggleCursor(
    isOn: boolean,
    target: HTMLElement,
  ) {
    if (cursorRef?.ref.current) {
      if (isOn) {
        target.classList.add(style.cursorIcon);
        cursorRef.ref.current.style.opacity = '0';
      } else {
        target.classList.remove(style.cursorIcon);
        cursorRef.ref.current.style.opacity = '1';
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
          <SwiperSlide className={style.sliderList}>
            <Link href="/project">
              <a className={style.sliderAnchor}>
                <h1
                  className={`hover-target ${style.sliderTitle} ${style.sliderNameTitle}`}
                >
                  The Battle
                </h1>
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide className={style.sliderList}>
            <Link href="/projectone">
              <a className={style.sliderAnchor}>
                <h1
                  className={`hover-target ${style.sliderTitle} ${style.sliderNameTitle}`}
                >
                  The Battle
                </h1>
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide className={style.sliderList}>
            <Link href="/project">
              <a className={style.sliderAnchor}>
                <h1
                  className={`hover-target ${style.sliderTitle} ${style.sliderNameTitle}`}
                >
                  The Battle
                </h1>
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide className={style.sliderList}>
            <Link href="/projectone">
              <a className={style.sliderAnchor}>
                <h1
                  className={`hover-target ${style.sliderTitle} ${style.sliderNameTitle}`}
                >
                  The Battle
                </h1>
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide className={style.sliderList}>
            <Link href="/project">
              <a className={style.sliderAnchor}>
                <h1
                  className={`hover-target ${style.sliderTitle} ${style.sliderNameTitle}`}
                >
                  The Battle
                </h1>
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide className={style.sliderList}>
            <Link href="/projectone">
              <a className={style.sliderAnchor}>
                <h1
                  className={`hover-target ${style.sliderTitle} ${style.sliderNameTitle}`}
                >
                  The Battle
                </h1>
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide className={style.sliderList}>
            <Link href="/project">
              <a className={style.sliderAnchor}>
                <h1
                  className={`hover-target ${style.sliderTitle} ${style.sliderNameTitle}`}
                >
                  The Battle
                </h1>
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide className={style.sliderList}>
            <Link href="/projectone">
              <a className={style.sliderAnchor}>
                <h1
                  className={`hover-target ${style.sliderTitle} ${style.sliderNameTitle}`}
                >
                  The Battle
                </h1>
              </a>
            </Link>
          </SwiperSlide>
        </Swiper>
        <div ref={sliderScrollbar} className={style.sliderScrollbar}>
          <div
            className={`swiper-scrollbar-drag ${style.sliderScrollbarBtn}`}
          ></div>
        </div>
      </main>
      <ul className={style.bgPage}>
        <li className={style.bgList}>
          <div className={style.bgImg}></div>
          <h2 className={style.bgTitle}>The Battle</h2>
          <div className={style.bgCurrNum}>01</div>
          <div className={style.bgMaxNum}>08</div>
        </li>
      </ul>
    </>
  );
};

export default Home;
