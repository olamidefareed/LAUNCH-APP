import React from 'react'
import { Link } from 'react-router-dom'

function companysetsup() {
  return (
    <div className='bg-background m-auto font-serif	 h-[100vh] w-fit rounded-t-2x'>
        <div className='text-black text-5xl text-center border-2 rounded-t-lg shadow-2xl p-[20px]  bg-white '>
            SETUP ORGANIZATION
        </div>
        <div className="block mt-[20px]  p-[10px]">
            <form className="">
                <label/>Organization NAme: <br/>
                <input for = "name" type="text" className="w-full h-[50px] border-2 rounded-md" placeholder="Enter organization name"/><br/>
                <label/>Lanch Price: <br/>
                <input for = "name" type="text" className="w-full h-[50px] border-2 rounded-md" placeholder="Set launch price"/><br/>
                <footer className="p-[10px]">
                    <Link to = '/companycreatedalert'><button className="bg-green items-center text-center text-white border-2 rounded-2xl w-full h-[50px]">
                        Create Organization
                    </button></Link>
                </footer>
            </form>
        </div>
    </div>
  )
}

export default companysetsup