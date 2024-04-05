import { createContext, useState,useEffect } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider ({children}){
    const [name, setname] = useState(null);
    const [number, setnumber] = useState(null);
    const [email, setemail] = useState(null)
    
    useEffect(()=>{
        async function infoFromCookie(){
            const response = await axios.get("/user/profile");
            console.log(response);
            if(response.data){
                setname(response.data.name);
                setnumber(response.data.number);
                setemail(response.data.email);
            }
            else{
                console.log("user is not logged in")
            }
        }
        infoFromCookie();
    },[])


    return (    
        <UserContext.Provider value={{name,number,email,setname,setnumber,setemail}}>
            {children}
        </UserContext.Provider>
    )
}