/* eslint-disable react-hooks/immutability */
import ProductItem from '../Products/ProductItem';
import ProductList from './ProductList';
import Pagination from './Pagination';
import useFetchProduct from '../../hooks/useFetchProducts';
import { useState } from 'react';
import FilterSection from './FilterSection';
import useFetchCategories from '../../hooks/useFetchCategories';

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1); 
  const [priceRange, setPriceRange] = useState([0,1000]);
  const [selectedCategory,setSelectedCategory] = useState("");
  const [searchQuery,setSearchQuery] = useState("");
  const [ordering,setOrdering] = useState("");

  const {products,loading,totalPages} = useFetchProduct(currentPage,priceRange,selectedCategory,searchQuery,ordering);
  const categories = useFetchCategories();

  const handlePriceChange = (index, value) => {
    setPriceRange((prev) => {
      const newRange = [...prev];
      newRange[index] = value;
      return newRange;
    })
    setCurrentPage(1);
  };

  return (
    <div className='mx-w-7xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Shop Our Products</h1>
      <FilterSection 
        priceRange={priceRange} 
        handlePriceChange={handlePriceChange} 
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        handleSearchQuery={setSearchQuery}
        ordering={ordering}
        handleOrdering={setOrdering}/>
      <Pagination totalPages={totalPages} handlePageChange={setCurrentPage} currentPage={currentPage} />
      <ProductList products={products} loading={loading} />
      <Pagination totalPages={totalPages} handlePageChange={setCurrentPage} currentPage={currentPage} />
    </div>
  );
};

export default ShopPage;