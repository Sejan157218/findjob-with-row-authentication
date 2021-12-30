import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAllContext from "../../hook/useAllContext";
import signupImage from "../../../Images/techfloring.png"
import "./SignUp.css";

const SingUp = () => {
  const { handlerToLoginUserSignup } = useAllContext();
  const [errorSignup, setErrorSignup] = useState("");
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.password === data.rePassword) {
      setErrorSignup("");
      axios.post("http://localhost:9000/users", data).then(function (response) {
        console.log(response);
        if (response.data.message == "Signup successful!") {
          handlerToLoginUserSignup(
            data.email,
            navigate,
            response.data.access_token
          );
        }
      });
    } else {
      setErrorSignup("password not match...try again");
    }
  };
  return (
    <Container className="signup-container">
      <Grid  container spacing={2} sx={{ my: 8 }}>
        <Grid item xs={12} md={6}>
          <div >
          <Link to="/signin"><button className="sign-btn">SIGN IN</button></Link>
           <Link  to="/signup"> <button className="sign-btn">SIGN UP</button></Link>
           <h1>SIGN UP</h1>
           <p>Register To Get a Job</p>
            <form  className="signup-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="signup-form-group">
                <label>First Name
                <input type="text" {...register("firstName")} />
                </label>
            
                <label>Phone Number
                <input type="number" {...register("phonenumber")} />
                </label>
            </div>
            <div className="signup-form-group">
                <label>
                  Date Of Birth
                 
                  <input type="date" {...register("dateOfBirth")} />
                  </label>
                <label >
                  Gender
                  
                  <input {...register("gender")} />
                  </label>
                  </div>
                  <div className="signup-form-group">
                <label style={{width:"94%"}}>
                  Email
                  <input type="email" {...register("email")} />
                  </label>
                  </div>
                  <div className="signup-form-group">
                <label >
                  Password
                  <input type="password" {...register("password")} />
                  </label>
                <label >
                  Confirm-Password
                  <input type="password" {...register("rePassword")} />
                  </label>
              </div>
              <input className="submit-btn" type="submit" value="Sign UP" />
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
         <img style={{ width: "100%" }} src={signupImage} alt="" />
        </Grid>
      </Grid>
      </Container >
  );
};

export default SingUp;
