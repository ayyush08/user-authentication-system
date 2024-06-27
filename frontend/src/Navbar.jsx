import React from 'react'

const Navbar = () => {
    return (
    <div className='text-white mx-auto'>
        <div className="flex">
            <ul className='flex mx-auto gap-10 text-lg font-mono'>
                <li className='m-4 font-bold  rounded-full p-2 px-6 hover:bg-slate-300 hover:text-black cursor-pointer transition-all duration-300 border-[0.1mm]'>Home</li>
                <li className='m-4 font-bold rounded-full p-2 px-6 hover:bg-slate-300 hover:text-black cursor-pointer transition-all duration-300 border-[0.1mm]'>SignUp</li>
                <li className='m-4 font-bold  rounded-full p-2 px-6 hover:bg-slate-300 hover:text-black cursor-pointer transition-all duration-300 border-[0.1mm]'>Login</li>
                <li className='m-4 font-bold rounded-full p-2 px-6 hover:bg-slate-300 hover:text-black cursor-pointer transition-all duration-300 border-[0.1mm]'>Logout</li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar
