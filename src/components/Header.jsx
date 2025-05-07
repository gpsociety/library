import React from "react";
import { Link } from "react-router-dom";
import { RiHome9Line, RiGalleryFill, RiBook2Fill } from "react-icons/ri";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export const Header = () => {
    const { t } = useTranslation();
    return (
        <header className="header">
            <a className="header__box" href="https://www.globalpenguinsociety.org">
                <div className="header__img" >
                    <img src="./img/gps-logo-library.png" alt="logo gps" />
                </div>
            </a>
            <nav className="header__nav">
                <Link to={"https://www.globalpenguinsociety.org"} className="header__link header__link--nav "><RiHome9Line /> <p className="hover-underline-animation center">GPS</p></Link>
                <Link to={"/"} className="header__link header__link--nav "><RiBook2Fill /> <p className="hover-underline-animation center">{t('navLink1')}</p></Link>
                <Link to={"/gallery"} className="header__link header__link--nav "><RiGalleryFill /> <p className="hover-underline-animation center">{t('navLink2')}</p></Link>
            </nav>
            <LanguageSwitcher/>
        </header>
    );
};
