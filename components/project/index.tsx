import Image from 'next/image';
import style from './Project.module.css';

const Project = () => {
  return (
    <>
      <div className={style.background}>The Battle</div>
      <div className={style.headerContainer}>
        <div className={style.innerHeaderContainer}>
          <div className={style.pageHeader}>
            <div className={style.titleContainer}>
              <h1 className={style.pageTitle}>The Battle</h1>
            </div>
            <div className={style.titleHighlight}>
              <p className={style.highlightText}>fashion, photography</p>
            </div>
          </div>
        </div>
      </div>
      <main className={style.mainContainer}>
        <div className={style.pageContainer}>
          <div className={style.innerPageContainer}>
            <div className={style.topImgContainer}>
              <div className={style.imgWrapper}>
                <Image
                  src="/img/project/1.jpg"
                  width="1094"
                  height="575"
                  layout="responsive"
                  alt="Page Image"
                  className={style.pageImage}
                />
              </div>
            </div>
            <div className={style.topText}>
              <p className={style.topParagraph}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni.
              </p>
            </div>
          </div>
        </div>
        <div className={style.containerFluid}>
          <div className={style.innerContainerFluid}>
            <div className={style.listContainer}>
              <div className={style.innerListContainer}>
                <div className={style.firstList}>
                  <h5 className={style.listTitle}>art direction</h5>
                  <p className={style.listParagraph}>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia.
                  </p>
                </div>
                <div className={style.secondList}>
                  <h5 className={style.listTitle}>art direction</h5>
                  <p className={style.listParagraph}>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia.
                  </p>
                </div>
                <div className={style.thirdList}>
                  <h5 className={style.listTitle}>art direction</h5>
                  <p className={style.listParagraph}>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia.
                  </p>
                </div>
                <div className={style.thirdList}>
                  <h5 className={style.listTitle}>art direction</h5>
                  <p className={style.listParagraph}>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia.
                  </p>
                </div>
              </div>
            </div>
            <div className={style.sideImage}>
              <div className={style.imgWrapper}>
                <Image
                  src="/img/project/2.jpg"
                  width="945"
                  height="1019"
                  layout="responsive"
                  alt="Side Image"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={style.footerContainer}>
        <div className={style.footerBg}>LEtoile Feb</div>
        <div className={style.pageContainer}>
          <div className={style.footerLink}>
            <div className={style.footerText}>
              <div className={style.footerLines}>
                <a href="#" className={style.footerAnchor}>
                  <h4 className={`hover-target ${style.footerTitle}`}>
                    Next Project
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Project;
