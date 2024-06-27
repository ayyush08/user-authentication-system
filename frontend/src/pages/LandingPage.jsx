import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
    <Link to='/landing-page'>
    <div className='flex justify-center items-center h-[80vh]'>
        <h1 className='text-white text-4xl'>Welcome, Login/Signup to Continue.</h1>
    </div>
    </Link>
    )
}

export default LandingPage
