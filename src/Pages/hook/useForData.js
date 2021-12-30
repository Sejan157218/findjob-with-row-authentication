import { logRoles } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";

const useForData = () => {
  const [auth, setAuth] = useState({});
  const [email, setEmail] = useState('ss');
  const [isloading, setIsloading] = useState(true);


  const handlerToLoginUser = (email,navigate,token) => {
    axios
      .post(`https://gentle-taiga-84055.herokuapp.com/loginuser?email=${email}`,{
        
          'authorization': `Bearer ${token}`,
        
      })
      .then(function (response) {
        if(response.data.insertedId){
            localStorage.setItem('email',JSON.stringify(email));
            setAuth({email:email})
            navigate("/");
            setIsloading(false)
        }
      });
  };
  const handlerToLoginUserSignup = (email,navigate,token) => {
    axios
      .post(`https://gentle-taiga-84055.herokuapp.com/loginuser?email=${email}`,{
        
        'authorization': `Bearer ${token}`,
      
    })
      .then(function (response) {
        if(response.data.insertedId){
            localStorage.setItem('email',JSON.stringify(email));
            setAuth({email:email})
            navigate("/");
            setIsloading(false)
        }
      });
  };
  useEffect(() => {

    getEmail()
}, [])

  const handlerToLogOutUser = (email) => {
    axios
      .delete(`https://gentle-taiga-84055.herokuapp.com/loginuser?email=${email}`)
      .then(function (response) {
        if(response.data){
            localStorage.removeItem('email');
            setAuth("");
        }
      });
  };

const getEmail=()=>{

  setEmail(JSON.parse(localStorage.getItem('email')));
  setIsloading(false)
}

  useEffect(() => {

    setIsloading(true)
   if(email){
    fetch(`https://gentle-taiga-84055.herokuapp.com/loginuser?email=${email}`)
    .then(res => res.json())
    .then(data => {

      setAuth(data)
      setIsloading(false)
    })}
    else{
      setIsloading(false)
    }
}, [email])


  return {
    auth,
    setAuth,
    handlerToLoginUser,
    getEmail,
    handlerToLogOutUser,
    isloading,
    setIsloading,
    handlerToLoginUserSignup,
  };
};

export default useForData;
