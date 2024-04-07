import React, { useContext } from 'react'
import { UserContext } from '../UserContext';

const Uhome = () => {
  const {name,number,email} = useContext(UserContext);
  return (
    <div>
      <div className='flex-col h-screen bg-thdark font-poppins'>

        <div className='w-full h-20 flex items-center bg-thmedlight'>
          <div className='w-1/2 text-thdark px-3 text-4xl font-medium'> Split💸</div>
          <div className='flex w-1/2 justify-evenly text-xl text-thdark font-normal'>
            <p><i class="fa-solid fa-user"></i> {name}</p>
            <p><i class="fa-solid fa-phone"></i> {number}</p>
            <p><i class="fa-solid fa-envelope"></i> {email}</p>
          </div>
        </div>

        <div>
          <h1>Your groups</h1>
          <button>Create group</button>
        </div>
    
        <div>
          <h1>Groups</h1>
        </div>
      </div>
    </div>
  )
}

export default Uhome
