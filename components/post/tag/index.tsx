import style from './Tag.module.css';

type TagProps = {
  name: string;
  link: string;
};

const Tag = ({ name, link }: TagProps) => {
  return (
    <a href={link} className={`hover-target ${style.tagAnchor}`}>
      {name}
    </a>
  );
};

export default Tag;
