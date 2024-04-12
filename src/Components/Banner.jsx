import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

import { Pagination, Navigation } from 'swiper/modules';

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";

const Banner = () => {
    return (
        <div className='mt-8'>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img className='w-full lg:h-[650px]' src={slide1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-full lg:h-[650px]' src={slide2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-full lg:h-[650px]' src={slide3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-full lg:h-[650px]' src={slide4} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;