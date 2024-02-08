import {Card, Metric, Text } from "@tremor/react";
import { useContext } from "react";
import { GlobalContext } from "../ContextApi/GlobalState";




export default function LastTransaction() {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transactions => transactions.amount);
const latestAmount = amounts.length > 0 ? amounts[0] : null;






  return (
    <div>
      <div className="lg:w-56  md:w-48  lg:mt-0  sm::mt-0 hover:bg-slate-50 bg-white text-black" decoration="top" decorationColor="yellow">
        <Text className="text-black">Last Transaction</Text>
        <Metric className="text-black">{latestAmount}</Metric>
      </div>

    </div>
  )
}
