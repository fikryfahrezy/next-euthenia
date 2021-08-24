import type { ImageProps } from 'next/image';
import Image from 'next/image';
import style from './Fullvideo.module.css';

const FullvideoWrapper = ({ alt, ...props }: ImageProps) => {
  return (
    <div className={style.fullMediaContainer}>
      <div className={style.videoSection}>
        <figure className={style.videoWrapper}>
          <a
            href="https://player.vimeo.com/video/289474455"
            className={style.videoAnchor}
          >
            <Image
              {...props}
              alt={alt}
              className={`hover-target video-target ${style.videoThumbnail}`}
            />
          </a>
        </figure>
      </div>
    </div>
  );
};

export default FullvideoWrapper;
