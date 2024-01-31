import {  Flex, ProgressBar, Text } from "@tremor/react";

export const ProgressBars = () => (
  <div className="mt-2 mb-4 max-w-sm mx-auto">
    <Flex>
      <Text>$ 9,012 &bull; 45%</Text>
      <Text>$ 20,000</Text>
    </Flex>
    <ProgressBar value={45} color="green" className="mt-3" />
  </div>
);