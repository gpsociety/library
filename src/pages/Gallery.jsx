import { useTranslation } from "react-i18next"
import { Slider } from "../components/Slider";
import { cards } from "../utils/cards";


export const Gallery = () => {
    const { t } = useTranslation();
    return (
        <section className="home__container">
            <div>
                <h1 className="home__title">{t('gllH1')} <b>{t('gllB')}</b></h1>
                <p className="home__subtitle">{t('gllP1')}</p>
            </div>
            <Slider cards={cards}></Slider>
        </section>
    )
}
