import { BadgeDelta, Metric, Text } from "@tremor/react";
import { GlobalContext } from "../ContextApi/GlobalState";
import { useContext } from "react";


export default function CurrentBalance() {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map( transactions => transactions.amount)
  const expense = amounts.reduce((acc, item)  => (acc += item), 0).toFixed(2)
  const balance = 80000;
  const currentBalance = balance - expense


  return (
    <div>

      
      <div className="lg:w-56  md:w-48 lg:mt-0  sm::mt-0 text-black bg-white hover:bg-slate-50" decoration="top" decorationColor="green">
        <div className="flex justify-between">
        <Text className="text-black">Current Balance</Text>
        <BadgeDelta deltaType="moderateIncrease"/>
        </div>
        <Metric className="text-black">{currentBalance}</Metric>
      </div>
    </div>
  )
}
