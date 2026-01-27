import bg_img from "../../../assets/banner-image-bg-1.jpg";
import image from "../../../assets/banner-image3.png";
import DiscountTimer from "./DiscountTimer";

const DiscountSection = () => {
  return (
    <section className="w-full h-[600px] bg-cover bg-center flex justify-center items-center px-4 md:px-8" style={{backgroundImage:`url(${bg_img})`}}>
      <div className="container w-full flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-between">
        {/* left content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-2/3 md:max-w-md drop-shadow-lg" src={image} alt="" />
        </div>
        
        {/* right content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">30% Discount on All items. Hurry Up !!!</h1>
          {/* CountDown Timer */}
          <DiscountTimer/>
          <button className="btn btn-secondary px-6 py-3 rounded-full shadow-md">Shop Collection</button>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;