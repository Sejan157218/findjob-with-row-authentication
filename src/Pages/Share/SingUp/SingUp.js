import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAllContext from "../../hook/useAllContext";

const SingUp = () => {
    const {setAuth}=useAllContext();
  const [errorSignup, setErrorSignup] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data.password === data.rePassword) {
      setErrorSignup("");
      axios
        .post("http://localhost:9000/users", data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
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
        {/* <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select> */}
        <input type="submit" />
      </form>
    </div>
  );
};

export default SingUp;
