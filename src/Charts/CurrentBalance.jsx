import { BadgeDelta, Card, Metric, Text } from "@tremor/react";


export default function CurrentBalance() {







  return (
    <div>

      
      <Card className="lg:w-56  md:w-48 lg:mt-0  sm::mt-0 hover:bg-slate-50" decoration="top" decorationColor="green">
        <div className="flex justify-between">
        <Text>Current Balance</Text>
        <BadgeDelta deltaType="moderateIncrease"/>
        </div>
        <Metric>50,567</Metric>
      </Card>
    </div>
  )
}
