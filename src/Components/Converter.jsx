
export function Converter() {
  return (
    <div className=" flex justify-center ">

      <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab " aria-label="Gh₵-U$D" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <input type="text" placeholder="Gh₵" className="input input-bordered input-success w-full max-w-xs" />
        <br />
        <input type="text" placeholder="U$D" className="input input-bordered input-info w-full max-w-xs"  />
        <div>
          <p>Answer</p>
        </div>
    
    
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Gh₵-€UR"  />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Ghc-GBP£" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
</div>


    </div>
  )
}
