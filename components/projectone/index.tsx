import Image from 'next/image';
import CenterArticleWrapper from '../wrapper/article/center';
import FullimgWrapper from '../wrapper/fullimg';
import FullparagraphWrapper from '../wrapper/fullparagraph';
import FullvideoWrapper from '../wrapper/fullvideo';
import HalfImgWrapper from '../wrapper/halfimg';
import style from './Projectone.module.css';

const ProjectOne = () => {
  return (
    <CenterArticleWrapper
      title="LEtoile Feb"
      highlight="fashion, art direction"
    >
      <HalfImgWrapper
        leftImg={{
          src: '/img/3.jpg',
          width: '532',
          height: '798',
          layout: 'responsive',
          alt: 'Page Image',
          className: style.pageImage,
        }}
        righImg={{
          src: '/img/3.jpg',
          width: '532',
          height: '798',
          layout: 'responsive',
          alt: 'Page Image',
          className: style.pageImage,
        }}
      />
      <FullparagraphWrapper />
      <div className={style.videoContainer}>
        <FullvideoWrapper
          src="/img/1.jpg"
          width="1094"
          height="615"
          layout="responsive"
          alt="Video Thumbnail"
        />
      </div>
      <span style={{ marginTop: '3rem', width: '100%' }}></span>
      <div className={style.halfImgContainer}>
        <div className={style.imgWrapper}>
          <Image
            src="/img/4.jpg"
            width="532"
            height="798"
            layout="responsive"
            alt="Page Image"
            className={style.pageImage}
          />
        </div>
      </div>
      <div className={`${style.halfImgContainer} ${style.halfImgRight}`}>
        <div className={style.imgWrapper}>
          <Image
            src="/img/4.jpg"
            width="532"
            height="798"
            layout="responsive"
            alt="Page Image"
            className={style.pageImage}
          />
        </div>
      </div>
      <div className={style.horizonList}>
        <div className={style.listItem}>
          <h5 className={style.listTitle}>art direction</h5>
          <p className={style.listText}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia.
          </p>
        </div>
        <div className={style.listItem}>
          <h5 className={style.listTitle}>art direction</h5>
          <p className={style.listText}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia.
          </p>
        </div>
        <div className={style.listItem}>
          <h5 className={style.listTitle}>art direction</h5>
          <p className={style.listText}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia.
          </p>
        </div>
      </div>
      <HalfImgWrapper
        leftImg={{
          src: '/img/1.jpg',
          width: '532',
          height: '355',
          layout: 'responsive',
          alt: 'Page Image',
          className: style.pageImage,
        }}
        righImg={{
          src: '/img/1.jpg',
          width: '532',
          height: '355',
          layout: 'responsive',
          alt: 'Page Image',
          className: style.pageImage,
        }}
      />
      <FullparagraphWrapper />
      <FullimgWrapper
        src="/img/4.jpg"
        width="1094"
        height="1641"
        layout="responsive"
        alt="Big Image"
      />
    </CenterArticleWrapper>
  );
};

export default ProjectOne;
