import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EntryPage from './EntryPage'
import axios from 'axios'
const Login = () => {
    const [user,setUser] = useState({email:'',password:''})
    const [error,setError] = useState('');
    const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // console.log(user);
        
        try {
            const res = await axios.post('/api/v2/users/login',{
                email:user.email,
                password:user.password
            })
            console.log(res.data.message);
            const name = res.data.data.user.username
            navigate('/entry-page',{state:{user:name}})
        } catch (error) {
            if(error.response.status==400) alert('Please enter all details');
            if(error.response.status==401) alert('Invalid password');
            if(error.response.status==402) alert('User not found');
            console.log(error.response.status);
        setUser({email:'',password:''})
    }}
    const handleChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    return (
        <div className='text-white flex justify-center items-center mt-16'>
            <div className='flex gap-5 flex-col border-white border-2 justify-center items-center md:h-[50vh] h-[70vh] w-[40vw] rounded-3xl '>
                <h1 className='text-white text-4xl'>Log In</h1>
                <div className="form flex flex-col transition-all">
                    <form onSubmit={handleSubmit} className='flex flex-col'>
                        <input type='email' name='email' placeholder='Email' className='p-2 m-2 border-2 border-white rounded-lg text-black' value={user.email} onChange={handleChange} />
                        <input type='password' name='password' placeholder='Password' className='p-2 m-2 border-2 border-white rounded-lg text-black' value={user.password} onChange={handleChange} />
                        <div className='mx-auto'>

                        <button className='p-2 m-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-all ' type='submit'>Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
