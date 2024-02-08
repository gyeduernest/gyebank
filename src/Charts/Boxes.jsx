import { Grid, Col, Card, Text, Metric, Title } from "@tremor/react";
import FirstChart from "./AreaChart";
import { SecondChart } from "./Secondchart";
import { ProgressBars } from "./Progress";
import { Pendingbills } from "./Pendingbills";
import { PaymentMethod } from "../Components/PaymentMethod";
import { Converter } from "../Components/Converter";
import {Histogram } from "./Histogram";
import FinanceGoal from "../Components/FinanceGoal";


export const Boxes = () => (
<div className="flex px-5   lg:ml-96 mb-10">

<Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-8 block sm:block md:grid lg:grid md:px-16 lg:w-[1000px] md:w-full">
<Col numColSpan={2} numColSpanLg={3}>
    <Card className="mb-5">
     <FirstChart/>
    </Card>
  </Col>
  <Card className="mb-5">
      <div className=" mb-2 border rounded-md text-center">
          <PaymentMethod method="Send money" />
      </div>
      <div>
      <SecondChart/>
      </div>
  </Card>
  <Col className="col-span-2">
    <Card className="mb-5">
    <FinanceGoal/>
    </Card>
  </Col>

  <Col className="col-span-2">
    <Card className="mb-5">
     <Histogram/>
    </Card>
  </Col>
  <div className="mb-5 bg-white rounded-md border p-2 py-5">
  <Converter/>
  </div>
</Grid>
</div>
);