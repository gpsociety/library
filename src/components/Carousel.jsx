import React, {useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaFilePdf } from "react-icons/fa6";
import { Loading } from "./Loading";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/styles.css"

export const Carousel = ({pdfs}) => {
    const [swiperRef, setSwiperRef] = useState(null);
    const {t, i18n} = useTranslation();
    const filteredPdfs = pdfs.filter((pdf) => pdf.lang === i18n.language);

    return (

        <div className="carousel-container">
            {pdfs.length > 0 ? (
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    navigation={true}
                    loop={true}
                    modules={[Navigation]}
                    breakpoints={{
                        0: { slidesPerView: 1 },  
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="mySwiper"
                >
                    {filteredPdfs.map((pdf) => (
                        <SwiperSlide key={pdf.id}>
                            <div className="carousel-item">
                                <p className="pdf-title">{pdf.title}</p>
                                <div className="carousel-img">
                                    <img src={pdf.imgLink} alt={pdf.title} />
                                </div>
                                <div className="download-wrapper">
                                    <a href={pdf.pdfLink} target="_blank" rel="noopener noreferrer" className="download-link">
                                        {t('download')} <span className="download-icon"><FaFilePdf/></span> 
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <Loading/>
            )}

        </div>
    );
};
