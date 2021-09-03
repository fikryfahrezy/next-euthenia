import ScrollAnimation from 'react-animate-on-scroll';
import CenterArticleWrapper from '../../wrapper/article/center';
import GalleryImg from '../../sharred/galleryimg';
import style from './Revealer.module.css';
import components from './components';

const Revealer = () => {
  return (
    <CenterArticleWrapper title="Our Work" highlight="we do magic">
      <div style={{ width: '100%' }}>
        {components.map(
          ({ id, alt, height, img, link, text, title, width }, i) => (
            <ScrollAnimation
              key={id}
              animateIn={`animate__fadeInLeft`}
              animateOut={`animate__fadeOutLeft`}
            >
              <div style={{ width: '100%' }}>
                <div
                  className={style.revealerContainer}
                  style={{ marginLeft: `${(i % 3) * 25}%` }}
                >
                  <a href={link} className={style.revealerAnchor}>
                    <GalleryImg
                      alt={alt}
                      height={height}
                      img={img}
                      text={text}
                      title={title}
                      width={width}
                      className={style.galleryImg}
                    />
                  </a>
                </div>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    display: 'block',
                  }}
                ></div>
              </div>
            </ScrollAnimation>
          ),
        )}
      </div>
    </CenterArticleWrapper>
  );
};

export default Revealer;
