import React from 'react';
import Profile from "../IMAGES/Profile.png";
import {GiSlicedBread} from "react-icons/gi";
import {IoMdLogOut} from "react-icons/io";
import {MdLanguage} from "react-icons/md";
import {FaHandsHelping, FaQuestionCircle} from "react-icons/fa";
import {SiQuicklook} from "react-icons/si";
import "./contain.css"

function SettingPage() {
  return (
    <>
      <div className='bg-gray-100 h-auto cursor-default'>
        <header className='w-full bg-emerald-200 h-40 p-8'>
            <span className='font-bold text-4xl w-11/12 text-emerald-900'>Setting</span>
        </header>
        <div>
          <div className='h-auto m-auto bg-emerald-900 text-white p-5 rounded-xl relative -inset-y-10 w-11/12'>
           <div className='flex justify-between profile border-b border-b-white pb-4'>
            <div className='flex justify-center profile'>
              <img src={Profile} alt='Profile'className='w-12 border p-1 rounded-full border-4'/>
              <span className='text-lg font-bold pl-3 '>Adebola Adegoke</span>
            </div>
            <button className='py-2 px-4 border border-white/50  rounded-full font-semibold text-xs'>Edit</button>
           </div>

           <div className='pt-5'>
              <div className='border baggy p-4 rounded-lg flex justify-between profile'>
                  <div>
                    <span className='font-light'>Lunch Balance</span>
                    <span className='flex text-2xl font-bold profile pt-3'><span className='pr-2 text-yellow-400 text-3xl'><GiSlicedBread/></span> 10</span>
                  </div>
                  <button className='py-2 px-6 bg-emerald-200 text-emerald-900 rounded-full font-semibold'>Redeem</button>
              </div>
           </div>
          </div>
        </div>
        <div className='w-11/12 m-auto pb-4'>
           <div className='bg-white overflow-hidden rounded-2xl'>
            <div className='p-4 flex justify-between align-middle hover:bg-gray-100/75'><span className='flex profile'><SiQuicklook/> <span className='pl-1'>Appearance</span></span>&#62;</div>
            <div className='p-4 flex justify-between align-middle hover:bg-gray-100/75'><span className='flex profile'><MdLanguage/> <span className='pl-1'>Language & Region</span></span>&#62;</div>
           </div>
           <div className='bg-white rounded-2xl mt-4'>
            <div className='p-4 flex justify-between align-middle hover:bg-gray-100/75'><span className='flex profile'><FaHandsHelping/> <span className='pl-1'>Help and support</span></span>&#62;</div>
            <div className='p-4 flex justify-between align-middle hover:bg-gray-100/75'><span className='flex profile'><FaQuestionCircle/> <span className='pl-1'>About</span></span>&#62;</div>
           </div>
           <div className='bg-white  rounded-2xl mt-4'>
            <div className='p-4 flex profile justify-between text-red-800 hover:bg-gray-100/75'> <span className='pl-1'>Logout</span> <IoMdLogOut/></div>
           </div>
        </div>
      </div>
    </>
  )
}

export default SettingPage;
