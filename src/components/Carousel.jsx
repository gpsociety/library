import React, { useEffect, useState } from "react";
import { getPdfs } from "../services/pdf.service";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const Carousel = () => {
    const [pdfs, setPdfs] = useState([]);
    const [swiperRef, setSwiperRef] = useState(null);

    useEffect(() => {
        const fetchPdfs = async () => {
            const pdfList = await getPdfs();
            setPdfs(pdfList);
        };
        fetchPdfs();
    }, []);


    return (

        <div className="carousel-container">
            {pdfs.length > 0 ? (
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    centeredSlides={true}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        0: { slidesPerView: 1 },  // Para dispositivos pequeños, muestra 1 slide
                        768: { slidesPerView: 2 }, // A partir de 768px, muestra 2 slides
                        1024: { slidesPerView: 3 } // A partir de 1024px, muestra 3 slides
                    }}
                    className="mySwiper"
                >
                    {pdfs.map((pdf) => (
                        <SwiperSlide key={pdf.id}>
                            <div className="carousel-item">
                                <p className="title">{pdf.title}</p>
                                <img src={pdf.imgLink} alt={pdf.title} className="image" />
                                <a href={pdf.pdfLink} target="_blank" rel="noopener noreferrer" className="download-link">
                                    Download
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            ) : (
                <p className="loading">Loading...</p>
            )}

        </div>
    );
};
