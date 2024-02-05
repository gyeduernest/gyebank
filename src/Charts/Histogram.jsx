import { BarChart, Card, Title } from "@tremor/react";

  const chartdata = [
    {
      name: "Internet",
      Cost: 2488,
    },
    {
      name: "Cable Tv",
      Cost: 1445,
    },
    {
      name: "Electricity",
      Cost: 743,
    },
    {
      name: "Gas",
      Cost: 281,
    },
  ];

const valueFormatter = (number) => ` ${new Intl.NumberFormat("us").format(number).toString()}`;

export function Histogram(){
 return (
  <Card>
    <Title>Expenses based on categories</Title>
    <BarChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["Cost"]}
      colors={["blue"]}
      valueFormatter={valueFormatter}
      yAxisWidth={48}
    />
  </Card>
);
}