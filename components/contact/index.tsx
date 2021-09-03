import FullArticleWrapper from '../wrapper/article/full';
import Select from './form/select';
import Input from './form/input';
import Textarea from './form/textarea';
import Button from './form/button';
import style from './Contact.module.css';
import components from './components';

const Contact = () => {
  return (
    <FullArticleWrapper
      title="Say Hello"
      highlight="get in touch"
      styleProp={{ paddingBottom: '0' }}
    >
      <div className={style.mainContainer}>
        <div className={style.container}>
          <div className={style.innerContainer}>
            <div className={style.formContainer}>
              <form className={style.form}>
                {components.map(({ id, type, input, select, textarea }) => {
                  if (type === 'SELECT' && select) {
                    const { name, placeholder, options } = select;

                    return (
                      <Select
                        key={id}
                        name={name}
                        placeholder={placeholder}
                        options={options}
                      />
                    );
                  } else if (type === 'INPUT' && input) {
                    const { name, placeholder, type } = input;

                    return (
                      <Input
                        key={id}
                        name={name}
                        placeholder={placeholder}
                        type={type}
                      />
                    );
                  } else if (type === 'TEXTAREA' && textarea) {
                    const { name, placeholder } = textarea;

                    return (
                      <Textarea
                        key={id}
                        name={name}
                        placeholder={placeholder}
                      />
                    );
                  } else if (type === 'BUTTON') {
                    return <Button key={id} text="submit" />;
                  }
                })}
              </form>
            </div>
            <div className={style.sideCard}>
              <div className={style.card}>
                <h6 className={style.cardTitle}>Call Us</h6>
                <div className={style.cardDescription}>
                  <p>+1 423 389 5987</p>
                  <p> +1 423 389 5987</p>
                </div>
                <h6 className={style.cardTitle}>Visit Us</h6>
                <div className={style.cardDescription}>
                  <p>
                    99-81 middagh st, Brooklyn
                    <br />
                    NY 11201, USA
                  </p>
                </div>
                <h6 className={style.cardTitle}>Email Us</h6>
                <div className={style.cardDescription}>
                  <p>office@euthenia.com</p>
                  <p>support@euthenia.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.mapContainer}>
        <div className={style.container}>
          <div className={style.mapInnerContainer}>
            <div className={style.mapText}>
              <h5 className={style.mapTitle}>
                99-81 middagh st, Brooklyn
                <br />
                NY 11201, USA
              </h5>
            </div>
            <div className={style.mapAddress}>
              <a
                href="https://www.google.com/maps/place/99-81+Middagh+St,+Brooklyn,+NY+11201,+USA/@40.6999552,-73.9936128,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25a36fb73a3d1:0xb653e2f02fd08084!8m2!3d40.6999552!4d-73.9914241"
                rel="noreferrer"
                target="_blank"
                className={style.mapAchor}
              >
                find us on map
              </a>
            </div>
          </div>
        </div>
      </div>
    </FullArticleWrapper>
  );
};

export default Contact;
