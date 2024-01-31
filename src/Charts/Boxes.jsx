import { Grid, Col, Card, Text, Metric, Title } from "@tremor/react";
import FirstChart from "./AreaChart";
import { SecondChart } from "./Secondchart";
import Mastercard from "../assets/Paymethods/mastercard.svg"
import { ProgressBars } from "./Progress";
import { Pendingbills } from "./Pendingbills";
import { CurrencyConverter } from "./CurrencyConverter";
import Yellowalert from "../Components/Yellowalert";


export const Boxes = () => (
<div className="flex px-5   lg:ml-96 mb-10">

<Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-8 block sm:block md:grid lg:grid md:px-16 lg:w-[1000px] md:w-full">
<Col numColSpan={2} numColSpanLg={3}>
    <Card className="mb-5">
     <FirstChart/>
    </Card>
  </Col>
  <Card className="mb-5">
      <div className=" mb-2 border rounded-md text-center py-2">
      <Title className="font-inter font-medium"> Payment Method</Title>
          <img src={Mastercard} alt="" className="w-full h-32" />

      </div>
      <div className="flex lg:gap-3 justify-center gap-5 mb-10 lg:mb-5">
      <button className="btn  btn-active btn-secondary">
          <p className="text-xs">Add Method</p>
      </button>
      <button className="btn bg-slate-800 text-slate-50">
          <p className="text-xs">
            Change Method
          </p>
      </button>
        
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
  <Title>Currency Converter</Title>
      <CurrencyConverter/>
    <Yellowalert/>
  </Card>
  <Col className="col-span-2">
    <Card className="mb-5">
     <FirstChart/>
    </Card>
  </Col>
</Grid>
</div>
);