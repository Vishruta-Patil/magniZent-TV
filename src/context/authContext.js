import { createContext, useContext, useReducer } from "react";
import {authReducer} from "../reducer/auth/authReducer";

const AuthContext = createContext()
const useAuth = () => useContext(AuthContext)

const initialValue = {
    loginStatus: localStorage.getItem("token") !== null
}

const AuthProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(authReducer, initialValue)
    
    return (
        <AuthContext.Provider value={{authState, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export {useAuth, AuthProvider}