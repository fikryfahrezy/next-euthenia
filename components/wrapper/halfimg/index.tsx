import type { ImageProps } from 'next/image';
import Image from 'next/image';
import style from './Halfimg.module.css';

type HalfImgWrapperProps = {
  leftImg: ImageProps;
  righImg: ImageProps;
};

const HalfImgWrapper = ({ leftImg, righImg }: HalfImgWrapperProps) => {
  return (
    <>
      <div className={style.halfImgContainer}>
        <div className={style.imgWrapper}>
          <Image {...leftImg} alt={leftImg.alt} />
        </div>
      </div>
      <div className={`${style.halfImgContainer} ${style.halfImgRight}`}>
        <div className={style.imgWrapper}>
          <Image {...righImg} alt={righImg.alt} />
        </div>
      </div>
    </>
  );
};

export default HalfImgWrapper;
