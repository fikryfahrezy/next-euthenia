import SwiperWrapper from '../../wrapper/swiper';
import style from './Sbt.module.css';
import components from './components';

const Sbt = () => {
  return (
    <SwiperWrapper
      components={components}
      contentElement={(title, isActive, i) => (
        <a
          className={`${style.sliderAnchor} ${
            isActive ? style.sliderActive : ''
          }`}
        >
          <h1
            className={`hover-target ${style.sliderTitle} ${
              i === 0 ? style.firstSliderTitle : ''
            }`}
          >
            {title}
          </h1>
        </a>
      )}
      bgElement={(title, isActive, i) => (
        <li className={`${style.bgList} ${isActive ? style.show : ''}`}>
          <div className={style.bgImg}></div>
          <div className={style.bgTitleContainer}>
            <h2 className={style.bgTitle}>{title}</h2>
          </div>
          <div className={style.bgCurrNum}>
            {String(i + 1).padStart(2, '0')}
          </div>
          <div className={style.bgMaxNum}>
            {String(components.length).padStart(2, '0')}
          </div>
        </li>
      )}
      scrollBarClassName={style.scrollBar}
    />
  );
};

export default Sbt;
