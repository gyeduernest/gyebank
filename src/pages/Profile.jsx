import Alert from "../assets/Alert.svg"
import Messages from "../assets/Message.svg"
import {  TextInput } from "@tremor/react";
import Userone from "../assets/Userone.png"
import { SearchIcon } from "@heroicons/react/solid";
import Swap from "../Components/Switch";




function Navigation() {

  




  return (
   <>
   <div className="lg:flex md:flex sm:flex flex ">
      {/* Side Navigation */}

    <div className=" z-50 lg:w-72 md:w-56 w-10 bg-white   border   lg:min-h-[710px] fixed lg:py-10 px-5 md:py-12 hidden  lg:block">
        <div className=" mb-20 px-10">
          <h4 className="hidden sm:hidden md:block lg:block">
            Username Dashboard
          </h4>
        </div>

        <div>
        <ul className=" lg:w-64  hidden md:w-40 md:block sm:hidden lg:block">
            <li className="menu bg-blue-600 text-slate-50 font-bold hover:text-slate-800 hover:bg-slate-300 mb-5  rounded-box">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Dashboard
              </a>
            </li>
            <li className="menu bg-slate-200 text-slate-900 font-bold hover:text-slate-800 hover:bg-slate-300 mb-5  rounded-box">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Transactions
              </a>
            </li>
            
        </ul>

        
        <div>
          <Swap/>
        </div>


           
          
        </div>

    </div>


    {/* Top navigation */}

    <div className="py-10 z-40 shadow-sm 	md:w-full float-end sm:w-full sm:px-10  w-full  md:px-20 bg-slate-50  fixed  ">
      <div className="float-end px-3">
       
        <div className="flex items-center  gap-10 md:gap-4 backdrop-blur-3xl	">
          <div className="flex items-center">
          <TextInput icon={SearchIcon} placeholder="Search..."  className="w-40 md:w-80 sm:w-96 lg:w-96"/>
          </div>
        <div className="flex lg:gap-8 gap-5 md:gap-5">
            <img src={Alert} alt="" />
            <img src={Messages} alt="" />
            <img src={Userone} alt="" />
        </div>
        </div>
      </div>
    </div>



   </div>
   
   </>
  )
}

export default Navigation