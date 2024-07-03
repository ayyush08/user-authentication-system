import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
    <div className='text-white mx-auto'>
        <div className="flex">
            <ul className='flex mx-auto gap-10 text-lg font-mono'>
                <Link to='/' className='m-4 font-bold  rounded-full p-2 px-6 hover:bg-slate-300 hover:text-black cursor-pointer transition-all duration-300 border-[0.1mm]'>Home</Link>
                <Link to='/signup' className='m-4 font-bold rounded-full p-2 px-6 hover:bg-slate-300 hover:text-black cursor-pointer transition-all duration-300 border-[0.1mm]'>SignUp</Link>
                <Link to='/login' className='m-4 font-bold  rounded-full p-2 px-6 hover:bg-slate-300 hover:text-black cursor-pointer transition-all duration-300 border-[0.1mm]'>Login</Link>
                <Link to='/' className='m-4 font-bold rounded-full p-2 px-6 hover:bg-slate-300 hover:text-black cursor-pointer transition-all duration-300 border-[0.1mm]'>Logout</Link>
            </ul>
        </div>
    </div>
    )
}

export default Navbar
