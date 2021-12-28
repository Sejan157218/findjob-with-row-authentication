import { useContext } from "react";
import { DataContext } from "../Context/ContextProvider";



const useAllContext = () => {
    return useContext(DataContext)
};

export default useAllContext;