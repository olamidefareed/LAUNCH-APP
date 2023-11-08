import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/signup'
import Staffsignup from './pages/staffsignup'
import Staffverify from './pages/staffverification'
import Staffbankdetails from './pages/staffbankdetails'
import Createdalet from './pages/createdalert'
import Companysignup from './pages/companysignup'
import Companysetsup from './pages/companysetsup'
import Companycreatedalert from './pages/companycreatedalert'
import Homepage from './pages/homepage'


function App() {
  return (
	<BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/staffsignup' element={<Staffsignup />} />
        <Route path='/staffverification' element={<Staffverify />} />
        <Route path='/staffbankdeatils' element={<Staffbankdetails />} />
        <Route path='/createdalet' element={<Createdalet />} />
        <Route path='/companysignup' element={<Companysignup />} />
        <Route path='/companysetsup' element={<Companysetsup />} />
        <Route path='/companycreatedalert' element={<Companycreatedalert />} />
        <Route path='/homepage' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App