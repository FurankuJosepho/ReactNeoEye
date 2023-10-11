import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation, Pagination, Scrollbar, A11y, } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import '../css/carousel.css';

export const Carousel = ({ slides }) => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={1}
      navigation
      effect={'fade'}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.images}>
          <img className="slider-img" src={slide.images} alt={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
