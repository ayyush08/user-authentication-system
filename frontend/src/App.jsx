import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SharedLayout from './components/SharedLayout'
import {BrowserRouter, Route, Routes} from 
'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUp from './pages/SignUp'
import EntryPage from './pages/EntryPage'
function App() {

  return (
    <>
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<SharedLayout/>}>
    <Route path="landing-page" element={<LandingPage/>} />
    <Route path="signup" element={<SignUp/>} />
    <Route path="login" element={<LandingPage/>} />
    <Route path="logout" element={<LandingPage/>} />
    <Route path='entry-page' element={<EntryPage/>} />
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
