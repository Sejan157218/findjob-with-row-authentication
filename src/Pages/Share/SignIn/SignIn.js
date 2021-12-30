import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAllContext from "../../hook/useAllContext";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import signupImage from "../../../Images/techfloring.png"
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
    <Container className="signup-container">
      <Grid  container spacing={2} sx={{ my: 8 }}>
        <Grid item xs={12} md={6}>
          <div >
          <Link to="/signin"><button className="sign-btn">SIGN IN</button></Link>
           <Link  to="/signup"> <button className="sign-btn">SIGN UP</button></Link>
           <h1>SIGN In</h1>
      
            <form  className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="signup-form-group">
                <label style={{width:"94%"}}>
                  Email
                  <input type="email" placeholder="Email" {...register("email")} />
                  </label>
                  </div>
                  <div className="signup-form-group">
                <label style={{width:"94%"}}>
                  Email
                  <input type="password" placeholder="Password" {...register("password")} />
                  </label>
                  </div>
              <input className="submit-btn" type="submit" value="Sign IN" />
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

export default SingIn;
