import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

    const toggleLanguage = () => {
        const newLang = isEnglish ? 'es' : 'en';
        i18n.changeLanguage(newLang);
        setIsEnglish(!isEnglish);
    };

    useEffect(() => {
        setIsEnglish(i18n.language === 'en');
    }, [i18n.language]);

    return (
        <div className={`language-switcher ${isEnglish ? 'active' : ''}`} onClick={toggleLanguage}>
            <div className={`pill ${isEnglish ? 'active' : ''}`}>
                <span className="label">{isEnglish ? 'EN' : 'ES'}</span>
            </div>
        </div>
    );

}
