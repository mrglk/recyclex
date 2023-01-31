import "./Header.scss";
// import { Link } from "react-router-dom";
import { ReactComponent as LogoBlack} from "../../assets/imgs/logo_black.svg";
import { ReactComponent as LogoWhite} from "../../assets/imgs/logo_white.svg";
import { ReactComponent as BurgerBlack} from "../../assets/imgs/burger_menu.svg";
import { ReactComponent as Close } from "../../assets/imgs/close_icon.svg";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import { useState } from "react";
import * as cx from "classnames";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";
import { useNavigate } from "react-router-dom";

export default function Header({toggleTheme, theme, resetState}) {
  let [opened, setOpened] = useState(false);
  useDisableBodyScroll(opened)
  const navigate = useNavigate();

  const classNav = cx("header__nav", {
    "header__nav header__nav_active": opened,
  });

  const classOverlay = cx("header__overlay", {
    "header__overlay header__overlay_active": opened,
  });

  const handleClick = (url) => {
    navigate(url);
    window.scrollTo(0, 0);
    if(opened) {
      setOpened(false)
    }
    if (url === "/form?index=0") {
      resetState()
    }
  }
  
  return (
    <header className="header container">
      <div className="header__inner container__row_wide">
          <BurgerBlack onClick={() => setOpened(!opened)} className="header__burger"/>
          <span onClick={() => handleClick("/")} onKeyDown={(e) => e.key === "Enter" && handleClick("/")} tabIndex={"0"} className="header__logoWrapper">{theme === 'light'? <LogoBlack className="header__logo"/> : <LogoWhite className="header__logo"/>}</span>
          <div className={classOverlay}></div>
        <nav className={classNav} onClick={handleClick}>
          <div className="header__navInner" onClick={e => e.stopPropagation()}>
          {opened && (
              <button className="header__close" onClick={handleClick}>
                <Close className="header__closeIcon" />
              </button>
            )}
            <div className="header__links">
              <span onClick={() => handleClick("/about-project")} onKeyDown={(e) => e.key === "Enter" && handleClick("/about-project")} tabIndex={"0"} className="header__link">О проекте</span>
              <span onClick={() => handleClick("/work-scheme")}  onKeyDown={(e) => e.key === "Enter" && handleClick("/work-scheme")} tabIndex={"0"} className="header__link">Схема работы</span>
              <span onClick={() => handleClick("/contacts")}  onKeyDown={(e) => e.key === "Enter" && handleClick("/contacts")} tabIndex={"0"} className="header__link">Контакты</span>
              <span onClick={() => handleClick("/form?index=0")} onKeyDown={(e) => e.key === "Enter" && handleClick("/form?index=0")} tabIndex={"0"} className="header__link ">Присоединиться</span>
            </div>
          </div>
        </nav>
        <SwitchTheme toggleTheme={toggleTheme} theme={theme} tabindex={"0"}/>
      </div>
    </header>
  );
}