import React from 'react'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {GrOrganization} from 'react-icons/gr'


function SignUp() {
  return (

    <div className='bg-background m-auto font-serif	 h-[100vh] w-fit rounded-t-2xl'>
      <div className='text-black text-5xl text-center border-2 rounded-t-lg shadow-2xl p-[20px]  bg-white '>
        LAUNCH APP
      </div>
      <div className='text-black text-3xl text-center mt-[100px]'>
        Sign Up As:
      </div>
      <div className='flex mt-[50px] gap-20 text-center'>
        <button className='bg-white border-2 rounded-2xl text-black text-center text-3xl w-[300px] h-[200px] p-[50px]'>STAFF
            <HiOutlineUserGroup className='w-[200px]'/>
        </button>
        <button className='bg-white border-2 rounded-2xl text-black text-center text-3xl w-[300px] h-[200px] p-[50px]'>ORGANIZATION
          <GrOrganization className='w-[200px]'/>
        </button>
      </div>
    </div>
    
  )
}

export default SignUp