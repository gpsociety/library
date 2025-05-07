import React from 'react'
import { Carousel } from '../components/Carousel'
import { useTranslation } from 'react-i18next'


export const Home = () => {
    const {t} = useTranslation();
    return (
        <section className="home__container">
            <div>
                <h1 className="home__title">{t('pdfH1')}</h1>
                <p className="home__subtitle">{t('pdfP1')} <strong>{t('pdfP2')}</strong> {t('pdfP3')}</p>
            </div>
            <Carousel />
        </section>
    )
}