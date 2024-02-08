
import Income from "./CurrentBalance";
import Expenses from "./Expenses";
import LastTransaction from "./LastTransaction";

export const Allcards = () => {



  return(


<>

<div className="lg:flex lg:gap-10 lg:justify-center lg:mt-1 lg:py-0 mt-32 py-5 ">
  
  <div className="lg:mt-32 md:flex lg:py-5 px-5 lg:ml-80  lg:gap-8  lg:grid lg:grid-cols-3 md:justify-center md:gap-5">
  <div className="mb-5">
    <Income/>
  </div>
  <div className="mb-5">
    <Expenses/>
  </div>
  <div className="mb-5">
    <LastTransaction/>
  </div>
 

  </div>
  

</div>
</>

);
}