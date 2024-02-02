

export default function BillsComp() {
  return (
    <div>
       <h2>Bill payments</h2>
       <div className="py-10 grid grid-cols-3 gap-10">

        <div>
      <button className="btn btn-primary btn-circle text-xs"></button>
      <br />
        Internet
        </div>
        <div>
      <button className="btn btn-primary btn-md btn-circle"></button>
        <br />
        Airtime
        </div>
        <div>
      <button className="btn btn-circle btn-primary btn-md"></button>
      <br />
      Fees 
        </div>
        <div>
      <button className="btn btn-primary  btn-circle btn-md"></button>
      <br />
          Insurance
        </div>
        <div>
      <button className="btn btn-primary btn-md btn-circle"></button>
      <br />
        Rent Bill
        </div>
        <div>
      <button className="btn btn-primary btn-md btn-circle"></button>
      <br />
        Cable TV
        </div>
        <div>
      <button className="btn btn-primary btn-md btn-circle"></button>
      <br />
          Electricity
        </div>
        <div>
      <button className="btn btn-primary btn-md btn-circle"></button>
      <br />
          Mortgage
        </div>
        
        <div>
      <button className="btn btn-primary btn-md btn-circle"></button>
          <br />
          Maintenance
        </div>
       </div>
        <div className="w-full">
       <button className="w-full btn btn-neutral"> Add Bill type</button>

        </div>
      
    </div>
  )
}
