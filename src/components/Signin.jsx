import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';
import {useNavigate} from "react-router-dom"



const Signin = () => {
    const [number, setnumber] = useState("");
    const [password, setpassword] = useState("");
    const {setname:setsname,setnumber:setsnumber,setemail:setsemail} = useContext(UserContext)
    const navigate = useNavigate();
    
    async function handlesubmit(event){
      event.preventDefault();
      const obj ={
        number,
        password,
      }
      const {data} = await axios.post("/user/signin",obj);
      if(data.status === "logged in successfully"){
        setsname(data.name);
        setsnumber(data.number);
        setsemail(data.email);
        navigate("/");
      }
      else alert(data.status);
    }

  return (
    <div>
      <div className='bg-thdark h-screen flex items-center font-poppins'>
          <form className='w-3/4 lg:w-1/4 mx-auto mb-12 bg-thmeddark p-8 rounded-lg'>
          <h1 className='text-thlight text-4xl font-normal text-center m-4 font-semibold'>Split💸</h1>
            <input 
                value={number}
                onChange={ev=>setnumber(ev.target.value)}
                type="text" placeholder='Number' 
                className='block w-full rounded-full p-3 px-5 mb-3 bg-thlight' />
            <input
                value={password}
                onChange={ev=>setpassword(ev.target.value)}
                type="password" placeholder='Password' 
                className='block w-full rounded-full p-3 px-5 mb-3 bg-thlight ' />
            <button type='submit' className='bg-thdark text-thlight block w-full rounded-full p-4 font-medium' onClick={handlesubmit}>
                Sign in
            </button>
          </form>
        </div>
    </div>
  )
}

export default Signin
