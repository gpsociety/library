import { useTranslation } from "react-i18next"

export const Gallery = () => {
    const{t} = useTranslation();
    return (
        <section className="home__container">
                    <div>
                        <h1 className="home__title">{t('gllH1')} <b>{t('gllB')}</b></h1>
                        <p className="home__subtitle">{t('gllP1')}</p>
                    </div>
                </section>
    )
}
