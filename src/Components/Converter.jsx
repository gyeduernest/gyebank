import { useState } from "react"
import Yellowalert from "./Yellowalert"



export  function Converter() {
const [cedis, setCedis] = useState("GHC"); 
const [dollars, setDollars] = useState("U$D"); 
const [euros, setEuros] = useState("EUR"); 
const [pounds, setPounds] = useState("GBP"); 


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
    <div className="bg-white text-black mb-10">
      <p className='text-xl mb-5 font-bold px-5 text-black'>Currency Converter </p>
      <p className="text-xs px-5 text-center mb-5 text-black">Select the Currency Pair you want to convert</p>
      <div className=" flex justify-center bg-white">

<div role="tablist" className="tabs tabs-lifted  text-black">
<input type="radio" name="my_tabs_2" role="tab"  className="bg-white tab "  aria-label="U$D" />
<div role="tabpanel" className="tab-content bg-white text-black  rounded-box p-6">
  <input type="number" placeholder="U$D" value={dollars} className="mb-5 input input-bordered input-info w-full max-w-xs" onChange={handleDollars} />
  <br  />
  <input type="number" placeholder="Gh₵" value={cedis} readOnly  className=" input input-bordered input-success w-full max-w-xs" />
  <div className='flex justify-center mt-5'>
  
  
  </div>
  <Yellowalert/>
  


</div>

<input type="radio" name="my_tabs_2" role="tab"  className="tab" aria-label="€UR"  />
<div role="tabpanel" className="tab-content bg-white text-black  rounded-box p-6">
  <input type="number" placeholder="€UR" value={euros} onChange={handleEuros} className="mb-5 input input-bordered input-info w-full max-w-xs"  />
  <br  />
<input checked type="number" placeholder="Gh₵" value={cedis} readOnly className=" input input-bordered input-success w-full max-w-xs" />
  <div className='flex justify-center mt-5'>
  <div>
    
    <Yellowalert/>

  </div>
  </div>
  

</div>

<input type="radio" name="my_tabs_2" role="tab"  className="tab" aria-label="GBP£" />
<div role="tabpanel" className="tab-content bg-white text-black rounded-box p-6">
  <input type="number" placeholder="GBP£" value={pounds} onChange={handlePounds} className="mb-5 input input-bordered input-info w-full max-w-xs"  />
  <br  />
<input type="number" placeholder="Gh₵" value={cedis} readOnly className=" input input-bordered input-success w-full max-w-xs" />
  <div className='flex justify-center mt-10'>
  <div className="">
    <Yellowalert/>
  </div>
  </div>
</div>
</div>


</div>

    </div>
  )
}
