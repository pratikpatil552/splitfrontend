import React,{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserContext';
import axios from 'axios';

const Groupinfo= () => {
  const {name,number,email} = useContext(UserContext);
  const [groupdata, setgroupdata] = useState(null);
  const {id} = useParams();
  const [newnumber, setnewnumber] = useState('');
  const [num1, setnum1] = useState('');
  const [num2, setnum2] = useState('');
  const [cost, setcost] = useState('');

  useEffect(()=>{
    async function getgroupdata(){
      const response = await axios.get(`/group/${id}`);
      setgroupdata(response.data);
    }
    getgroupdata();
  },[])

  async function handlesubmit (event) {
    event.preventDefault();
    console.log("this function has been called");
    const obj ={
      number:newnumber,
    }
    const {data} = await axios.post(`/group/${number}/${id}/pep`,obj);
    if(data.status === "success"){
      alert("added successfully");
      setnewnumber('');
      window.location.reload()
      return;
    }
    alert(data.status);
  }

  async function handlesubmit1 (event) {
    event.preventDefault();
    console.log("this function has been called");
    const obj ={
      to:num1,
      from:num2,
      amount:parseInt(cost),
    }
    const {data} = await axios.post(`/group/${number}/${id}/tran`,obj);
    if(data.status === "success"){
      alert("added successfully");
      setnum1('');
      setnum2('');
      setcost('');
      window.location.reload()
      return;
    }
    alert(data.status);
  }

  
  return (  
    <div className='m-4'>
      {
        groupdata && (
          <div>
            <h1 className='text-6xl font-bold text-thlight my-5'>{groupdata.name}</h1>
            <div>
                {
                  ((number===groupdata.owner.number)) && (
                    <form className='flex items-center'>
                      <input
                        value={newnumber}  
                        onChange={ev=>setnewnumber(ev.target.value)}
                        type="text" placeholder='Number' 
                        className='block w-50 rounded-full p-3 px-5 mb-3 mr-3 bg-thlight'
                      />
                      <button type='submit' className='block w-50 rounded-full p-3 px-5 mb-3 mr-3 bg-thlight font-medium' onClick={handlesubmit}>
                      <i class="fa-solid fa-user-plus"></i> Add member
                      </button>
                    </form>
                  )
                }
              </div>
            <div className='bg-thlight w-full p-3 rounded-lg my-3'>
              <p className='my-3 font-semibold text-2xl'>Members</p>
              <div className='flex gap-3'>
                {
                  groupdata.members.map((item)=>(<p className='bg-thdark px-3 py-2 rounded-full text-lg font-medium text-thlight'><i class="fa-solid fa-user"></i> {item.number}</p>))
                }
              </div>
            </div>
            <div>
              <form className='flex items-center mt-5'>
                      <input
                        value={num1}  
                        onChange={ev=>setnum1(ev.target.value)}
                        type="text" placeholder='To' 
                        className='block w-50 rounded-full p-3 px-5 mb-3 mr-3 bg-thlight'
                      />
                      <input
                        value={num2}  
                        onChange={ev=>setnum2(ev.target.value)}
                        type="text" placeholder='from' 
                        className='block w-50 rounded-full p-3 px-5 mb-3 mr-3 bg-thlight'
                      />
                      <input
                        value={cost}  
                        onChange={ev=>setcost(ev.target.value)}
                        type="text" placeholder='cost' 
                        className='block w-50 rounded-full p-3 px-5 mb-3 mr-3 bg-thlight'
                      />
                      <button type='submit' className='block w-50 rounded-full p-3 px-5 mb-3 mr-3 bg-thlight font-medium' onClick={handlesubmit1}>
                      <i class="fa-solid fa-circle-plus"></i> Add transaction
                      </button>
                    </form>
            </div>
            <div className='bg-thlight w-full p-3 rounded-lg'>
              <p className='my-3 font-semibold text-2xl'>Transactions</p>
              <div className='flex-col gap-3'>
                {
                  groupdata.transactions.map((item)=>
                  (<div className='flex p-1 justify-between'>
                    <div className='flex'>
                      <p className='bg-red-400 py-2 px-3 rounded-full  text-red-800 font-medium'><i class="fa-solid fa-user"></i> {item.to.number}</p>
                      <p className='bg-green-400 py-2 px-3 rounded-full mx-2 text-green-800 font-medium'><i class="fa-solid fa-user"></i> {item.from.number}</p>
                      <p className='py-2 px-3 bg-blue-300 text-blue-800 font-medium rounded-full'>${item.amount}</p>
                    </div>
                    <p className='py-2 px-3 lg:visible invisible bg-orange-300 text-orange-900 rounded-full font-medium'>added by {item.addedby.number}</p>
                  </div>))
                }
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Groupinfo;
