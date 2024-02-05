import { useState } from "react"
import { ExpenseType } from "./ExpenseType"



export default function AddTransaction (e){
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [formData, setFormData] = useState("")
  



  const newTransaction = () => {
    setFormData([...newTransaction, ...AddTransaction])
    
  }




  return (
    <div>

              

          <form action="" value={formData} onSubmit={newTransaction}  >
              <div>
                Make a Transaction from your Account
              </div>
                <label htmlFor="ExpenseType">
                  <ExpenseType/>
                </label>
                <label htmlFor="Amount">
                  Amount
                </label>
                <input type="number" placeholder="Ghc 40.00"  id="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <label htmlFor="Amount">
                  Description
                </label>
                <textarea type="text" placeholder="give a brief description"  id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                
                <button className="btn btn-secondary">Pay Bill</button>

              





          </form>


    </div>
  )
}
