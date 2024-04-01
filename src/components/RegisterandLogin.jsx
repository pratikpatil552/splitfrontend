import axios from 'axios';
import { useState } from 'react';



const RegisterandLogin = () => {
    const [name, setname] = useState("");
    const [number, setnumber] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [otp, setotp] = useState("");
    const [isotp, setisotp] = useState(false);

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
        console.log(data.status);
    }


  return (
    <div>
      <div className='bg-blue-50 h-screen flex items-center'>
          <form className='w-64 mx-auto mb-12'>
            <input 
                value={name}
                onChange={ev=>setname(ev.target.value)}
                type="text" placeholder='Name' 
                className='block w-full rounded-lg p-2 mb-2 border ' />
            <input 
                value={number}
                onChange={ev=>setnumber(ev.target.value)}
                type="text" placeholder='Number' 
                className='block w-full rounded-lg p-2 mb-2 border ' />

            <input
                value={email}
                onChange={ev=>setemail(ev.target.value)}
                type="eamil" placeholder='Email' 
                className='block w-full rounded-lg p-2 mb-2 border' />
            <button type='submit' className='bg-blue-500 text-white block w-full rounded-lg p-2 mb-2' onClick={handleOtp}>
                Get OTP
            </button>
            {
                isotp&&(
                    <input
                        value={otp}
                        onChange={ev=>setotp(ev.target.value)}
                        type="text" placeholder='OTP' 
                        className='block w-full rounded-lg p-2 mb-2 border' />
                )
            }
            <input
                value={password}
                onChange={ev=>setpassword(ev.target.value)}
                type="password" placeholder='Password' 
                className='block w-full rounded-lg p-2 mb-2 border' />
            <button type='submit' className='bg-blue-500 text-white block w-full rounded-lg p-2' onClick={handlesubmit}>
                Register
            </button>
          </form>
        </div>
    </div>
  )
}

export default RegisterandLogin
