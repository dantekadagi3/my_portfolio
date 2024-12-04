/* eslint-disable react/prop-types */
import '../Styles/rotator.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// eslint-disable-next-line no-unused-vars
function Rotate({ content }) {
    return (
        <>
        <div className='rotate--container'>
            <Swiper
                direction="horizontal" // Set the direction to vertical
                grabCursor={true}
                loop={true}
                slidesPerView={1} // Show one slide at a time
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay every 3 seconds
                modules={[Autoplay]}
                className='swiper_container'
            >
                <SwiperSlide>
                    <div className="slide-content">
                        <p>JavaScript</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <p>React</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <p>HTML</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <p>CSS</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <p>Dart</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <p>Flutter</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>


      <div className="rotator--decor">
        
      </div>
        </>
    );
}

export default Rotate;