// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import ErrorAlert from '../ErrorAlert';
import apiClient from '../../services/api-client';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, SetLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient.get("/products/")
      .then((res) => setProducts(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => SetLoading(false));
  }, []);

  return (
    <section className='mx-auto py-16 bg-gray-50'>
      <div className='flex justify-between items-center px-4 md:px-8 mb-4'>
        <h2 className='text-3xl md:text-4xl font-bold'>Trending products</h2>
        <a href="#" className='btn btn-secondary px-6 py-6 rounded-full text-lg'>View All</a>
      </div>
      {/* Spinner */}
      {isLoading && (
        <div className='text-center py-10'>
          <span className="loading loading-xl loading-spinner text-error"></span>
        </div>
      )}
      {error && <ErrorAlert error={error} />}
      {/* Product Slider */}
      {!isLoading && !error && products.length > 0 &&
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          className='mt-4 container px-4'
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className='flex justify-center'>
              <ProductItem key={product.id} product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      }
      {!isLoading && !error && products.length === 0 &&( 
        <p className='text-center text-gray-500 mt-6'>No Products Available</p> 
      )}
    </section>
  );
};

export default Product;