import type { ImageProps } from 'next/image';
import Image from 'next/image';
import style from './Fullimg.module.css';

const FullimgWrapper = ({ alt, ...props }: ImageProps) => {
  return (
    <div className={style.fullMediaContainer}>
      <div className={style.imgWrapper}>
        <Image {...props} alt={alt} />
      </div>
    </div>
  );
};

export default FullimgWrapper;
