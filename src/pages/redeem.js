import React from 'react';
import {AiOutlineClose} from "react-icons/ai";
import {GiSlicedBread} from "react-icons/gi";
import "./contain.css";
import {PiMedalLight} from "react-icons/pi";
import {BiMoneyWithdraw, BiRightArrowAlt} from "react-icons/bi";
import {MdOutlineReportGmailerrorred} from "react-icons/md";
import {IoMdCheckmarkCircleOutline} from "react-icons/io"

function Redeem() {
  return (
    <>
    <div className='container w-screen m-auto cursor-default'>
    <div className='fixed w-full h-full bg-transparent centric z-20 hide'>
    <div className='hidden justify-center profile flex-col bg-white px-5 py-5 rounded-xl w-96' >
      <span className='text-yellow-900 font-light'> <MdOutlineReportGmailerrorred size={80}/></span>
      <span className='font-bold p-2 text-2xl'>Unsuccessfull!</span>
      <span className='text-sm pb-3'>The country is not supported yet.</span>
      <button className='w-full h-11 rounded-3xl border border-emerald-900 font-semibold hover:bg-emerald-900 hover:text-white'>Go Back</button>
      </div>
      </div>

    <div className='hide bg-black/25 w-full h-full  fixed inset-x-0 z-10'></div> 
    <div className='overflow-hidden m-auto p-0 w-full container'>
      <header className='flex align-middle justify-between w-full p-5 shadow-rgba(0,0,0,0.5) shadow-md'>
        <h1 className='text-2xl font-bold'>Redeem Lunch</h1>
        <span className='p-2 bg-slate-200 rounded-full text-xl'><AiOutlineClose/></span>
      </header>
        <div className='p-5'>
            <div className='bg-emerald-900 p-5 rounded-md text-white'>
                <p>Lunch Recieved</p>
                <div className='pt-4 flex align-middle justify-between'>
                    <span className='text-yellow-500 flex text-3xl '>
                    <span className='p-1'><GiSlicedBread/></span>
                    <span className='p-1'><GiSlicedBread/></span>
                    <span className='p-1'><GiSlicedBread/></span>
                    </span>
                    <span className='flex text-xs rounded-2xl vick font-nomal text-emerald-200 mt-2'><PiMedalLight/> 3rd</span>
                </div>
        </div>
      </div>
      <div className='flex flex-col align-middle justify-center m-auto p-5'>
        <h3 className='text-center font-bold text-lg'>How would you like to redeem your free lunch??</h3>
        <div className='flex justify-center align-middle mt-5 text-3xl text-emerald-900'><span className='p-4 bg-gray-200 hover:bg-emerald-200 rounded-full cursor-pointer'><BiMoneyWithdraw/></span></div>
        <div className='py-8'>
        <div className='flex flex-col justify-center align-middle m-auto p-5 bg-gray-200 rounded-md'>
          <h5 className='text-md pb-2 font-bold'>Withdraw</h5>
          <form>
          <select className='w-full h-10 mb-4 px-2 text-sm rounded-md border border-gray-500'>
              <option value="6" selected hidden>Choose Bank</option>
              <option value="1">First Bank Plc.</option>
              <option value="2">GTBank plc.</option>
              <option value="3">Lotus Bank</option>
              <option value="4">Fidelity</option>
              <option value="5">UBA</option>
          </select>
          <div className='bg-gray-300 rounded-md'>
            <input type="number" placeholder="Enter account number" className='h-10 w-full px-2 rounded-md text-sm border border-gray-500' />
            <span className=' pt-2 pb-3 px-2 text-md font-semibold flex justify-between align-center text-emerald-900'><span className="text-black text-xs" >Adebola Adegoke</span> <IoMdCheckmarkCircleOutline/> </span>
          </div>
          <input type="number" placeholder="How much do you want to withdraw?" className='h-10 w-full px-2 rounded-md mt-4 text-sm border border-gray-500' />
          <div className='pt-2 text-xs font-semibold'>1 Lunch earned = 500</div>
          <select className='w-full h-10 mt-4 mb-5 px-2 text-sm rounded-md border border-gray-500'>
              <option value="6" selected hidden>Choose your country</option>
              <option value="1">Nigeria</option>
              <option value="2">USA</option>
              <option value="3">Canada</option>
              <option value="4">Russia</option>
              <option value="5">Cameroon</option>
          </select>
          <button className='float-right p-2 bg-emerald-900 text-3xl text-white rounded-full'><BiRightArrowAlt/></button>

          </form>
        </div>
        </div>
      </div>
      </div>
      
   </div>
    </>
  )
}

export default Redeem;
