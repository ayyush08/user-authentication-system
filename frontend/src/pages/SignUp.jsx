import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate,Route } from 'react-router-dom'
import EntryPage from './EntryPage'
import axios from 'axios'
const SignUp = () => {

    const [user, setUser] = useState({ username: '', email: '', password: '' })
    const [error, setError] = useState('')
    useEffect(() => {

    }, [])

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v2/users/register', {
                username: user.username,
                email: user.email,
                password: user.password,
            });
            console.log(res.status);
            navigate('/entry-page', { state: { user: user.username } })
        } catch (err) {
            if(err.response.status==409){
                setError('User already exists')
            }
            else{
                setError("Something wrong happened")
            }
            alert(error);
        }

        console.log(user);
        // navigate('/entry-page')
        setUser({username: '', email: '', password: ''})
    }
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <div className='text-white flex justify-center items-center mt-16'>
            <div className='flex gap-5 flex-col border-white border-2 justify-center items-center md:h-[50vh] h-[70vh] w-[40vw] rounded-3xl '>
                <h1 className='text-white text-4xl'>SignUp</h1>
                <div className="form flex flex-col transition-all">
                    <form onSubmit={handleSubmit}>

                        <input type='text' name='username' placeholder='Username' className='p-2 m-2 border-2 border-white rounded-lg text-black' value={user.username} onChange={handleChange} />
                        <input type='email' name='email' placeholder='Email' className='p-2 m-2 border-2 border-white rounded-lg text-black' value={user.email} onChange={handleChange} />
                        <input type='password' name='password' placeholder='Password' className='p-2 m-2 border-2 border-white rounded-lg text-black' value={user.password} onChange={handleChange} />
                        <button className='p-2 m-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-all ' type='submit'>SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
