import { BadgeDelta, Card, Metric, Text } from "@tremor/react";

export default function Income() {
  return (
    <div>
      <Card className="lg:w-56  md:w-48 lg:mt-0  sm::mt-0" decoration="top" decorationColor="green">
        <div className="flex justify-between">
        <Text>Income</Text>
        <BadgeDelta deltaType="moderateIncrease"/>
        </div>
        <Metric>$ 34,743</Metric>
      </Card>
    </div>
  )
}
