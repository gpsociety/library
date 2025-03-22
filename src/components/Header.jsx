import React from "react";
import {
    FaXTwitter,
    FaInstagram,
    FaYoutube,
    FaFacebookF ,
} from "react-icons/fa6";
import { RiHome9Line } from "react-icons/ri";

export const Header = () => {
    return (
        <header className="header">
            <div className="header__home">
                <a href="https://www.globalpenguinsociety.org" className="header__link header__link--home">
                    <RiHome9Line />
                </a>
                <p className="header__text">Back to home</p>
            </div>
            <a className="header__box" href="https://www.globalpenguinsociety.org">    
                <div className="header__img" >
                    <img src="./img/penguin.png" alt="logo gps" />
                </div>
                <p> <span>G</span>lobal <span>P</span>enguin <span>L</span>ibrary</p>
            </a>
            <div className="header__social">
                <div className="header__links">
                    <a
                        href="https://www.facebook.com/GlobalPenguinSociety/"
                        target="_blank"
                        className="header__link"
                        title="Facebook"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://www.instagram.com/globalpenguinsociety/"
                        target="_blank"
                        className="header__link"
                        title="Instagram"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://x.com/PENGUIN_GPS"
                        target="_blank"
                        className="header__link"
                        title="Twitter"
                    >
                        <FaXTwitter />
                    </a>
                    <a
                        href="https://www.youtube.com/@globalpenguinsociety"
                        target="_blank"
                        className="header__link"
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
