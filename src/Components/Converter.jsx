import Yellowalert from "./Yellowalert"



export  function Converter() {
  return (
    <div>
      <p className='text-xl mb-5 font-bold'>Currency Converter </p>
      <div className=" flex justify-center ">

<div role="tablist" className="tabs tabs-lifted">
<input type="radio" name="my_tabs_2" role="tab" className="tab " checked aria-label="Gh₵-U$D" />
<div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  <input type="text" placeholder="Gh₵" className="mb-5 input input-bordered input-success w-full max-w-xs" />
  <br  />
  <input type="text" placeholder="U$D" className="input input-bordered input-info w-full max-w-xs"  />
  <div className='flex justify-center mt-5'>
  <div>
    <p className='flex justify-center'>Answer</p>
  </div>
  
  </div>
  <Yellowalert/>
  <p className="text-center mt-2 text-xs">The Alert above indicates the last time for which the exchange will be done
    at least it will be updated every week
  </p>


</div>

<input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Gh₵-€UR"  />
<div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
<input type="text" placeholder="Gh₵" className="mb-5 input input-bordered input-success w-full max-w-xs" />
  <br  />
  <input type="text" placeholder="€UR" className="input input-bordered input-info w-full max-w-xs"  />
  <div className='flex justify-center mt-5'>
  <div>
    <p className='flex justify-center'>Answer</p>
    <Yellowalert/>
  <p className="text-center mt-2 text-xs">The Alert above indicates the last time for which the exchange will be done
    at least it will be updated every week
  </p>
  </div>
  </div>
  

</div>

<input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Ghc-GBP£" />
<div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
<input type="text" placeholder="Gh₵" className="mb-5 input input-bordered input-success w-full max-w-xs" />
  <br  />
  <input type="text" placeholder="GBP£" className="input input-bordered input-info w-full max-w-xs"  />
  <div className='flex justify-center mt-5'>
  <div>
    <p className='flex justify-center'>Answer</p>
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
