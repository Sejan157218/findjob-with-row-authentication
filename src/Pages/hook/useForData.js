import { logRoles } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";

const useForData = () => {
  const [auth, setAuth] = useState({});
  const [email, setEmail] = useState('');


  const handlerToLoginUser = (email) => {
    axios
      .post(`http://localhost:9000/loginuser?email=${email}`)
      .then(function (response) {
          console.log(response);
        if(response.data.insertedId){
            localStorage.setItem('email',JSON.stringify(email))
        }
      });
  };

const getEmail=()=>{
  setEmail(JSON.parse(localStorage.getItem('email')))  
}

  useEffect(() => {
    fetch(`http://localhost:9000/loginuser?email=${email}`)
        .then(res => res.json())
        .then(data => setAuth(data))
}, [email])


console.log(auth);
  return {
    auth,
    setAuth,
    handlerToLoginUser,
    getEmail,
  };
};

export default useForData;
