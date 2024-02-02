import { Allcards } from "../Charts/Allcards";
import Navigation from "./Profile";


export default function Bills() {



  return (
    <div className="dark:bg-slate-900 dark:text-slate-50 bg-slate-50">
        <Navigation/>
        <div className="lg:flex lg:gap-10 lg:justify-center   lg:mt-1 lg:py-0 mt-32 py-5 ">
            <Allcards/>

        </div>        
    </div>
  )
}
