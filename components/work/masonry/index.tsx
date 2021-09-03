import Masonry from 'react-masonry-component';
import CenterArticleWrapper from '../../wrapper/article/center';
import GalleryImg from '../../sharred/galleryimg';
import style from './Masonry.module.css';
import components from './components';

const Studio = () => {
  return (
    <CenterArticleWrapper title="Our Work" highlight="we do magic">
      <div className={style.topContainer}>
        <div className={style.filterContainer}>
          <ul className={style.filterList}>
            <li className={style.filterItem}>
              <button
                className={`hover-target ${style.filterBtn} ${style.currentFilterBtn}`}
              >
                all
              </button>
            </li>
            <li className={style.filterItem}>
              <button className={`hover-target ${style.filterBtn}`}>
                branding
              </button>
            </li>
            <li className={style.filterItem}>
              <button className={`hover-target ${style.filterBtn}`}>
                photo
              </button>
            </li>
            <li className={style.filterItem}>
              <button className={`hover-target ${style.filterBtn}`}>
                motion
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <Masonry>
          {components.map(({ id, alt, height, img, text, title, width }) => (
            <GalleryImg
              key={id}
              alt={alt}
              height={height}
              img={img}
              text={text}
              title={title}
              width={width}
            />
          ))}
        </Masonry>
      </div>
    </CenterArticleWrapper>
  );
};

export default Studio;
