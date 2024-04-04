import React, { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jsonwebtoken'
const AuthContext = createContext()

const storedToken = localStorage.getItem('token')
const decodeToken = jwt_decode(storedToken)
const expireTime = decodeToken.exp

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
    
    useEffect(()=>{
        if(isValidToken(storedToken)){
            setAuthenticate(true)
        }     
    },[])

    const expirationDate = new Date(expirationTime * 1000); // Convert seconds to milliseconds
    const currentTime = Date.now();

if (expirationDate < currentTime) {
  // Token is expired
  console.log('Token is expired!');
  // Handle expiration (e.g., logout user, prompt for re-login)
} else {
  // Token is valid, proceed with API request
  console.log('Token is valid');
  // Make your API call with the token
}
return (
    <AuthContext.Provider value={{ isAuthenticated, user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext,AuthProvider}

