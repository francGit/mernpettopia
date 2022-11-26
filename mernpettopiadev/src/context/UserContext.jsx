import { useState, createContext, useEffect } from "react";
import jwt_decode from "jwt-decode";
export const AuthContext = createContext();


const UserContext = (props) => {
    const {children} = props;

    const [user, setUser] = useState({
        user:null,
        isLoading: false,
    });

    useEffect(()=>{
        const userAuth = () =>{
            const accessToken = localStorage.getItem("accesToken");
            if(!accessToken || accessToken === null){
                return;
            }
            const seconds = 60;
            const metaToken = jwt_decode (accessToken);
            const {exp} = metaToken;
            const now = (Date.now() + seconds) / 1000; ///convierte la fecha actual a milisegundos
            const activeToken = now > exp ? null : metaToken;

            if(!activeToken){
                localStorage.removeItem('accesToken')
                setUser({
                    user: null,
                    isLoading:false
                })
            }else{
                setUser({
                    user:activeToken,
                    isLoading:true
                })
            }
        }
        userAuth()

    },[]);

    return(
        <AuthContext.Provider  value={user}>
            {children}
        </AuthContext.Provider>
    );

};


export default UserContext;