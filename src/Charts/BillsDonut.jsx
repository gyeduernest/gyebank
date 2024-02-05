import { Card, DonutChart, Title } from "@tremor/react";
import { PaymentMethod } from "../Components/PaymentMethod";

const category = [
  {
    name: "Internet",
    cost: 980,
  },
  {
    name: "Cable TV",
    cost: 480,
  },
  {
    name: "Electricity",
    cost: 398,
  },
  {
    name: "Netflix",
    cost: 240,
  }
];

const valueFormatter = (number) => `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const customTooltip = ({ payload, active }) => {
  if (!active || !payload) return null;
  const categoryPayload = payload?.[0];
  if (!categoryPayload) return null;
  return (
    <div className="w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
      <div className="flex flex-1 space-x-2.5">
        <div className={`w-1.5 flex flex-col bg-${categoryPayload?.color}-500 rounded`} />
        <div className="w-full">
          <div className="flex items-center justify-between space-x-8">
            <p className="text-right text-tremor-content whitespace-nowrap">
              {categoryPayload.name}
            </p>
            <p className="font-medium text-right whitespace-nowrap text-tremor-content-emphasis">
              {categoryPayload.value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BillsDonut = () => {
  return (
    <>
      <Card className="mb-5 mx-auto p-5 max-w-xs">
        <Title className="text-center text-slate-600 font-inter font-medium">Bills Paid for Past Month </Title>
        <DonutChart
          className="mt-6 h-24"
          data={category}
          category="cost"
          index="name"
          valueFormatter={valueFormatter}
          customTooltip={customTooltip}
        />
      </Card>
     <Card>
     <PaymentMethod method="Pay my bills"  />
     </Card>
    </>
  );
};