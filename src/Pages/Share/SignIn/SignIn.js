import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAllContext from "../../hook/useAllContext";


const SingIn = () => {
    const {handlerToLoginUser,setIsloading}=useAllContext();
    const [error, setError] = useState("")
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();


  const onSubmit = (data) => {
    axios.post(`http://localhost:9000/userslogin`,data)
    .then(function (response) {

     if(response.data.message=="Login successful!"){
        handlerToLoginUser(data.email,navigate,response.data.access_token);
     }
     else{
        setError(response.data.error)
    }})
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Email" {...register("email")} />
        <input placeholder="Password" {...register("password")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SingIn;
