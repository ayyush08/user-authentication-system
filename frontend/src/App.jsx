import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SharedLayout from './components/SharedLayout'
import {BrowserRouter, Route, Routes} from 
'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUp from './pages/SignUp'
import EntryPage from './pages/EntryPage'
import Login from './pages/Login'
import Logout from './pages/Logout'
function App() {

  return (
    <>
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<SharedLayout/>}>
    <Route path="/" element={<LandingPage/>} />
    <Route path="signup" element={<SignUp/>} />
    <Route path="login" element={<Login/>} />
    </Route>
    <Route path='entry-page' element={<EntryPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
