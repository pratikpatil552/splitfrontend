import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';
import {useNavigate} from "react-router-dom"

const Signup = () => {
    const [name, setname] = useState("");
    const [number, setnumber] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [otp, setotp] = useState("");
    const [isotp, setisotp] = useState(false);
    const {setname:setsname,setnumber:setsnumber,setemail:setsemail} = useContext(UserContext)
    const navigate = useNavigate();

    async function handleOtp (event){
        event.preventDefault();
        if(isotp===false){
            setisotp(true);
        }
        const obj = {
            email,
        }
        const {data} = await axios.post("/user/signup/otp",obj);
        alert(data.status);
    }

    async function handlesubmit (event){
        event.preventDefault();

        const obj = {
            name,
            number,
            email,
            otp,
            password,
        }
        const {data} = await axios.post("/user/signup",obj);
        alert(data.status);
        if(data.status === "successfull registeration"){
            setsname(name);
            setsemail(email);
            setsnumber(number);
            navigate("/");
        }
    }


  return (
    <div className="bg-thdark h-screen flex items-center font-poppins">
      <form className="w-3/4 lg:w-1/4 mx-auto mb-12 bg-thmeddark p-8 rounded-lg transition-all ease-in duration-300">
        <h1 className="text-thlight text-4xl font-normal text-center m-4 font-semibold">Split💸</h1>
        <input 
            value={name}
            onChange={ev=>setname(ev.target.value)}
            type="text" placeholder='Name' 
            className="block w-full rounded-full p-3 px-5 mb-3 bg-thlight"
        />
        <input 
            value={number}
            onChange={ev=>setnumber(ev.target.value)}
            type="text" placeholder='Number' 
            className="block w-full rounded-full p-3 px-5 mb-3 bg-thlight"
        />

        <input
            value={email}
            onChange={ev=>setemail(ev.target.value)}
            type="email" placeholder='Email' 
            className="block w-full rounded-full p-3 px-5 mb-3 bg-thlight"
        />
        <button type='button' className="bg-thdark text-thlight block w-full rounded-full p-4 mb-3 font-medium" onClick={handleOtp}>
            Get OTP
        </button>
        {isotp && (
            <input
                value={otp}
                onChange={ev=>setotp(ev.target.value)}
                type="text" placeholder='OTP' 
                className="block w-full rounded-full p-3 px-5 mb-3 bg-thlight"
            />
        )}
        <input
            value={password}
            onChange={ev=>setpassword(ev.target.value)}
            type="password" placeholder='Password' 
            className="block w-full rounded-full p-3 px-5 mb-3 bg-thlight"
        />
        <button type='button' className="bg-thdark text-thlight block w-full rounded-full p-4 font-medium" onClick={handlesubmit}>
            Sign up
        </button>
      </form>
    </div>
  )
}

export default Signup;
