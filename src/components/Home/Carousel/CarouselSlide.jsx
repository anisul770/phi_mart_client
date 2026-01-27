import bg_img from "../../../assets/banner-image-bg.jpg"

const CarouselSlide = ({title,subtitle,image}) => {
  return (
    <section className="w-full h-[650px] bg-cover bg-center flex justify-center items-center px-4 md:px-8" style={{backgroundImage:`url(${bg_img})`}}>
      <div className="max-w-6xl flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-between px-8">
        {/* left content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-600 my-4">{subtitle}</p>
          <button className="btn btn-secondary px-6 py-3 rounded-full shadow-md">Shop Product</button>
        </div>

        {/* right content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="max-w-full md:max-w-md drop-shadow-lg" src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CarouselSlide;