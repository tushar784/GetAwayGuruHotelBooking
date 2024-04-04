import { data } from "autoprefixer";
import { useContext, createContext, useState } from "react";
const AuthContext = createContext()

const AuthProvider = ({children})=>{
    const [isAuthenticate, setAuthenticate] = useState(null)
    const [user,setUser] = useState(null)
    const [token,setToken] = useState(null)

    const login = async (data)=>{
        setAuthenticate(true)
        setUser(data.user)
        setToken(data.token0)
    };
    const logout = () => {
        setAuthenticate(false);
        setUser(null);
        setToken(null); 
    };
    
}

export default AuthProvider;
export const useAuth = () =>{
    return useContext(AuthContext)
}