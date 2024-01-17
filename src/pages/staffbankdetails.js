import React from "react";
import { Link } from "react-router-dom";



function Staffsignup () {
    return(
        <div className='bg-background m-auto font-serif	 h-[100vh] w-fit rounded-t-2x'>
            <div className='text-black text-5xl text-center border-2 rounded-t-lg shadow-2xl p-[20px]  bg-white '>
                ADD BANK DETAILS
            </div>
            <div className="block mt-[50px]  p-[10px]">
                <form className="">
                    <label/>Bank Name: <br/>
                    <input for = "name" type="text" className="w-[500px] h-[50px] border-2 rounded-md" placeholder="select bank "/><br/>
                    <label/>Bank Number: <br/>
                    <input for = "name" type="number" className="w-[500px] h-[50px] border-2 rounded-md" placeholder="Enter bank name"/><br/>
                    <label/>Bank Code: <br/>
                    <input for = "name" type="number" className="w-[500px] h-[50px] border-2 rounded-md" placeholder="Enter bank name"/><br/>
                    <label/>Currency: <br/>
                    <input for = "name" type="text" className="w-[500px] h-[50px] border-2 rounded-md" placeholder="select currency"/><br/>
                    <label/>Country Code: <br/>
                    <input for = "name" type="number" className="w-[500px] h-[50px] border-2 rounded-md" placeholder="select code"/><br/>
                    <label/>Bank Region: <br/>
                    <input for = "name" type="text" className="w-[500px] h-[50px] border-2 rounded-md" placeholder="enter bank region"/>
                    <footer className="p-[10px]">
                        <Link to = '/createdalet'><button className="bg-green items-center text-center text-white border-2 rounded-2xl w-full h-[50px]">
                            Save Bank Details
                        </button></Link>
                    </footer>
                </form>
            </div>
        </div>
    )
}

export default Staffsignup