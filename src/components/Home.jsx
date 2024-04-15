import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { UserContext } from '../UserContext';
import Uhome from './Uhome';

const Home = () => {
  const {name,number,email} = useContext(UserContext);
  if(!name) return (
    <div className='bg-thdark h-screen flex items-center font-poppins'> 
      <div className='mx-auto'>
        <h1 className='text-thlight text-9xl font-normal animate-pulse'>Split💸</h1>
        <div className='mx-auto my-10 flex-col items-center w-3/4'>
          <div className='text-center'>
            <Link to="/signin" className='block w-full bg-thmedlight p-3 my-4 rounded-full font-medium text-lg text-thdark hover:bg-thmeddark hover:text-thlight transition-all ease-in'>sign in </Link>
            <Link to="/signup" className='block w-full bg-thmedlight p-3 my-4 rounded-full font-medium text-lg text-thdark hover:bg-thmeddark hover:text-thlight transition-all ease-in'>Sign up </Link>
          </div>
        </div>
      </div>
    </div>
  )
  else return(
    <Uhome/>
  )
}

export default Home


// 27374D
// 526D82
// 9DB2BF
// DDE6ED