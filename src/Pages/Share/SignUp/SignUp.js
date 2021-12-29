import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAllContext from "../../hook/useAllContext";

const SingUp = () => {
    const {handlerToLoginUserSignup,}=useAllContext();
  const [errorSignup, setErrorSignup] = useState("");
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.password === data.rePassword) {
      setErrorSignup("");
      axios
        .post("http://localhost:9000/users", data)
        .then(function (response) {
          console.log(response);
          if(response.data.message=="Signup successful!"){
            handlerToLoginUserSignup(data.email,navigate,response.data.access_token)
          };
        })
       
    } else {
      setErrorSignup("password not match...try again");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Email" {...register("email")} />
        <input placeholder="Password" {...register("password")} />
        <input placeholder="Re-Password" {...register("rePassword")} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default SingUp;
