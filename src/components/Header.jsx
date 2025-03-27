import React from "react";
import { Link } from "react-router-dom";
import {
    FaXTwitter,
    FaInstagram,
    FaYoutube,
    FaFacebookF ,
} from "react-icons/fa6";
import { RiHome9Line, RiGalleryFill, RiBook2Fill  } from "react-icons/ri";

export const Header = () => {
    return (
        <header className="header">
            <a className="header__box" href="https://www.globalpenguinsociety.org">    
                <div className="header__img" >
                    <img src="./img/penguin.png" alt="logo gps" />
                </div>
                <p> Global Penguin Society <span className="header__enf">Library</span></p>
            </a>
            <nav className="header__nav">
                <Link to={"https://www.globalpenguinsociety.org"} className="header__link header__link--nav"><RiHome9Line /> <p>GPS</p></Link>
                <Link to={"/"} className="header__link header__link--nav"><RiBook2Fill/> <p>Library</p></Link>
                <Link to={"/gallery"} className="header__link header__link--nav"><RiGalleryFill/> <p>Gallery</p></Link>
            </nav>
            <div className="header__social">
                <div className="header__links">
                    <a
                        href="https://www.facebook.com/GlobalPenguinSociety/"
                        target="_blank"
                        className="header__link header__link--social"
                        title="Facebook"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://www.instagram.com/globalpenguinsociety/"
                        target="_blank"
                        className="header__link header__link--social"
                        title="Instagram"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://x.com/PENGUIN_GPS"
                        target="_blank"
                        className="header__link header__link--social"
                        title="Twitter"
                    >
                        <FaXTwitter />
                    </a>
                    <a
                        href="https://www.youtube.com/@globalpenguinsociety"
                        target="_blank"
                        className="header__link header__link--social"
                        title="Youtube"
                    >
                        <FaYoutube />
                    </a>
                </div>
                <p>Follow Us</p>
            </div>
        </header>
    );
};
