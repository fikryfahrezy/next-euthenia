import FullArticleWrapper from '../wrapper/article/full';
import style from './Contact.module.css';

const Contact = () => {
  return (
    <FullArticleWrapper styleProp={{ paddingBottom: '0' }}>
      <div className={style.mainContainer}>
        <div className={style.container}>
          <div className={style.innerContainer}>
            <div className={style.formContainer}>
              <div className={style.form}>
                <div className={style.inputContainer}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name: *"
                    autoComplete="off"
                    className={`hover-target ${style.input}`}
                  />
                </div>
                <div className={style.inputContainer}>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-Mail: *"
                    autoComplete="off"
                    className={`hover-target ${style.input}`}
                  />
                </div>
                <div className={style.inputContainer}>
                  <input
                    type="tel"
                    name="tel"
                    placeholder="Phone Number:"
                    autoComplete="off"
                    className={`hover-target ${style.input}`}
                  />
                </div>
                <div className={style.inputContainer}>
                  <input
                    type="text"
                    name="location"
                    placeholder="City, Country:"
                    autoComplete="off"
                    className={`hover-target ${style.input}`}
                  />
                </div>
                <div className={style.inputContainer}>
                  <select name="budget" className={style.selection}>
                    <option>Budget</option>
                    <option value="1">$2000 - $5000</option>
                    <option value="2">$5000 - $10000</option>
                    <option value="3">$10000 - $25000</option>
                    <option value="4">$25000 - $50000</option>
                    <option value="5">$50000 and up</option>
                  </select>
                  <div tabIndex={0} className={style.selectView}>
                    <span>Budget</span>
                    <ul className={style.selectList}>
                      <li
                        className={`${style.selectOption} ${style.currentSelect} ${style.currentFocus}`}
                      >
                        Budget
                      </li>
                      <li className={`${style.selectOption}`}>$2000 - $5000</li>
                      <li className={`${style.selectOption}`}>
                        $5000 - $10000
                      </li>
                      <li className={`${style.selectOption}`}>
                        $10000 - $25000
                      </li>
                      <li className={`${style.selectOption}`}>
                        $25000 - $50000
                      </li>
                      <li className={`${style.selectOption}`}>$50000 and up</li>
                    </ul>
                  </div>
                </div>
                <div className={style.inputContainer}>
                  <select name="intrested" className={style.selection}>
                    <option>Intrested For</option>
                    <option value="1">Web Design</option>
                    <option value="2">Photography</option>
                    <option value="3">Branding</option>
                    <option value="4">Illustration</option>
                    <option value="5">Motion Design</option>
                    <option value="6">Graphic Design</option>
                  </select>
                  <div tabIndex={0} className={style.selectView}>
                    <span>Intrested For</span>
                    <ul className={style.selectList}>
                      <li
                        className={`${style.selectOption} ${style.currentSelect} ${style.currentFocus}`}
                      >
                        Intrested For
                      </li>
                      <li className={`${style.selectOption}`}>Web Design</li>
                      <li className={`${style.selectOption}`}>Photography</li>
                      <li className={`${style.selectOption}`}>Branding</li>
                      <li className={`${style.selectOption}`}>Illustration</li>
                      <li className={`${style.selectOption}`}>Motion Design</li>
                      <li className={`${style.selectOption}`}>
                        Graphic Design
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={style.inputContainer}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Company Name:"
                    autoComplete="off"
                    className={`hover-target ${style.input}`}
                  />
                </div>
                <div className={style.inputContainer}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Website:"
                    autoComplete="off"
                    className={`hover-target ${style.input}`}
                  />
                </div>
                <div className={style.msgContainer}>
                  <textarea
                    name="message"
                    placeholder="Tell Us Everything *"
                    className={`hover-target ${style.textArea}`}
                  ></textarea>
                </div>
                <div className={style.msgContainer}>
                  <button className={`hover-target ${style.submitBtn}`}>
                    submit
                  </button>
                </div>
              </div>
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
