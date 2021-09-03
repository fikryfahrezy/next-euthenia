import Image from 'next/image';
import style from './Galleryimg.module.css';

type GalleryImgProps = {
  alt: string;
  height: string;
  img: string;
  text: string;
  title: string;
  width: string;
  className?: string;
};

const GalleryImg = ({
  alt,
  height,
  img,
  text,
  title,
  width,
  className = '',
}: GalleryImgProps) => {
  return (
    <div className={`${style.galleryItem} ${className}`}>
      <Image
        src={img}
        width={width}
        height={height}
        alt={alt}
        className={style.galleryImg}
      />
      <div className={`hover-target ${style.galleryMask}`}></div>
      <p className={style.galleryText}>{text}</p>
      <h4 className={style.galleryTitle}>{title}</h4>
    </div>
  );
};

export default GalleryImg;
