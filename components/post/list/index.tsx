import style from './List.module.css';

type ListProps = {
  list: { id: string; text: string; link: string }[];
};

const List = ({ list }: ListProps) => {
  return (
    <ul className={style.list}>
      {list.map(({ id, link, text }) => (
        <li key={id} className={style.listItem}>
          <a href={link} className={`hover-target ${style.listAnchor}`}>
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default List;
