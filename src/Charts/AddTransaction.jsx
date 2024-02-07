import { TextInput } from "@tremor/react";
import { useContext, useState } from "react";
import { GlobalContext } from "../ContextApi/GlobalState";


export default function AddTransaction() {

      const [text, setText] = useState("")
      const [amount, setAmount] = useState(0)
      const {addTransaction} = useContext(GlobalContext);

      const onSubmit = e => {
          e.preventDefault();

          const newTransaction = {
            id:Math.floor(Math.random() * 1000000),
            text,
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
        <div>
              <label htmlFor="text">
                Item name
              </label>
              <TextInput placeholder="eg.internet..." type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
              <label htmlFor="amount">
                Cost
              </label>
              <TextInput placeholder="eg.500..." type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </div>
        <button className="btn btn-primary"  >Make Transaction</button>
        </form>




    </div>
  )
}
