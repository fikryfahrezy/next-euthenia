import { useState } from 'react';
import Masonry from 'react-masonry-component';
import CenterArticleWrapper from '../../wrapper/article/center';
import GalleryImg from '../../sharred/galleryimg';
import style from './Masonry.module.css';
import components, { filters } from './components';

const Studio = () => {
  const [filter, setFilter] = useState('');

  const filterClick = function filterClick(word: string) {
    setFilter(word);
  };

  return (
    <CenterArticleWrapper title="Our Work" highlight="we do magic">
      <div className={style.topContainer}>
        <div className={style.filterContainer}>
          <ul className={style.filterList}>
            {filters.map(({ filterStr, id, text }) => (
              <li key={id} className={style.filterItem}>
                <button
                  className={`hover-target ${style.filterBtn} ${
                    filterStr === filter ? style.currentFilterBtn : ''
                  }`}
                  onClick={() => filterClick(filterStr)}
                >
                  {text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <Masonry>
          {components.map(
            ({ id, alt, height, img, text, title, width, tag }) =>
              tag.includes(filter) && (
                <GalleryImg
                  key={id}
                  alt={alt}
                  height={height}
                  img={img}
                  text={text}
                  title={title}
                  width={width}
                />
              ),
          )}
        </Masonry>
      </div>
    </CenterArticleWrapper>
  );
};

export default Studio;
