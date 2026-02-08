import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


const useAuth = () => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");


  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  };

  const [authTokens, setAuthTokens] = useState(getToken());

  const handleAPIError = (
    error,
    defaultMessage = "Something Went Wrong! Try Again"
  ) => {
    if (error.response && error.response.data) {
      const errorMessage = Object.values(error.response.data).flat().join("\n");
      setErrorMsg(errorMessage);
      return { success: false, message: errorMessage };
    }
    setErrorMsg(defaultMessage);
    return { success: false, message: defaultMessage };
  }


  // Fetch user profile
  const fetchUserProfile = async () => {
    try {
      const response = await apiClient.get("/auth/users/me", {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
      setUser(response.data);
    } catch (error) {
      console.log("Error Fetching user", error);
    }
  }
  useEffect(() => {
    if (authTokens) fetchUserProfile();
  }, [authTokens]);

  // Update user Profile
  const updateUserProfile = async (data) => {
    setErrorMsg("");
    try {
      await apiClient.put('/auth/users/me/', data, {
        headers: {
          Authorization: `JWT ${authTokens?.access}`
        }
      });
      return {success: true, message: "Profile Data Updated.\n"}
    } catch (error) {
      return handleAPIError(error);
    }
  };
  // Password Change
  const changePassword = async (data) => {
    setErrorMsg("");
    try {
      await apiClient.post("/auth/users/set_password/", data, {
        headers: {
          Authorization: `JWT ${authTokens?.access}`,
        },
      });
      return {success: true, message: "Password Changed Successfully" }
    } catch (error) {
      return handleAPIError(error);
    }
  };

  // Login User
  const loginUser = async (userData) => {
    setErrorMsg("");
    try {
      const response = await apiClient.post("/auth/jwt/create/", userData);
      setAuthTokens(response.data);
      localStorage.setItem("authTokens", JSON.stringify(response.data));
      // After login set user
      await fetchUserProfile();
    } catch (error) {
      setErrorMsg(error.response.data?.detail);
    }
  };

  //  Register User
  const registerUser = async (userData) => {
    setErrorMsg("");
    try {
      await apiClient.post("/auth/users/", userData);
      return { success: true, message: "Registration successful. Check your email to activate" }
    } catch (error) {
      return handleAPIError(error, "Registration Failed! Try Again");
    }
  };

  // Logout User
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  }

  return {
    user, errorMsg, loginUser, registerUser, logoutUser, updateUserProfile, changePassword,
  };
};

export default useAuth;