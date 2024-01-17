import React from 'react'
import {BsCheck2Circle} from 'react-icons/bs'

function companycreatedalert() {
  return (
    <div className='bg-white h-screen text-center flex  justify-center items-center font-serif '>
        <div className='text-center border-2 rounded-2xl p-[20px]'>
            <BsCheck2Circle size='100px' color='green' className='mx-auto' />
            <p className='mt-[30px] text-center text-4xl '>ORGANIZATION CREATED</p>
            <p>Proceed to add members to your organization</p>
            <button className=" mt-[30px]  items-center border-2 rounded-2xl border-green w-full h-[50px] text-center bg-white hover:bg-green hover:text-white ">
                    Proceed 
                </button>
        </div>
    </div>
  )
}

export default companycreatedalert