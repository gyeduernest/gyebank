import BillsGrid from "../Components/BillsGrid";
import Navigation from "./Profile";


export default function Bills() {



  return (
    <div className="dark:bg-slate-900 dark:text-slate-50 bg-white text-black">
        <Navigation/>
        <div className=" lg:mt-1 lg:py-0 mt-32  ">
            <div className="lg:py-32">
            <BillsGrid/>
            </div>

        </div>        
    </div>
  )
}
