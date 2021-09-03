import 'swiper/swiper.min.css';
import type { MouseEvent, ReactNode } from 'react';
import { useContext, useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel, Scrollbar } from 'swiper/core';
import { CusrorContext } from '../../../context/Cursor';
import Link from 'next/link';
import style from './Swiper.module.css';

type SwiperCenterTitleProps = {
  contentElement: (
    title: string,
    isActive: boolean,
    index: number,
  ) => ReactNode;
  bgElement: (title: string, isActive: boolean, index: number) => ReactNode;
  components: { id: string; link: string; title: string }[];
  scrollBarClassName?: string;
};

// install Swiper modules
SwiperCore.use([Mousewheel, Scrollbar]);

const SwiperWrapper = ({
  components,
  contentElement,
  bgElement,
  scrollBarClassName = '',
}: SwiperCenterTitleProps) => {
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
          {components.map(({ id, link, title }, i) => (
            <SwiperSlide
              key={id}
              className={style.sliderList}
              onMouseEnter={() => {
                !isMobile && changeCurrSlider(i);
              }}
              onTouchStart={() => changeCurrSlider(i)}
            >
              <Link href={link}>
                {contentElement(title, i === sliderIndex, i)}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          ref={sliderScrollbar}
          className={`${style.sliderScrollbar} ${scrollBarClassName}`}
        >
          <button
            className={`swiper-scrollbar-drag ${style.sliderScrollbarBtn}`}
          ></button>
        </div>
      </main>
      <ul className={style.bgPage}>
        {components.map(({ id, title }, i) => (
          <div key={id}>{bgElement(title, i === sliderIndex, i)}</div>
        ))}
      </ul>
    </>
  );
};

export default SwiperWrapper;
