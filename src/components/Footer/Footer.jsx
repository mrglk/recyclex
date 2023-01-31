// import { Link } from 'react-router-dom';
import "./Footer.scss";
import { ReactComponent as TelegramIcon} from "../../assets/imgs/telegram_icon.svg";
import { ReactComponent as WhatsAppIcon} from "../../assets/imgs/whatsapp_icon.svg";
import { useNavigate } from "react-router-dom";

export default function Footer({ handleModal }) {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
    window.scrollTo(0, 0);
  }

  return (
    <footer className="footer container">
        <div className="footer__inner container__row">
            <div className="footer__requisitesAndRights">
              <div className="footer__requisites">2021, ООО “Экополимер”<br/>ИНН 2309176846<br/>ТЕЛ: <a className="footer__telLink" href="tel:+78003330816">+7 (800) 333-08-16</a><br/>АДРЕС: Москва, Пресненская набережная, д. 12, офис 405, помещ. 3
              </div>
              <div className="footer__rights">Все права защищены</div>
            </div>
            <div className="footer__links">
              <div className="footer__pages">
                <span onClick={() => handleClick("/privacy-policy")} onKeyDown={(e) => e.key === "Enter" && handleClick("/privacy-policy")} tabIndex={"0"} className="footer__link">Политика конфиденциальности</span>
                <span onClick={() => handleClick("/general-terms")} onKeyDown={(e) => e.key === "Enter" && handleClick("/general-terms")} tabIndex={"0"} className="footer__link">Общие условия</span>
                <span onClick={() => handleClick("/cookies-policy-page")} onKeyDown={(e) => e.key === "Enter" && handleClick("/cookies-policy-page")} tabIndex={"0"} className="footer__link">Cookies Policy</span>
              </div>
              <button className="footer__manager footer__manager_desktop" onClick={handleModal}>Связь с менеджером</button>
            </div>
              <div className="footer__contacts">
                <div className="footer__email"><a className="footer__emailLink" href="mailto:info@recyclex.online">info@recyclex.online</a></div>
                <button className="footer__manager footer__manager_mobile" onClick={handleModal}>Связь с менеджером</button>
                <div className="footer__social">
                    <a
                      href='https://t.me/+79585787495'
                      target="_blank"
                      rel="noreferrer">
                          <TelegramIcon className="footer__icon" />
                    </a>
                    <a
                      href='https://wa.me/+79585787495'
                      target="_blank"
                      rel="noreferrer">
                          <WhatsAppIcon className="footer__icon" />
                    </a>
                </div>
              </div>
        </div>
    </footer>
  );
}