import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/signup'
import Staffsignup from './pages/staffsignup'
import Staffverify from './pages/staffverification'
import Redeem from './pages/redeem'


function App() {
  return (
	<BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/staffsignup' element={<Staffsignup />} />
        <Route path='/staffverification' element={<Staffverify />} />
        <Route path='/redeem' element={<Redeem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App