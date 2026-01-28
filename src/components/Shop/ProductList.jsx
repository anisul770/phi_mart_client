import React from 'react';
import ProductItem from '../Products/ProductItem';

const ProductList = ({ products, loading }) => {
  if (loading) return (
    <div className='flex justify-center py-10 min-h-screen'>
      <span className="loading loading-xl loading-spinner text-error"></span>
    </div>
  );
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;