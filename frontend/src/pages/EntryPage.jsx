import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
const EntryPage = () => {
  const navigate = useNavigate()
  const handleClick = async ()=>{
    try {
      await axios.post('/api/v2/users/logout')
      
    } catch (error) {
      
      console.log(error);
    }
    navigate('/');
    }
  const location = useLocation()
  const user= location.state.user
  console.log(location.state.user);
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      
      <div className='flex justify-center items-center h-[80vh]'>
        <h1 className='text-white text-4xl font-mono'>Hello, {user}</h1>
    </div>
        <button className='p-5 m-2 border-2 border-white rounded-lg hover:bg-white hover:text-black text-white text-2xl transition-all' onClick={()=>handleClick()}>Log Out</button>
    </div>
  )
}

export default EntryPage
