import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Loading } from "./Loading";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/styles.css"


export const Slider = ({ cards }) => {
    const [swiperRef, setSwiperRef] = useState(null);
    const { t } = useTranslation();

    return (
        <div className="carousel-container">
            {cards.length > 0 ? (
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    navigation={true}
                    // loop={true}
                    modules={[Navigation]}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="mySwiper"
                >
                    {cards.map((card) => (
                        <SwiperSlide key={card.id}>
                            <div className="carousel-item-gallery">
                                <p className="card-title-gallery">{t(card.desc)}</p>
                                <div className="carousel-img-gallery">
                                    <img src={card.img} alt={card.alt} />
                                    {card.disable && (
                                        <div className="coming-soon">
                                            {t('comingSoon')}
                                        </div>
                                    )}
                                </div>
                                <div className="download-wrapper">
                                    <a 
                                        target="_blank" 
                                        href={card.link} 
                                        rel="noopener noreferrer" 
                                        className={`download-link ${card.disable ? 'disabled-link' : ''}`}
                                        aria-disabled={card.disable} 
                                        onClick={(e) => { if (card.disable) e.preventDefault(); }}
                                    >
                                        {t('download')} <span className="download-icon logo4k"><img src="./svg/4klogo.svg" alt="" width={"100%"} /></span>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <Loading />
            )}

        </div>
    )
}
