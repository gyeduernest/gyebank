import { useContext } from "react"
import { GlobalContext } from "../ContextApi/GlobalState"





export  default function TransactionList(){
const {transactions} = useContext(GlobalContext);
const {handleDelete} = useContext(GlobalContext);


  return (
    <div>
      
        <h3> All Expenses made over time</h3>

              {transactions.map(transactions => (
                <div className="p-3 mb-3 border rounded-md w-full items-center justify-between flex" key={transactions.id}>
                  <div className="w-1/3 p-2 text-wrap"> 
                <div className="font-semibold">{transactions.text}</div>
                  <p className="text-xs text-slate-500 font-normal">{transactions.description}</p>
                  </div>
                <div>{transactions.amount}</div>
                <button onClick={() => handleDelete(transactions.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className=" w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
              </div>
                   
              ))}

    </div>
  )
}
