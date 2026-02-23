import { useCallback, useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import authApiClient from '../services/auth-api-client';

const useCart = () => {
  const [authToken] = useState(() => JSON.parse(localStorage.getItem("authTokens"))?.access);
  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));
  const [loading, setLoading] = useState(false);
  // Create a new cart
  const createOrGetCart = useCallback(async () => {
    setLoading(true);
    try {
      const response = await authApiClient.post("/carts/");
      if (!cartId) {
        localStorage.setItem("cartId", response.data.id);
        setCartId(response.data.id);
      }
      setCart(response.data);
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  }, [authToken, cartId]);

  // Add items to the cart
  const AddCartItems = useCallback(async (product, quantity) => {
    setLoading(true);
    if (!cartId) await createOrGetCart();
    try {
      const response = await apiClient.post(
        `/carts/${cartId}/items/`,
        { product, quantity },
      );
      return response.data;
    } catch (error) {
      console.log("Error adding items", error.response.data);
    } finally {
      setLoading(false);
    }
  },[cartId,createOrGetCart]);

  // Update Item Quantity
  const updateCartItemQuantity = useCallback(async (itemId, quantity)=>{
    try{
      await authApiClient.patch(`/carts/${cartId}/items/${itemId}/`,{quantity,});
    } catch(error){
      console.log("error updating cart items", error);
    }
  },[cartId])

  // Delete Cart Items
  const deleteCartItems = useCallback(async(itemId) => {
    try{
      await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`)
    }catch(error){
      console.log(error);
    }
  },[cartId])

  useEffect(()=>{
    const initializeCart = async() => {
      setLoading(true);
      await createOrGetCart();
      setLoading(false);
    }
    initializeCart();
  },[createOrGetCart]);

  return { cart,loading, createOrGetCart, AddCartItems , updateCartItemQuantity, deleteCartItems};
};

export default useCart;       