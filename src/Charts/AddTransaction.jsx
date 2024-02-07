import { TextInput } from "@tremor/react";
import { useContext, useState } from "react";
import { GlobalContext } from "../ContextApi/GlobalState";


export default function AddTransaction() {

      const [text, setText] = useState("")
      const [description, setDescription] = useState("")
      const [amount, setAmount] = useState(0)
      const {addTransaction} = useContext(GlobalContext);

      const onSubmit = e => {
          e.preventDefault();

          const newTransaction = {
            id:Math.floor(Math.random() * 1000000),
            text,
            description,
            amount: +amount
          }

          addTransaction(newTransaction);
      }

  return (
    <div>
      <h3>
      AddTransaction
      </h3>

        <form action="" onSubmit={onSubmit} >
        <div className="mb-5">
              <label htmlFor="text" className=" mb-3 font-semibold">
                Transaction Type
              </label>
              <TextInput placeholder="eg.internet..." type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="mb-5">
              <label htmlFor="text" className="font-semibold mb-3 ">
                Short Description(Keep it very short)
              </label>
              <TextInput placeholder="eg.Subscription for Netflix...." type="text" id="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className="mb-5">
              <label htmlFor="amount" className="mb-4">
                Cost
              </label>
              <TextInput placeholder="eg.500..." type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </div>
        <button className="btn w-full btn-primary"  >Make Bill Transaction</button>
        </form>




    </div>
  )
}
