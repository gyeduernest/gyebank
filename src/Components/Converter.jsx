import { useState } from "react"
import Yellowalert from "./Yellowalert"



export  function Converter() {
const [cedis, setCedis] = useState("GHC"); 
const [dollars, setDollars] = useState(0); 
const [euros, setEuros] = useState(0); 
const [pounds, setPounds] = useState(0); 


const usdRate = 12.32;
const eurRate = 13.25;
const poundsRate = 15.54;


 function handleDollars(e){
  const dollarValue = e.target.value;
    setDollars(dollarValue);
    setCedis(dollarValue * usdRate);
}

 function handleEuros(e){
  const eurosValue = e.target.value;
  setEuros(eurosValue);
  setCedis(eurosValue * eurRate);
 }

 function handlePounds(e){
  const poundsValue = e.target.value;
    setPounds(poundsValue);
    setCedis(poundsValue * poundsRate);
 }




  return (
    <div>
      <p className='text-xl mb-5 font-bold'>Currency Converter </p>
      <div className=" flex justify-center ">

<div role="tablist" className="tabs tabs-lifted">
<input type="radio" name="my_tabs_2" role="tab" className="tab " checked aria-label="U$D" />
<div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  <input type="number" placeholder="U$D" value={dollars} className="mb-5 input input-bordered input-info w-full max-w-xs" onChange={handleDollars} />
  <br  />
  <input type="number" placeholder="Gh₵" value={cedis} readOnly  className=" input input-bordered input-success w-full max-w-xs" />
  <div className='flex justify-center mt-5'>
  
  
  </div>
  <Yellowalert/>
  <p className="text-center mt-2 text-xs">The Alert above indicates the last time for which the exchange will be done
    at least it will be updated every week
  </p>


</div>

<input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="€UR"  />
<div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  <input type="number" placeholder="€UR" value={euros} onChange={handleEuros} className="mb-5 input input-bordered input-info w-full max-w-xs"  />
  <br  />
<input type="number" placeholder="Gh₵" value={cedis} readOnly className=" input input-bordered input-success w-full max-w-xs" />
  <div className='flex justify-center mt-5'>
  <div>
    
    <Yellowalert/>
  <p className="text-center mt-2 text-xs">The Alert above indicates the last time for which the exchange will be done
    at least it will be updated every week
  </p>
  </div>
  </div>
  

</div>

<input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="GBP£" />
<div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  <input type="number" placeholder="GBP£" value={pounds} onChange={handlePounds} className="mb-5 input input-bordered input-info w-full max-w-xs"  />
  <br  />
<input type="number" placeholder="Gh₵" value={cedis} readOnly className=" input input-bordered input-success w-full max-w-xs" />
  <div className='flex justify-center mt-5'>
  <div>
    <Yellowalert/>
  <p className="text-center mt-2 text-xs">The Alert above indicates the last time for which the exchange will be done
    at least it will be updated every week
  </p>
  </div>
  </div>
</div>
</div>


</div>

    </div>
  )
}
