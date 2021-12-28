import React, { useEffect } from 'react';
import useAllContext from '../../hook/useAllContext';

const Home = () => {
    const {auth,getEmail}=useAllContext();
    console.log(auth,'hhhh');
    useEffect(() => {
        getEmail()
    }, [])
    return (
        <div>
            <h1>This is Home</h1>
        </div>
    );
};

export default Home;