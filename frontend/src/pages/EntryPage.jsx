import React from 'react'
import { useLocation } from 'react-router-dom'

const EntryPage = () => {
  const location = useLocation()
  const user= location.state.user
  console.log(location.state.user);
  return (
      <div className='flex justify-center items-center h-[80vh]'>
        <h1 className='text-white text-4xl'>Hello,{user}</h1>
    </div>
  )
}

export default EntryPage
