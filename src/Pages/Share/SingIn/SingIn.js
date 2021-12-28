import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAllContext from "../../hook/useAllContext";


const SingIn = () => {
    const {handlerToLoginUser}=useAllContext();
    const [error, setError] = useState("")
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();


  const onSubmit = (data) => {
    axios.get(`http://localhost:9000/users?email=${data.email}&&password=${data.password}`)
    .then(function (response) {
     if(response.data.user===true){
        navigate("/");
        handlerToLoginUser(data.email)
     }
     else{
        setError(response.data.error)
    }})
  };
  console.log(error);
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
