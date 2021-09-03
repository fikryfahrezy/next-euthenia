import type { CSSProperties, ReactNode } from 'react';
import ArticleWrapper from '..';
import style from './Fullarticle.module.css';

type FullArticleWrapperProps = {
  title: string;
  highlight: string;
  children: ReactNode;
  styleProp?: CSSProperties;
};

const FullArticleWrapper = ({
  title,
  highlight,
  children,
  styleProp,
}: FullArticleWrapperProps) => {
  return (
    <ArticleWrapper title={title} highlight={highlight}>
      <main className={style.mainContainer} style={styleProp}>
        {children}
      </main>
    </ArticleWrapper>
  );
};

export default FullArticleWrapper;
