
import React, { createContext } from 'react';
import useForData from '../hook/useForData';



export const DataContext = createContext();

const ContextProvider = ({ children }) => {
    const allContext = useForData();
    return (
        <DataContext.Provider value={allContext}>
            {children}
        </DataContext.Provider>
    );
};

export default ContextProvider;