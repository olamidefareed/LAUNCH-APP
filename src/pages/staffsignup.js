import React from "react";
import {BsCamera} from 'react-icons/bs'




function Staffsignup () {
    return(
        <div className='bg-background m-auto font-serif	 h-[100vh] w-fit rounded-t-2x'>
            <div className='text-black text-5xl text-center border-2 rounded-t-lg shadow-2xl p-[20px]  bg-white '>
                SIGN UP
            </div>
            <button className="flex flex-col justify-center items-center text-center mt-[50px] border-2 rounded-full bg-white h-[100px] w-fit mx-auto">
                <BsCamera/>
                <p>Add Image</p>
            </button>
            <div className="block mt-[50px]  p-[10px]">
                <form className="">
                    <label/>Firstname: <br/>
                    <input for = "name" type="text" className="w-[500px] h-[50px] border-2 rounded-md" placeholder="Enter first name"/><br/>
                    <label/>Lastname: <br/>
                    <input for = "name" type="text" className="w-[500px] h-[50px] border-2 rounded-md" placeholder="Enter last name"/><br/>
                    <label/>Email: <br/>
                    <input for = "name" type="email" className="w-[500px] h-[50px] border-2 rounded-md" placeholder="Enter email name"/><br/>
                    <label/>Phone Number: <br/>
                    <input for = "name" type="number" className="w-[500px] h-[50px] border-2 rounded-md" placeholder="Enter phone number"/><br/>
                    <label/>Set Password: <br/>
                    <input for = "name" type="password" className="w-[500px] h-[50px] border-2 rounded-md" placeholder="set password"/>
                </form>
            </div>
        </div>
    )
}

export default Staffsignup