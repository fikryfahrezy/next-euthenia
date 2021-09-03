import style from './Socials.module.css';
import components from './components';

const Socials = () => {
  return (
    <div className={style.socials}>
      {components.map(({ id, link, title }) => (
        <a
          key={id}
          href={link}
          rel="noreferrer"
          target="_blank"
          className={`hover-target ${style.social}`}
        >
          {title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
