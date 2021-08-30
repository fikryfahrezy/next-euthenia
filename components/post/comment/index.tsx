import Image from 'next/image';
import Separator from '../separator';
import style from './Comment.module.css';

type CommentProps = {
  img: string;
  name: string;
  date: string;
  depth: number;
  comment: string;
};

const Comment = ({ img, name, date, depth, comment }: CommentProps) => {
  return (
    <>
      <div className={style.separatorWrapper}>
        <Separator />
      </div>
      <section
        className={style.commentSection}
        style={{ paddingLeft: `${depth * 3}rem` }}
      >
        <div className={style.commentInfo}>
          <div className={style.profileContainer}>
            <Image
              src={img}
              width="40"
              height="40"
              layout="fixed"
              alt="Account Image"
              className={style.commentProfile}
            />
          </div>
          <h6 className={style.subSubTitle}>
            {name}
            <small className={style.commentDate}>{date}</small>
          </h6>
        </div>
        <p className={style.paragraph}>{comment}</p>
        <button className={style.replyBtn}>reply</button>
      </section>
    </>
  );
};

export default Comment;
