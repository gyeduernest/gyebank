import { Grid, Col, Card, Text, Metric, Title } from "@tremor/react";
import FirstChart from "./AreaChart";
import { SecondChart } from "./Secondchart";
import Mastercard from "../assets/Paymethods/mastercard.svg"
import { ProgressBars } from "./Progress";
import { Pendingbills } from "./Pendingbills";
import { CurrencyConverter } from "./CurrencyConverter";
import Yellowalert from "../Components/Yellowalert";
import { PaymentMethod } from "../Components/PaymentMethod";
import { Converter } from "../Components/Converter";


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
          <PaymentMethod/>
      </div>
      
      
      <SecondChart/>

  </Card>
  <Col className="">
    <Card className="mb-5">
    <Title>Financial Goals</Title>
      <ProgressBars/>
      <ProgressBars/>
      <ProgressBars/>
      <ProgressBars/>
      <button className="btn btn-primary w-full"> Add Financial Goal</button>
    </Card>
  </Col>
  <Card className="mb-5">
    <Pendingbills/>

  </Card>
  <Card className="mb-5">
  <Converter/>
  </Card>
  <Col className="col-span-2">
    <Card className="mb-5">
     <FirstChart/>
    </Card>
  </Col>
</Grid>
</div>
);