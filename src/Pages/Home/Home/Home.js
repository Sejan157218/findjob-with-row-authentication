import React from 'react';
import useAllContext from '../../hook/useAllContext';

const Home = () => {
    const {auth,handlerToLogOutUser}=useAllContext();
    

    const handlerToLogOut = ()=>{
        handlerToLogOutUser(auth.email)
    }

    return (
        <div>
            <h1>This is Home</h1>
           {
               auth?.email && <button onClick={handlerToLogOut}>Logout</button>
           }
          
        </div>
    );
};

export default Home;