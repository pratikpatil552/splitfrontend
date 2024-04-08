import React from 'react'
import {useLocation} from 'react-router-dom';

const Groupinfo= () => {
    const location = useLocation();
    const {obj,isowner} = location.state || {};
    console.log(obj,isowner);
  return (  
    <div>
        <h1>{obj.name}</h1>
    </div>
  )
}

export default Groupinfo;
