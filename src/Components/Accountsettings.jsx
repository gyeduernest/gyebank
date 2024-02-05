import  Userone  from "../assets/Userone.png"



export default function Accountsettings() {
  return (
    <div className=" py-5">
          <div className="lg:ml-40 px-5  lg:flex md:flex flex flex-shrink gap-2 justify-center items-center">
            <div>
              <div className="">
              <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />              
            </div></div>
            <div className="p-3 border rounded-full border-slate-500">
              <img src={Userone} alt="" className="" />
            </div>
          </div>

          
        <div className="flex mt-10 justify-center">
          <div>
          <div className="mb-5 lg:w-96 lg:ml-40 w-80 flex justify-between p-4 border rounded-md shadow-sm md:w-96">
              Edit Profile
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>

          </div>
          <div className="mb-5 lg:w-96 lg:ml-40 w-80 flex justify-between p-4 border rounded-md shadow-sm md:w-96">
              Notifications
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
              </svg>

          </div>
          <div className="mb-10 lg:w-96 lg:ml-40 w-80 flex justify-between p-4 border rounded-md shadow-sm md:w-96 md:mb-20">
              Security Settings
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>

          </div>
          </div>



        </div>


    </div>
  )
}
