import {Card, Metric, Text } from "@tremor/react";
import { useContext } from "react";
import { GlobalContext } from "../ContextApi/GlobalState";




export default function LastTransaction() {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transactions => transactions.amount);
const latestAmount = amounts.length > 0 ? amounts[0] : null;






  return (
    <div>
      <Card className="lg:w-56  md:w-48  lg:mt-0  sm::mt-0 hover:bg-slate-50" decoration="top" decorationColor="yellow">
        <Text>Last Transaction</Text>
        <Metric>{latestAmount}</Metric>
      </Card>

    </div>
  )
}
