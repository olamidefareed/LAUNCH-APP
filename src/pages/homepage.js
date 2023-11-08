import React from 'react'
import {GiSlicedBread} from 'react-icons/gi'
import {TiWiFi} from 'react-icons/ti'
// import {BsGiftFill} from 'react-icons/bs'

function homepage() {
  return (
    <div className='bg-background m-auto font-sans	   w-[600px] rounded-t-2x'>
        <div className='bg-tor h-[100px] flex justify-between' >
            <p className='text-black text-4xl font-bold '>
                Home
            </p>
            <img src='Frame 2.png' alt='' className=''></img>
        </div>
        <div className='p-[30px]'>
          <div className='bg-white border-2 border-white rounded-lg  p-[30px]'>
            <div className='flex justify-between'>
              <p className='text-black text-3xl font-bold'>
                You got tripple launch!
              </p>
              <p>
                1 hr ago
              </p>
            </div>  
            <div className='bg-background mt-[20px] border-2 border-background rounded-lg p-[30px]' >
              <div className='flex'>
                <img src='Ellipse 1.png' alt=''></img>
                <p className='text-lg	'>Henny Min Jao</p>
              </div>
              <p className='mt-[10px]'>Hi, Gege. The work you do is very much <br></br> appreciated. Keep doing what you do <br></br> know how to do best!! Enjoy your day.</p>
            </div>
            <p> You recieved </p>
            <div className='flex justify-between'>
              <div className='text-yellow-500'><GiSlicedBread size={30}/></div>
              <p className='text-black'></p>
              <button className='border-2 text-center rounded-lg bg-green  text-[#CFFF92] w-[137px] p-[5px] justify-end'>Redeem!!</button>
            </div>
          </div> 
          
          <div className='border-2 rounded-lg border-background bg-white text-black mt-[10px] p-[20px]'>
            <div className='flex justify-between'>
              <p>You sent to:</p>
              <p>1hr ago</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-bold'>Henny Min Jao</p>
              <p  className='text-yellow-500'><GiSlicedBread size={30}/></p>
            </div>
          </div>
          <div className='border-2 rounded-lg border-background bg-white text-black mt-[10px] p-[20px]'>
            <div className='flex justify-between'>
              <p>You sent to:</p>
              <p>1hr ago</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-bold'>Henny Min Jao</p>
              <p  className='text-yellow-500'><GiSlicedBread size={30}/></p>
            </div>
          </div>
          <div className='border-2 rounded-lg border-background bg-white text-black mt-[10px] p-[20px]'>
            <div className='flex justify-between'>
              <p>You sent to:</p>
              <p>1hr ago</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-bold'>Henny Min Jao</p>
              <p  className='text-yellow-500'><GiSlicedBread size={30}/></p>
            </div>
          </div>
        </div>
        <div className='border-2 text-black flex'>
          <button className='bg-[#CFFF92] text-[#063B27] text-center w-[100px] h-[100px] justify-center items-center'>
            <TiWiFi size={30} className='mx-auto '/><br></br>
            <p>Timeline</p>
          </button>
        </div>
       </div>
  )
}

export default homepage