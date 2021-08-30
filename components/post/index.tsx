import Image from 'next/image';
import MidArticleWrapper from '../wrapper/article/center';
import HalfImgWrapper from '../wrapper/halfimg';
import FullvideoWrapper from '../wrapper/fullvideo';
import InputComp from '../sharred/input';
import TextareaComp from '../sharred/textarea';
import BtnComp from '../sharred/button';
import style from './Post.module.css';
import Comment from './comment';
import Separator from './separator';
import Tag from './tag';
import List from './list';
import {
  comments,
  postTags,
  asideTags,
  news,
  archives,
  categories,
} from './components';

const Post = () => {
  return (
    <MidArticleWrapper>
      <article className={style.article}>
        <div className={style.container}>
          <Image
            src="/img/1.jpg"
            width="719"
            height="480"
            layout="responsive"
            alt="Thumbnail"
            className={style.thumbnail}
          />
          <div className={style.innerContainer}>
            <div className={style.contentContainer}>
              <p className={style.paragraph}>
                Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur
                blandit tempus porttitor. Integer posuere erat a ante venenatis
                dapibus posuere velit aliquet. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Vestibulum id ligula porta
                felis euismod semper. Donec id elit non mi porta gravida at eget
                metus. Vestibulum id ligula porta felis euismod semper.
              </p>
              <p className={style.paragraph}>
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet. Cras mattis consectetur purus sit amet fermentum. Donec
                id elit non mi porta gravida at eget metus.
              </p>
              <div className={style.halfImgContainer}>
                <HalfImgWrapper
                  leftImg={{
                    src: '/img/1.jpg',
                    width: '305',
                    height: '203',
                    layout: 'responsive',
                    alt: 'Content Img',
                    className: style.contentImg,
                  }}
                  righImg={{
                    src: '/img/1.jpg',
                    width: '305',
                    height: '203',
                    layout: 'responsive',
                    alt: 'Content Img',
                    className: style.contentImg,
                  }}
                />
              </div>
              <p className={style.paragraph}>
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet. Cras mattis consectetur purus sit amet fermentum. Donec
                id elit non mi porta gravida at eget metus.
              </p>
              <p className={style.paragraph}>
                You can use the mark tag to <mark>highlight</mark> text.
              </p>
              <p className={style.paragraph}>
                <del>
                  This line of text is meant to be treated as deleted text.
                </del>
              </p>
              <p className={style.paragraph}>
                <s>
                  This line of text is meant to be treated as no longer
                  accurate.
                </s>
              </p>
              <p className={style.paragraph}>
                <ins>
                  This line of text is meant to be treated as an addition to the
                  document.
                </ins>
              </p>
              <p className={style.paragraph}>
                <u>This line of text will render as underlined</u>
              </p>
              <p className={style.paragraph}>
                <small>
                  This line of text is meant to be treated as fine print.
                </small>
              </p>
              <p className={style.paragraph}>
                <strong>This line rendered as bold text.</strong>
              </p>
              <p className={style.paragraph}>
                This line rendered as italicized text.
              </p>
              <p className={style.paragraph}>
                Design must reflect the practical and aesthetic in business but
                above all... good design must primarily serve people.
              </p>
              <p className={style.paragraph}>
                Nullam quis risus eget urna mollis ornare vel eu leo. Integer
                posuere erat a ante venenatis dapibus posuere velit aliquet.
              </p>
              <div className={style.contentVidContainer}>
                <FullvideoWrapper
                  src="/img/1.jpg"
                  width="1094"
                  height="615"
                  layout="responsive"
                  alt="Video Thumbnail"
                />
              </div>
              <blockquote className={style.blockQuote}>
                <p className={style.paragraph}>
                  Some people think design means how it looks. But of course, if
                  you dig deeper, its really how it works.
                </p>
                <p className={style.blockQuoteFooter}>Jason Salvatore</p>
              </blockquote>
              <p className={style.paragraph}>
                Nullam quis risus eget urna mollis ornare vel eu leo. Integer
                posuere erat a ante venenatis dapibus posuere velit aliquet.
              </p>
              <blockquote
                className={`${style.blockQuote} ${style.blockQuoteReverse}`}
              >
                <p className={style.paragraph}>
                  Some people think design means how it looks. But of course, if
                  you dig deeper, its really how it works.
                </p>
                <p className={style.blockQuoteFooter}>Jason Salvatore</p>
              </blockquote>
              <div className={style.separatorWrapper}>
                <Separator />
              </div>
              {postTags.map(({ id, link, name }) => (
                <Tag key={id} name={name} link={link} />
              ))}
              <div className={style.separatorWrapper}>
                <Separator />
              </div>
              <div className={style.authorContainer}>
                <div className={style.profileContainer}>
                  <Image
                    src="/img/2.jpg"
                    width="60"
                    height="60"
                    layout="fixed"
                    alt="Author Image"
                    className={style.authorImg}
                  />
                </div>
                <p className={`${style.paragraph} ${style.authorName}`}>
                  by{' '}
                  <a href="#" className={style.authorLink}>
                    <strong className="hover-target">Anna Kulis</strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.innerContainer}>
            <h5 className={style.subTitle}>4 comments</h5>
            {comments.map(({ comment, date, depth, id, img, name }) => (
              <Comment
                key={id}
                comment={comment}
                date={date}
                depth={depth}
                img={img}
                name={name}
              />
            ))}
          </div>
        </div>
        <div className={style.container}>
          <div className={style.innerContainer}>
            <h5 className={style.subTitle}>Leave a comment</h5>
            <div className={style.inputContainer}>
              <InputComp name="name" type="text" placeholder="Your Name *" />
            </div>
            <div className={style.inputContainer}>
              <InputComp name="email" type="email" placeholder="Email *" />
            </div>
            <div className={style.inputContainer}>
              <InputComp name="website" type="text" placeholder="Website" />
            </div>
            <div className={style.inputContainer}>
              <TextareaComp name="comment" placeholder="Comment *" />
            </div>
            <div className={style.inputContainer}>
              <BtnComp text="submit comment" />
            </div>
          </div>
        </div>
      </article>
      <aside className={style.aside}>
        <div className={style.asideContainer}>
          <form className={style.searchForm}>
            <InputComp name="search" type="text" placeholder="type here" />
            <BtnComp text="search" className={style.searchBtn} />
          </form>
          <div className={style.asideSeparator}>
            <Separator />
          </div>
          <h6 className={style.subSubTitle}>Categories</h6>
          <List list={categories} />
          <div className={style.asideSeparator}>
            <Separator />
          </div>
          <h6 className={style.subSubTitle}>Last Video</h6>
          <FullvideoWrapper
            src="/img/1.jpg"
            width="1094"
            height="615"
            layout="responsive"
            alt="Video Thumbnail"
          />
          <div className={style.asideSeparator}>
            <Separator />
          </div>
          <h6 className={style.subSubTitle}>Text Widget</h6>
          <p className={style.paragraph}>
            Design must reflect the practical and aesthetic in business but
            above all... good design must primarily serve people.
          </p>
          <div className={style.asideSeparator}>
            <Separator />
          </div>
          <h6 className={style.subSubTitle}>Lastest News</h6>
          <List list={news} />
          <div className={style.asideSeparator}>
            <Separator />
          </div>
          <h6 className={style.subSubTitle}>Tags</h6>
          {asideTags.map(({ id, link, name }) => (
            <Tag key={id} link={link} name={name} />
          ))}
          <div className={style.asideSeparator}>
            <Separator />
          </div>
          <h6 className={style.subSubTitle}>Archives</h6>
          <List list={archives} />
        </div>
      </aside>
    </MidArticleWrapper>
  );
};

export default Post;
