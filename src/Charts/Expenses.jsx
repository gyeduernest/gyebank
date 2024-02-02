import { BadgeDelta, Card, Metric, Text } from "@tremor/react";

export default function Expenses() {
  return (
    <div>
        <Card className="lg:w-56 hover:bg-slate-50 md:w-48  lg:mt-0   sm::mt-0" decoration="top" decorationColor="red">
        <Text>Expenses</Text>
        <Metric>$ 34,743</Metric>
      </Card>
    </div>
  )
}
