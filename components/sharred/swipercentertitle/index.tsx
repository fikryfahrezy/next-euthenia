import SwiperWrapper from '../../wrapper/swiper';
import style from './Swipercentertitle.module.css';

type SwiperCenterTitleProps = {
  components: { id: string; link: string; title: string }[];
};

const SwiperCenterTitle = ({ components }: SwiperCenterTitleProps) => {
  return (
    <SwiperWrapper
      components={components}
      contentElement={(title, isActive) => (
        <a
          className={`${style.sliderAnchor} ${
            isActive ? style.sliderActive : ''
          }`}
        >
          <h1 className={`hover-target ${style.sliderTitle}`}>{title}</h1>
        </a>
      )}
      bgElement={(title, isActive, i) => (
        <li className={`${style.bgList} ${isActive ? style.show : ''}`}>
          <div className={style.bgImg}></div>
          <h2 className={style.bgTitle}>{title}</h2>
          <div className={style.bgCurrNum}>
            {String(i + 1).padStart(2, '0')}
          </div>
          <div className={style.bgMaxNum}>
            {String(components.length).padStart(2, '0')}
          </div>
        </li>
      )}
    />
  );
};

export default SwiperCenterTitle;
