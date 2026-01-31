import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router";
import SuccessAlert from "../SuccessAlert";
import ErrorAlert from "../ErrorAlert";
import apiClient from "../../services/api-client";

const ActivateAccount = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { uid, token } = useParams();
  const navigate = useNavigate(); 

  useEffect(() => {
    apiClient.post("auth/users/activation/", { uid, token })
      .then((res) => {
        setMessage("Account activation successful")
        setTimeout(() => navigate("/login"), 3000);
      })
      .catch(error =>{ 
        setError("Something went wrong. Please check your activation link");
        console.log(error.response);
      });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold">
          Account Activation
        </h2>
        {message && <SuccessAlert successMsg={message} />}
        {error && <ErrorAlert error={error} />}
      </div>
    </div>
  );
};

/* 
http://localhost:5173/activate/Ng/d38785-871a69f078698610573ffd7112948a53 
*/

export default ActivateAccount;