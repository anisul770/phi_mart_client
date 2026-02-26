// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarouselSlide from './CarouselSlide';
import book from "../../../assets/images/book.png";
import laptop from "../../../assets/images/technology.png";
import fashion from "../../../assets/images/fashion.png";

const HeroCarousel = () => {

  const slides = [
    {
      title: "This Fine Print Book Collections",
      subtitle: "Discount available. Grab it now!",
      image : book,
    },
    {
      title: "Your Digital World, Connected.",
      subtitle: "Explore a range of devices for seamless living.",
      image : laptop,
    },
    {
      title: "This Fine Print Book Collections",
      subtitle: "Discount available. Grab it now!",
      image : fashion,
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