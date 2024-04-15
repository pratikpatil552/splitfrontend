import { useEffect, useState } from 'react';
import React, { useContext } from 'react'
import { UserContext } from '../UserContext';
import axios from 'axios';
import Group from './Group';
import {useNavigate} from "react-router-dom"

const Uhome = () => {
  const {name,number,email} = useContext(UserContext);
  const [ownergroup, setownergroup] = useState([]);
  const [membergroup, setmembergroup] = useState([]);
  const navigate = useNavigate();


  useEffect(()=>{
    async function getownergroups(){
      const response = await axios.get(`/group/${number}/own`);
      setownergroup(response.data);
    }
    getownergroups();
  },[])

  useEffect(()=>{
    async function getmemebergroups(){
      const response = await axios.get(`/group/${number}/memb`);
      setmembergroup(response.data);
    }
    getmemebergroups();
  },[])

  const handleclick = ()=>{
    navigate("/create");
  }

  return (
    <div>
      <div className='flex-col w-full h-screen bg-thdark font-poppins relative'>

        <div className='w-full h-20 flex items-center bg-thmedlight'>
          <div className='w-1/2 text-thdark px-3 text-4xl font-medium'> Split💸</div>
          <div className='lg:visible invisible flex w-1/2 justify-evenly text-lg text-thdark font-normal'>
            <p><i class="fa-solid fa-user"></i> {name}</p>
            <p><i class="fa-solid fa-phone"></i> {number}</p>
            <p><i class="fa-solid fa-envelope"></i> {email}</p>
          </div>
        </div>
        <div className='items-center m-3'>
          <div className='flex flex-col items-center'>
          <h1 className='text-3xl text-thlight font-semibold my-3'><i class="fa-solid fa-user-group"></i> Your groups</h1>
          {
            ownergroup.map((item)=>(<Group obj = {item} isowner = {true}/>))
          }
          {
            !ownergroup.length && (<p className='text-thmedlight text-lg'>You have not created any group</p>)
          }
          </div>

          <div className='flex flex-col items-center'>
          <h1 className='text-3xl text-thlight font-semibold my-3'><i class="fa-solid fa-user-group"></i> Groups</h1>
          {
            membergroup.map((item)=>(<Group obj = {item} isowner = {false}/>))
          }
          {
            !membergroup.length && (<p className='text-thmedlight text-lg'>You are not included in any group</p>)
          }
          </div>
        </div>

        <button className='fixed right-5 bottom-5 py-3 px-5 bg-thmedlight rounded-full shadow-2xl shadow-cyan-500/50 z-40 font-medium'onClick={handleclick}><i class="fa-solid fa-plus"></i> Create group</button>
      </div>
    </div>
  )
}

export default Uhome
