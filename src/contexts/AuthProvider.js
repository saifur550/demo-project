import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
import useServices from "../hooks/useServices";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const services =useServices()
    const AllContexts = useFirebase();
 return(
    <AuthContext.Provider value={{AllContexts,services}}>
    {children}
</AuthContext.Provider>
 )
};

export default AuthProvider;