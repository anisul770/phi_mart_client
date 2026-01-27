import { useEffect, useState } from "react"
import apiClient from "../services/api-client";

const useFetchProduct = (currentPage,priceRange,selectedCategory,searchQuery,ordering) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const url = `/products/?ordering=${ordering}&search=${searchQuery}&category_id=${selectedCategory}&price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}`
      try {
        const response = await apiClient.get(url);
        const data = await response.data;

        setProducts(data.results);
        setTotalPages(Math.ceil(data.count / data.results.length));
      } catch (error) {
        console.log(error)
      } finally { setLoading(false) }
    };
    fetchProducts();
  }, [currentPage,priceRange,selectedCategory,searchQuery,ordering]);

  return {
    products, loading, totalPages
  };
};

export default useFetchProduct;

/* const fetchProducts = () => {
  setLoading(true);
  apiClient.get(`/products/?page=${currentPage}`)
  .then((res) => {
    setProducts(res.data.results);
    setTotalPages(Math.ceil(res.data.count/res.data.results.length))
  })
  .catch(error => console.log(error))
  .finally(()=> setLoading(false));
}; */