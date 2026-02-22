import { useState } from 'react';
import apiClient from '../services/api-client';
import authApiClient from '../services/auth-api-client';

const useCart = () => {
  const [authToken] = useState(() => JSON.parse(localStorage.getItem("authTokens"))?.access);
  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));
  // Create a new cart
  const createOrGetCart = async () => {
    try {
      const response = await authApiClient.post("/carts/");
      if (!cartId) {
        localStorage.setItem("cartId", response.data.id);
        setCartId(response.data.id);
      }
      setCart(response.data);
    } catch (error) {
      console.log(error.response);
    }
  }

  // Add items to the cart
  const AddCartItems = async (product, quantity) => {
    if (!cartId) await createOrGetCart();
    try {
      const response = await apiClient.post(
        `/carts/${cartId}/items/`,
        { product, quantity },
        {
          headers: {
            Authorization: `JWT ${authToken}`
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("Error adding items", error.response.data);
    }
  }
  return { cart, createOrGetCart, AddCartItems };
};

export default useCart;       