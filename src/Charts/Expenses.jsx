import { Card, Metric, Text } from "@tremor/react";
import { GlobalContext } from "../ContextApi/GlobalState";
import { useContext } from "react";


export default function Expenses() {

  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map( transactions => transactions.amount)
  const expense = amounts.reduce((acc, item)  => (acc += item), 0).toFixed(2)




  return (
    <div>
        <Card className="lg:w-56 hover:bg-slate-50 md:w-48  lg:mt-0   sm::mt-0" decoration="top" decorationColor="red">
        <Text> Total Expenses</Text>
        <Metric>{expense}</Metric>
      </Card>
    </div>
  )
}
