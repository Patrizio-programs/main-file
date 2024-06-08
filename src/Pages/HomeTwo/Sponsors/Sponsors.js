import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

const Sponsors = () => {
    return (
        <div className="sponsors__area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <Swiper
                            slidesPerView={3}
                            loop={true}
                            spaceBetween= {120}
                            breakpoints={{
                                0: {
                                    spaceBetween: 50,
                                    slidesPerView: 2
                                },
                                575: {
                                    spaceBetween: 80,
                                    slidesPerView: 3
                                },
                                992: {
                                    slidesPerView: 4
                                },
                                1200: {
                                    slidesPerView: 3
                                },
                            }}
                        >
                            <SwiperSlide className="sponsors__area-brand swiper-slide">
                                <Link to="#"><img src="assets/img/brand-1.png" alt="" /></Link>
                            </SwiperSlide>
                            <SwiperSlide className="sponsors__area-brand swiper-slide">
                                <Link to="#"><img src="assets/img/brand-2.png" alt="" /></Link>
                            </SwiperSlide>
                            <SwiperSlide className="sponsors__area-brand swiper-slide">
                                <Link to="#"><img src="assets/img/brand-3.png" alt="" /></Link>
                            </SwiperSlide>
                            <SwiperSlide className="sponsors__area-brand swiper-slide">
                                <Link to="#"><img src="assets/img/brand-4.png" alt="" /></Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;