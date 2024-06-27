import React from 'react'
import { useNavigate } from 'react-router-dom'
import EntryPage from './EntryPage'
const SignUp = () => {

    const navigate = useNavigate()
    const handleSubmit = ()=>{
        console.log('signed in');
        navigate('/entry-page')
    }
    return (
    <div className='text-white flex justify-center items-center mt-16'>
        <div className='flex gap-5 flex-col border-white border-2 justify-center items-center md:h-[50vh] h-[70vh] w-[40vw] rounded-3xl '>  
            <h1 className='text-white text-4xl'>SignUp</h1>
            <div className="form flex flex-col transition-all">

            <input type='text' placeholder='Username' className='p-2 m-2 border-2 border-white rounded-lg text-black'/>
            <input type='email' placeholder='Email' className='p-2 m-2 border-2 border-white rounded-lg text-black'/>
            <input type='password' placeholder='Password' className='p-2 m-2 border-2 border-white rounded-lg text-black'/>
            </div>
            <button onClick={()=>handleSubmit()} className='p-2 m-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-all'>SignUp</button>
        </div>
    </div>
    )
}

export default SignUp
