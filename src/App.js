import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/signup'
import Staffsignup from './pages/staffsignup'
import Staffverify from './pages/staffverification'
import Redeem from './pages/redeem'
import Setting from './pages/settingPage'
import Profile from './pages/profile'


function App() {
  return (
	<BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/staffsignup' element={<Staffsignup />} />
        <Route path='/staffverification' element={<Staffverify />} />
        <Route path='/redeem' element={<Redeem />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App