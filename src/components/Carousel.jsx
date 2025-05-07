import React, { useEffect, useState } from "react";
import { getPdfs } from "../services/pdf.service";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaFilePdf } from "react-icons/fa6";
import { Loading } from "./Loading";
import { useTranslation } from "react-i18next";
import { usePDFs } from "./Context/PdfContext";
import i18n from "../i18n";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/styles.css"

export const Carousel = () => {
    // const [pdfs, setPdfs] = useState([]);
    const [swiperRef, setSwiperRef] = useState(null);
    const {t} = useTranslation();
    const pdfs = usePDFs();

    // useEffect(() => {
    //     const fetchPdfs = async () => {
    //         const pdfList = await getPdfs(i18n.language);
    //         setPdfs(pdfList);
    //     };
    //     fetchPdfs();
    // }, [i18n.language]);


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
                    {pdfs.map((pdf) => (
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
