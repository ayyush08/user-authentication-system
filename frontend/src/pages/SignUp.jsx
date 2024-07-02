import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import EntryPage from './EntryPage'
const SignUp = () => {

    const [user, setUser] = useState({username:'', email:'', password:''})
    useEffect(() => {
        
    }, [])
    
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('signed in');
        // handleChange()
        console.log(user);
        // navigate('/entry-page')
    }
    const handleChange = (e)=>{
        setUser({...user, [e.target.name]: e.target.value})
    }
    return (
    <div className='text-white flex justify-center items-center mt-16'>
        <div className='flex gap-5 flex-col border-white border-2 justify-center items-center md:h-[50vh] h-[70vh] w-[40vw] rounded-3xl '>  
            <h1 className='text-white text-4xl'>SignUp</h1>
            <div className="form flex flex-col transition-all">
            <form onSubmit={handleSubmit}>

            <input type='text' name='username' placeholder='Username' className='p-2 m-2 border-2 border-white rounded-lg text-black' value={user.username} onChange={handleChange}/>
            <input type='email' name='email' placeholder='Email' className='p-2 m-2 border-2 border-white rounded-lg text-black' value={user.email} onChange={handleChange}/>
            <input type='password' name='password' placeholder='Password' className='p-2 m-2 border-2 border-white rounded-lg text-black' value={user.password} onChange={handleChange}/>
            <button className='p-2 m-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-all ' type='submit'>SignUp</button>
            </form>
            </div>
        </div>
    </div>
    )
}

export default SignUp
