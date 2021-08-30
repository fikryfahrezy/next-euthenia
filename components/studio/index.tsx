import Image from 'next/image';
import CenterArticleWrapper from '../wrapper/article/center';
import FullimgWrapper from '../wrapper/fullimg';
import style from './Studio.module.css';

const Studio = () => {
  return (
    <CenterArticleWrapper>
      <FullimgWrapper
        src="/img/studio.jpg"
        width="1094"
        height="508"
        layout="responsive"
        className={style.imgMask}
      />
      <div className={style.subTitleContainer}>
        <h3 className={style.subTitle}>What we do</h3>
      </div>
      <div className={style.subHlContainer}>
        <p className={style.subHighlight}>stuff to note</p>
      </div>
      <div className={style.listContainer}>
        <ul className={style.list}>
          <li className={style.listItem}>Banner creation</li>
          <li className={style.listItem}>Media campaigns</li>
          <li className={style.listItem}>Photography</li>
          <li className={style.listItem}>Copywriting</li>
          <li className={style.listItem}>Phototyping</li>
        </ul>
        <ul className={style.list}>
          <li className={style.listItem}>Design</li>
          <li className={style.listItem}>Animation</li>
          <li className={style.listItem}>Art direction</li>
          <li className={style.listItem}>User experience</li>
          <li className={style.listItem}>Front-end</li>
        </ul>
        <ul className={style.list}>
          <li className={style.listItem}>Web development</li>
          <li className={style.listItem}>Identity</li>
          <li className={style.listItem}>Branding</li>
          <li className={style.listItem}>User testing</li>
          <li className={style.listItem}>Search engine</li>
        </ul>
      </div>
      <div className={style.subTitleContainer}>
        <h3 className={style.subTitle}>Our partners</h3>
      </div>
      <div className={style.subHlContainer}>
        <p className={style.subHighlight}>team of creatives</p>
      </div>
      <div className={style.grid}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className={style.box}>
            <div className={style.innerBox}>
              <a href="#">
                <Image
                  src="/img/1.jpg"
                  width="100"
                  height="45"
                  layout="fixed"
                  className={`hover-target ${style.boxImg}`}
                  alt="Box Image"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className={style.quoteContainer}>
        <blockquote className={style.blockQuote}>
          <p className={style.quoteText}>
            <em>
              Design must reflect the practical and aesthetic in business but
              above all... good design must primarily serve people.
            </em>
          </p>
          <h6 className={style.quoteSrc}>Thomas J. Watson</h6>
        </blockquote>
      </div>
    </CenterArticleWrapper>
  );
};

export default Studio;
