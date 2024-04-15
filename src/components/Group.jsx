import React, { useContext } from 'react'
import {Link} from "react-router-dom"


const Group = ({obj,isowner}) => {
  return (  
    <div className='md:w-1/2 flex-col my-3 bg-thmedlight w-full p-3 rounded-lg hover:shadow-2xl'>
        <div className='flex justify-between'>
            <h1 className='font-bold text-2xl text-thdark '>{obj.name}</h1> 
            <Link to={{ pathname: `/group/${obj._id}`}}>
              <button className='bg-thdark p-2 rounded-full px-3 text-thlight hover:bg-black transition-all ease-in'>
                <i className="fa-regular fa-eye"></i> view
              </button>
            </Link>
        </div>
      <p>Members : {obj.members?.length}</p>
      <p>Transactions : {obj.transactions?.length}</p>
      <p>Status: {obj.status}</p>
    </div>
  )
}

export default Group
