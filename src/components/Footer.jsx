import { useTranslation } from "react-i18next"
import {
    FaXTwitter,
    FaInstagram,
    FaYoutube,
    FaFacebookF,
} from "react-icons/fa6";

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <div className="footer__links">
                <a
                    href="https://www.facebook.com/GlobalPenguinSociety/"
                    target="_blank"
                    className="footer__link footer__link--social"
                    title="Facebook"
                >
                    <FaFacebookF />
                </a>
                <a
                    href="https://www.instagram.com/globalpenguinsociety/"
                    target="_blank"
                    className="footer__link footer__link--social"
                    title="Instagram"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://x.com/PENGUIN_GPS"
                    target="_blank"
                    className="footer__link footer__link--social"
                    title="Twitter"
                >
                    <FaXTwitter />
                </a>
                <a
                    href="https://www.youtube.com/@globalpenguinsociety"
                    target="_blank"
                    className="footer__link footer__link--social"
                    title="Youtube"
                >
                    <FaYoutube />
                </a>
            </div>
            <p>&copy; Global Penguin Society - 2025</p>
            <p>{t('footer')}</p>
        </footer>
    )
}
