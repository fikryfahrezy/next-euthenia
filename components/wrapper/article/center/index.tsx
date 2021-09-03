import type { CSSProperties, ReactNode } from 'react';
import style from './Centerarticle.module.css';
import FullArticleWrapper from '../full';

type CenterArticleWrapperProps = {
  title: string;
  highlight: string;
  children: ReactNode;
};

const CenterArticleWrapper = ({
  title,
  highlight,
  children,
}: CenterArticleWrapperProps) => {
  return (
    <FullArticleWrapper title={title} highlight={highlight}>
      <div className={style.pageContainer}>
        <div className={style.innerPageContainer}>{children}</div>
      </div>
    </FullArticleWrapper>
  );
};

export default CenterArticleWrapper;
