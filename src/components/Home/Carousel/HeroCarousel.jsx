// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarouselSlide from './CarouselSlide';
import book from "../../../assets/book.png";

const HeroCarousel = () => {

  const slides = [
    {
      title: "This Fine Print Book Collections",
      subtitle: "Discount available. Grab it now!",
      image : book,
    },
    {
      title: "This Fine Print Book Collections",
      subtitle: "Discount available. Grab it now!",
      image : book,
    },
    {
      title: "This Fine Print Book Collections",
      subtitle: "Discount available. Grab it now!",
      image : book,
    },
  ]

  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide,index) => (
          <SwiperSlide key={index}>
            <CarouselSlide title = {slide.title} subtitle={slide.subtitle} image={slide.image}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroCarousel;