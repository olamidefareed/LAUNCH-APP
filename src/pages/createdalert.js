import React from 'react'
import {BsCheck2Circle} from 'react-icons/bs'

function createdalert() {
  return (
    <div className='bg-white h-screen text-center flex  justify-center items-center font-serif '>
        <div className='text-center border-2 rounded-2xl p-[20px]'>
            <BsCheck2Circle size='100px' color='green' className='mx-auto' />
            <p className='mt-[30px] text-center text-4xl '>ACCOUNT CREATED</p>
            <p>You can now recieve lauch</p>
            <button className=" mt-[30px]  items-center border-2 rounded-2xl border-green w-full h-[50px] text-center bg-white hover:bg-green hover:text-white ">
                    Go to home 
                </button>
        </div>
    </div>
  )
}

export default createdalert