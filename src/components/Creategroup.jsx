import React, { useContext,useState} from 'react'
import { UserContext } from '../UserContext';
import axios from 'axios';
import {useNavigate} from "react-router-dom"


const Creategroup = () => {
  const {name,number,email} = useContext(UserContext);
  const [groupname, setgroupname] = useState("");
  const navigate = useNavigate();

  async function handlesubmit(event){
    event.preventDefault();
    const obj ={
        name:groupname,
    }
    const {data} = await axios.post(`/group/${number}`,obj);
    if(data.status === "successfully created"){
        alert("created successfully");
    }
    else alert(data.status);
    navigate("/");
  }

  return (
    <div>
        <div className='bg-thdark h-screen flex items-center font-poppins'>
          <form className='w-3/4 lg:w-2/4 mx-auto mb-12 bg-thmeddark p-8 rounded-lg'>
          <h1 className='text-thlight text-4xl font-normal text-center m-4 font-semibold'><i class="fa-solid fa-user-group"></i> Create group</h1>
            <input 
                value={groupname}
                onChange={ev=>setgroupname(ev.target.value)}
                type="text" placeholder='Name' 
                className='block w-full rounded-full p-3 px-5 mb-3 bg-thlight' />
            <button type='submit' className='bg-thdark text-thlight block w-full rounded-full p-4 font-medium' onClick={handlesubmit}>
                Create group
            </button>
          </form>
        </div>
    </div>
  )
}

export default Creategroup
