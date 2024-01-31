import { BadgeDelta, Card, Metric, Text } from "@tremor/react";

export default function LastTransaction() {
  return (
    <div>
      <Card className="lg:w-56  md:w-48  lg:mt-0  sm::mt-0" decoration="top" decorationColor="yellow">
        <Text>Last Transaction</Text>
        <Metric>$ 34,743</Metric>
      </Card>

    </div>
  )
}
