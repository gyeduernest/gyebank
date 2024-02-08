import { Grid, Col, Card, Title, Text, Metric } from "@tremor/react";
import BillsComp from "./BillsComp";
import { BillsDonut } from "../Charts/BillsDonut";


export default function BillsGrid() {
  return (
    <div>
         <div className=" py-5 flex justify-center  lg:pl-40 bg-white text-black">
<Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2 bg-white text-black lg:pl-40">

  <Col numColSpanLg={2} numColSpan={1} className="bg-white text-black">
  <Card className=" bg-white text-black flex justify-center">
        <BillsComp/>
  </Card>
  </Col>
  <Col numColSpan={1} numColSpanLg={1} className="bg-white text-black">
    <Card className="bg-white text-black">
        <BillsDonut/>
    </Card>
  </Col>
  
</Grid>

  </div>


    </div>
  )
}
