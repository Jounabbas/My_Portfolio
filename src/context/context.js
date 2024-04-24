import { createContext, useState } from "react";
export const  appcontext=createContext();

const Appprovider = ({ children }) => { 
    const[mode,setmode]=useState(true)
    const[color,setcolor]=useState("pink")
    const [burger,setburger]=useState(true)
    return (
        <appcontext.Provider value={{mode,setmode,color,setcolor,burger,setburger}}>
            {children}
        </appcontext.Provider>
    );
};
export default Appprovider;