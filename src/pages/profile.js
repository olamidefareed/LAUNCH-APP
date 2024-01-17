import React from 'react'
import {BiLeftArrowAlt} from "react-icons/bi";
import {IoMdCamera} from "react-icons/io";
import Profilepic from "../IMAGES/Profile.png";
import "./contain.css";

function Profile() {
  return (
    <>
      <div className='cursor-default'>
        <header className='flex justify-between align-top w-full p-5 h-36 bg-gray-200'>
            <button className='text-lg h-fit p-2 rounded-full hover:bg-black/25 '><BiLeftArrowAlt/></button>
            <span className='font-bold text-2xl text-emerald-900'>My profile</span>
            <button className='py-2 px-5 border border-black rounded-full font-semibold text-sm h-fit hover:bg-black/25'>Save</button>        
        </header>
        <div className='flex justify-center pb-6 -mt-12'>
            <div className='bg-green w-fit rounded-full relative'>
              <img  src={Profilepic} alt='profile' className="w-32 h-32"/>
              <span className='bg-black/25 w-full h-full absolute inset-0 rounded-full'></span>
              <div className='absolute bottom-0 right-0 w-9 h-9 rounded-full bg-gray-400 overflow-hidden flex justify-center profile text-xl border-4 border-white'>
                <input type='file' className='absolute text-lg opacity-0 cursor-pointer' />
                <IoMdCamera/>
              </div>
            </div>
        </div>
        <div className='w-11/12 m-auto'>
        <div className='flex flex-col justify-center align-middle m-auto p-5 bg-gray-200 rounded-md mt-4'>
        <form>
          <div className='rounded-md'>
            <label className='font-semibold text-sm' for="Full Name">Full Name</label>
            <input type="text" placeholder="Full Name" className='h-10 w-full px-2 rounded-md text-sm border mb-3 mt-1 border-gray-500' />
          </div>
          <div>
          <label className='font-semibold text-sm' for="Email address">Email Address</label>
          <input type="email" placeholder="Email address" className='h-10 w-full px-2 rounded-md text-sm border mt-1 mb-3 border-gray-500' />
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold text-sm mb-1' for="password">Password</label>
            <button className='py-2 px-5 border border-black rounded-full font-semibold text-xs h-fit w-fit hover:bg-emerald-900 hover:text-white'>Change password</button>        
          </div>
          <div>
          <select className='w-full h-10 mt-4 mb-5 px-2 text-sm rounded-md border border-gray-500'>
              <option value="6" selected hidden>Country</option>
              <option value="1">Nigeria</option>
              <option value="2">USA</option>
              <option value="3">Canada</option>
              <option value="4">Russia</option>
              <option value="5">Cameroon</option>
          </select>
          </div>
          </form>
          </div>
        </div>

        <div className='fixed -bottom-4 w-full bg-white p-8 rounded-2xl py-16 z-20 hide'>
        <div>
          <label className='font-semibold text-sm' for="Email address">Current Password</label>
          <input type="password" placeholder="Email address" className='h-10 w-full px-2 rounded-md text-sm border mt-1 mb-3 border-gray-500' />
          </div>
          <div>
          <label className='font-semibold text-sm' for="Email address">New Password</label>
          <input type="password" placeholder="Email address" className='h-10 w-full px-2 rounded-md text-sm border mt-1 mb-3 border-gray-500' />
          </div>
          <div>
          <label className='font-semibold text-sm' for="Email address">Retype Password</label>
          <input type="password" placeholder="Email address" className='h-10 w-full px-2 rounded-md text-sm border mt-1 mb-3 border-gray-500' />
          </div>
          <button className='w-full h-11 rounded-3xl border border-emerald-900 font-semibold hover:bg-emerald-900 hover:text-white'>Change Password</button>
        </div>
      </div>

      <div className='hide bg-black/25 w-full h-full  absolute top-0 z-10'></div> 
    </>
  )
}

export default Profile
