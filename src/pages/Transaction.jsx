import { Allcards } from "../Charts/Allcards";
import { TransactionGrid } from "../Components/TransactionGrid";

import Navigation from "./Profile";


export default function Transaction() {
  
  return (
    
              <div className="dark:bg-slate-900 dark:text-slate-50 bg-slate-50">
                <Navigation/>
                <Allcards/>
                <div className="  lg:max-w-screen-2xl flex justify-center py-5 mb-40   mx-auto">
                  <div className="lg:ml-[500px]">
                  <TransactionGrid/>

                  </div>
                
                
                </div>
                
     
              </div>


  )
}
