// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import banner1 from '../../../assets/banner/accesories-full-1.jpg'
import banner2 from '../../../assets/banner/accesories-full-2.jpg'
import banner3 from '../../../assets/banner/side-banner.png'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import './Banner.css'
const Banner = () => {
    return (
        <div className='lg:flex lg:mx-10 gap-6 p-0 mb-10 mt-3 mx-3'>
            <div className='lg:w-3/4 mx-auto mb-10'>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    mousewheel={true}
                    pagination={true}
                    loop={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                    style={{ height: '100%' }} // Add this line
                >
                    <SwiperSlide style={{ height: '100%' }}>
                        <div className=" lg:w-full lg:h-[690px] w-[375px] h-[569px] overflow-hidden">
                            <img
                                src={banner1}
                                alt="Your Image"
                                className="w-full h-full object-cover"
                            />
                            <div className="lg:px-20 px-10 space-y-4  absolute lg:bottom-56 bottom-40 text-white">
                                <h1 className='lg:text-5xl text-2xl font-bold lg:w-4/6'>Meet The Lines Of The Millennium</h1>
                                <p className="md:w-2/3">
                                    Fashion is to please your eye. Shapes and proportions are for your intellect. I have an obsession with details and pattern.</p>
                                <br />
                                <button className="btn">Check Collection</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ height: '100%' }}>
                        <div className=" lg:w-full lg:h-[690px] w-[375px] h-[569px] overflow-hidden">
                            <img
                                src={banner2}
                                alt="Your Image"
                                className="w-full h-full object-cover"
                            />
                            <div className="lg:px-20 px-10 space-y-4  absolute lg:bottom-56 bottom-40 text-white">
                                <h1 className='lg:text-5xl text-2xl font-bold lg:w-4/6'>New Modern Collection</h1>
                                <p className="md:w-2/3">
                                    Elegance isn't solely defined by what you wear. It's how you carry yourself, how you speak, what you read.

                                </p>
                                <br />
                                <button className="btn">Check Collection</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div>
                <div style={{ height: '100%' }}>
                    <img className='lg:w-full lg:h-[690px] w-[374px] h-[450px] mx-auto scale-100' src={banner3} alt="" />
                </div>
            </div>
        </div>

    );
};

export default Banner;