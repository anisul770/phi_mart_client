import { useState } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
  const [user, setUser] = useState(null);

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  };

  const [authTokens, setAuthTokens] = useState(getToken());

  // Login User
  const loginUser = async (userData) => {
    try{const response = await apiClient.post("/auth/jwt/create/", userData);
    setAuthTokens(response.data);
    localStorage.setItem("authTokens", JSON.stringify(response.data));
  }catch(error){
    console.log("Login Error", error.data?.response);
  }
  };

  return {
    user, loginUser
  }
}

export default useAuth;